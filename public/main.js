const path = require("path");
const fs = require("fs");

const formatDate = (date) => {
  const datetimeArray = date.split("T");
  const dateArray = datetimeArray[0].split("-");
  const timeArray = datetimeArray[1].split(":");
  const time = `${timeArray[0]}:${timeArray[1]}`;

  return { month: dateArray[1], day: dateArray[2], year: dateArray[0], time };
};

const getMetadataIndices = (acc, elem, i) => {
  if (/^---/.test(elem)) acc.push(i);
  return acc;
};

const parseMetadata = ({ lines, metadataIndices }) => {
  if (metadataIndices.length > 0) {
    let data = {};
    let metadata = lines.slice(
      metadataIndices[0] + 1,
      metadataIndices[1]
    );
    metadata.forEach((line) => {
      data[line.split(": ")[0]] = line.split(": ")[1];
    });
    return data;
  }
};

const parseContent = ({ lines, metadataIndices }) => {
  if (metadataIndices.length > 0) {
    lines = lines.slice(metadataIndices[1] + 1, lines.length);
  }
  return lines.join("\n");
};

const getCollections = () => {
  const dir = path.join(__dirname, `../content/`);
  // Get all subfolders of content/, those being the collections of Netlify CMS
  fs.readdir(dir, (err, subfolders) => {
    if (err) {
      return console.error("Failed to list subfolders of directory: " + err.message);
    }
    // Get files from each collection
    getSubfolderContent(subfolders);
    return;
  });
  return;
};

function getSubfolderContent(subfolders) {
  subfolders.forEach(folder => {
    const dirPath = path.join(__dirname, `../content/${folder}`);
    fs.readdir(dirPath, (err, files) => {
      if (err) {
        return console.error("Failed to list contents of directory: " + err.message);
      }
      getFilesContent(files, dirPath, folder);
    });
  });
}

function getFilesContent(files, dirPath, folder) {
  let elementList = [], indexList = [];
  files.forEach((file, index) => {
    fs.readFile(`${dirPath}/${file}`, "utf8", (err, contents) => {
      if (err) {
        return console.error("Failed to read file of directory: " + err.message);
      }
      const lines = contents.split("\n");
      const metadataIndices = lines.reduce(getMetadataIndices, []);
      const metadata = parseMetadata({ lines, metadataIndices });
      const content = parseContent({ lines, metadataIndices });
      let timestamp = -1;

      if (metadata.date) {
        const parsedDate = metadata.date ? formatDate(metadata.date) : new Date();
        const datestring = `${parsedDate["year"]}-${parsedDate["month"]}-${parsedDate["day"]}T${parsedDate["time"]}:00`;
        const date = new Date(datestring);
        timestamp = date.getTime() / 1000;
      }

      const element = constructElement(folder, timestamp, metadata, content);
      elementList.push(element);
      indexList.push(index);

      // Check if files and indexes match
      if (indexList.length === files.length) {
        // Sort based on published time
        const sortedList = elementList.sort((a, b) => {
          return a.id < b.id ? 1 : -1;
        });
        fs.writeFileSync(`src/content/${folder}.json`, JSON.stringify(sortedList));
      }
    });
  });
}

function constructElement(collection, timestamp, metadata, content) {
  let element = {};
  switch (collection) {
    case "projects":
      element = {
        id: timestamp,
        title: metadata.title ? metadata.title : "No title given",
        subtitle: metadata.subtitle ? metadata.subtitle : "No subtitle given",
        image: metadata.image,
        branding: metadata.branding,
        service: metadata.service,
        value: metadata.value,
        body: content ? content : "No content given",
      };
      break;
    case "partners":
      element = {
        id: metadata.sort,
        partner: metadata.partner
      };
      break;
    case "categories":
      element = {
        id: timestamp,
        title: metadata.title ? metadata.title : "No title given",
        section: metadata.section,
        body: content ? content : "No content given",
      };
      break;
    case "offices":
      element = {
        id: timestamp,
        city: metadata.city,
        phone: metadata.phone,
        email: metadata.email,
        address: metadata.address,
      };
      break;
    default:
      break;
  }
  return element;
}

getCollections();
