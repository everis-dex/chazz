const path = require("path");
const fs = require("fs");

type FormatedDate = {
  month: string;
  day: string;
  year: string;
  time: string;
};

interface Metadata {
  date?: string;
  section?: string;
  title?: string;
  subtitle?: string;
  image?: string;
  description?: string;
  service?: string;
  value?: string;
  content?: string;
  name?: string;
  logo?: string;
  website?: string;
  city?: string;
  phone?: string;
  email?: string;
  address?: string;
  sort?: string;
}

interface BuiltElement {
  id: number;
  section?: string;
  title?: string;
  subtitle?: string;
  image?: string;
  description?: string;
  service?: string;
  value?: string;
  name?: string;
  logo?: string;
  website?: string;
  city?: string;
  phone?: string;
  email?: string;
  address?: string;
  body?: string;
}

const blankMetadata: Metadata = {
  date: "",
  section: "",
  title: "",
  subtitle: "",
  image: "",
  description: "",
  content: "",
  name: "",
  logo: "",
  website: "",
  city: "",
  phone: "",
  email: "",
  address: "",
  sort: "",
};

/**
 * Reads .md files of each collection in /content/ subfolders and creates JSON file with all the information.
 */
const getCollections = () => {
  const dir: string = path.join(__dirname, `../content/`);
  // Get all subfolders of content/, those being the collections of Netlify CMS
  fs.readdir(dir, (err: Error, subfolders: string[]) => {
    if (err) {
      return console.error("Failed to list subfolders of directory: " + err.message);
    }
    // Get files from each collection
    getSubfolderContent(subfolders);
    return;
  });
  return;
};

/**
 * Reads inside every subfolder to get the content of each file it contains.
 */
const getSubfolderContent = (subfolders: string[]) => {
  subfolders.forEach(folder => {
    const dirPath: string = path.join(__dirname, `../content/${folder}`);
    fs.readdir(dirPath, (err: Error, files: string[]) => {
      if (err) {
        return console.error("Failed to list contents of directory: " + err.message);
      }
      getFilesContent(files, dirPath, folder);
    });
  });
};

/**
 * Callback used when reducing metadataIndexes.
 */
const getMetadataIndexes = (acc: number[], elem: string, index: number): number[] => {
  if (/^---/.test(elem)) {
    acc.push(index);
  }
  return acc;
};

/**
 * Remove all content info and format properties in an object.
 */
/** */
const parseMetadata = (lines: string[], metadataIndexes: number[]): Metadata => {
  if (metadataIndexes.length > 0) {
    const metadata: Metadata = blankMetadata;
    const metadataLines: string[] = lines.slice(metadataIndexes[0] + 1, metadataIndexes[1]);
    metadataLines.forEach(line => {
      metadata[line.split(": ")[0]] = line.split(": ")[1];
    });
    return metadata;
  }
  return blankMetadata;
};

/**
 * Remove all metadata info and extract only the content after --- separator.
 */
const parseContent = (lines: string[], metadataIndexes: number[]): string => {
  if (metadataIndexes.length > 0) {
    lines = lines.slice(metadataIndexes[1] + 1, lines.length);
  }
  return lines.join("\n");
};

/**
 * Return recieved date into an object with different properties.
 */
const formatDate = (date: string): FormatedDate => {
  const datetimeArray: string[] = date.split("T");
  const dateArray: string[] = datetimeArray[0].split("-");
  const timeArray: string[] = datetimeArray[1].split(":");
  const time: string = `${timeArray[0]}:${timeArray[1]}`;

  return { month: dateArray[1], day: dateArray[2], year: dateArray[0], time };
};

/**
 * Construct the element object based on the collection they belong to.
 */
const constructElement = (
  folder: string,
  metadata: Metadata,
  data: { timestamp: number; content: string }
): BuiltElement => {
  if (!folder || !metadata) return { id: -1 };
  const element: BuiltElement = { id: -1 };

  switch (folder) {

    case "homeheader":
      element.id = data.timestamp;
      element.title = metadata.title ? metadata.title : "No title given";
      element.subtitle = metadata.subtitle ? metadata.subtitle : "No subtitle given";
      element.image = metadata.image;
      break;

    case "homeintro":
      element.id = data.timestamp;
      element.title = metadata.title ? metadata.title : "No title given";
      element.subtitle = metadata.subtitle ? metadata.subtitle : "No subtitle given";
      break;

    case "projects":
      element.id = data.timestamp;
      element.title = metadata.title ? metadata.title : "No title given";
      element.subtitle = metadata.subtitle ? metadata.subtitle : "No subtitle given";
      element.image = metadata.image;
      element.description = metadata.description;
      element.service = metadata.service;
      element.value = metadata.value;
      element.body = data.content ? data.content : "No content given";
      break;

    case "partners":
      element.id = metadata.sort ? parseInt(metadata.sort) : -1;
      // element.id = data.timestamp;
      element.logo = metadata.logo;
      element.website = metadata.website;
      element.name = metadata.name;
      break;

    case "categories":
      element.id = data.timestamp;
      element.title = metadata.title ? metadata.title : "No title given";
      element.section = metadata.section;
      element.body = data.content ? data.content : "No content given";
      break;

    case "offices":
      element.id = data.timestamp;
      element.city = metadata.city;
      element.phone = metadata.phone;
      element.email = metadata.email;
      element.address = metadata.address;
      break;

    case "studios":
      element.id = data.timestamp;
      element.city = metadata.city;
      break;

    case "get-in-touch":
      element.id = data.timestamp;
      element.title = metadata.title;
      element.email = metadata.email;
      break;

    case "ourworkintro":
      element.id = data.timestamp;
      element.title = metadata.title;
      break;


    default:
      console.error("\n ----------------------------------- \n");
      console.error(
        `ERROR: '${folder}' collection is missing. \n\nGo to public/main.js to add configuration in 'constructElement' method`
      );
      console.error("\n ----------------------------------- \n");
      break;
  }
  return element;
};

/**
 * Reads the content of every file inside the folder and writes a JSON file with all the content condensed.
 */
const getFilesContent = (files: string[], dirPath: string, folder: string) => {
  const elementList: BuiltElement[] = [];
  const indexList: number[] = [];

  files.forEach((file, index) => {
    fs.readFile(`${dirPath}/${file}`, "utf8", (err: Error, contents: string) => {
      if (err) {
        return console.error("Failed to read file of directory: " + err.message);
      }
      const lines: string[] = contents.split("\n");
      const metadataIndexes: number[] = lines.reduce(getMetadataIndexes, []);
      const metadata: Metadata = lines ? parseMetadata(lines, metadataIndexes) : blankMetadata;
      const content: string = parseContent(lines, metadataIndexes);
      const timestamp: number[] = [];

      if (metadata && metadata.date) {
        const parsedDate = metadata.date ? formatDate(metadata.date) : new Date();
        const datestring = `${parsedDate["year"]}-${parsedDate["month"]}-${parsedDate["day"]}T${parsedDate["time"]}:00`;
        const date = new Date(datestring);
        timestamp[0] = date.getTime() / 1000;
      }

      const element = constructElement(folder, metadata, { timestamp: timestamp[0], content });
      elementList.push(element);
      indexList.push(index);

      // Check if files and indexes match
      if (indexList.length === files.length) {
        // Sort based on published time
        const sortedList = elementList
          .sort((a, b) => {
            return a.id > b.id ? 1 : -1;
          })
          .filter(element => element.id !== -1);

        fs.writeFileSync(`src/content/${folder}.json`, JSON.stringify(sortedList));
      }
    });
  });
};

getCollections();
