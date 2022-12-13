import { Category, Project, Partner, Office, Studio, Slide } from "../src/interfaces/interfaces";

const path = require("path");
const fs = require("fs");

type FormatDate = { month: string; day: string; year: string; time: string };
/**
 * Return recieved date into an object with different properties.
 * @param {dateTime} date - date to be formatted.
 *
 * @return {FormatDate} structured properties of recieved date.
 */
function formatDate(date: string): FormatDate {
  const datetimeArray: string[] = date.split("T");
  const dateArray: string[] = datetimeArray[0].split("-");
  const timeArray: string[] = datetimeArray[1].split(":");
  const time: string = `${timeArray[0]}:${timeArray[1]}`;

  return { month: dateArray[1], day: dateArray[2], year: dateArray[0], time };
}

/**
 * Callback used when reducing metadataIndexes.
 * @param {number[]} acc - TODO: .
 * @param {string} elem - content of the element.
 * @param {int} index - index of the current element.
 *
 * @return {number[]} indexes of where Metadata is defined.
 */
function getMetadataIndexes(acc: number[], elem: string, index: number): number[] {
  if (/^---/.test(elem)) acc.push(index);
  return acc;
}

/**
 * Remove all content info and format properties in an object.
 * @param {string[]} lines - lines of the current read file.
 * @param {number[]} metadataIndexes - obtained indexes from getMetadataIndexes function.
 * TODO: aún queda el return
 * @return {object} obtained structured information of lines.
 */
function parseMetadata(lines: string[], metadataIndexes: number[]) {
  if (metadataIndexes.length > 0) {
    let data = {};
    let metadata: string[] = lines.slice(metadataIndexes[0] + 1, metadataIndexes[1]);
    metadata.forEach(line => {
      data[line.split(": ")[0]] = line.split(": ")[1];
    });
    return data;
  }
}

/**
 * Remove all metadata info and extract only the content after --- separator.
 * @param {string[]} lines - lines of the current read file.
 * @param {number[]} metadataIndexes - obtained indexes from getMetadataIndexes function.
 *
 * @return {string} obtained lines of content.
 */
function parseContent(lines: string[], metadataIndexes: number[]): string {
  if (metadataIndexes.length > 0) {
    lines = lines.slice(metadataIndexes[1] + 1, lines.length);
  }
  return lines.join("\n");
}

/**
 * Reads .md files of each collection in /content/ subfolders and creates JSON file with all the information.
 */
function getCollections() {
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
}

/**
 * Reads inside every subfolder to get the content of each file it contains.
 * @param {string[]} subfolders - found folders inside /content/, the existing collections.
 */
function getSubfolderContent(subfolders: string[]) {
  subfolders.forEach(folder => {
    const dirPath: string = path.join(__dirname, `../content/${folder}`);
    fs.readdir(dirPath, (err: Error, files: string[]) => {
      if (err) {
        return console.error("Failed to list contents of directory: " + err.message);
      }
      getFilesContent(files, dirPath, folder);
    });
  });
}

/**
 * Reads the content of every file inside the folder and writes a JSON file with all the content condensed.
 * @param {string[]} files - array of file names inside the folder.
 * @param {string} dirPath - path of the folder where files are stored.
 * @param {string} folder - name of the collection folder.
 */
function getFilesContent(files: string[], dirPath: string, folder: string) {
  let elementList = [];
  let indexList = [];
  files.forEach((file, index) => {
    fs.readFile(`${dirPath}/${file}`, "utf8", (err: Error, contents: string) => {
      if (err) {
        return console.error("Failed to read file of directory: " + err.message);
      }
      const lines: string[] = contents.split("\n");
      const metadataIndexes: number[] = lines.reduce(getMetadataIndexes, []);
      const metadata = parseMetadata(lines, metadataIndexes);
      const content: string = parseContent(lines, metadataIndexes);
      let timestamp = -1;

      if (metadata.date) {
        const parsedDate = metadata.date ? formatDate(metadata.date) : new Date();
        const datestring = `${parsedDate["year"]}-${parsedDate["month"]}-${parsedDate["day"]}T${parsedDate["time"]}:00`;
        const date = new Date(datestring);
        timestamp = date.getTime() / 1000;
      }

      const element = constructElement(folder, metadata, { timestamp, content });
      elementList.push(element);
      indexList.push(index);

      // Check if files and indexes match
      if (indexList.length === files.length) {
        // Sort based on published time
        const sortedList = elementList.sort((a, b) => {
          return a.id > b.id ? 1 : -1;
        });
        fs.writeFileSync(`src/content/${folder}.json`, JSON.stringify(sortedList));
      }
    });
  });
}

/**
 * Construct the element object based on the collection they belong to.
 * @param {string} folder - represents the collection of the file.
 * @param {object} metadata - all parameters of collection from .md file.
 * @param {object} data - timestamp and content of the file.
 *
 * @return {object} structured element properties with defined content.
 */
function constructElement(folder: string, metadata: object, data: { timestamp: number; content: string }) {
  if (!folder || !metadata) return {};
  let element = {};
  switch (folder) {
    case "projects":
      element = {
        id: data.timestamp,
        title: metadata.title ? metadata.title : "No title given",
        subtitle: metadata.subtitle ? metadata.subtitle : "No subtitle given",
        image: metadata.image,
        branding: metadata.branding,
        service: metadata.service,
        value: metadata.value,
        body: data.content ? data.content : "No content given"
      };
      break;
    case "partners":
      element = {
        id: parseInt(metadata.sort),
        partner: metadata.partner
      };
      break;
    case "categories":
      element = {
        id: data.timestamp,
        title: metadata.title ? metadata.title : "No title given",
        section: metadata.section,
        body: data.content ? data.content : "No content given"
      };
      break;
    case "offices":
      element = {
        id: data.timestamp,
        city: metadata.city,
        phone: metadata.phone,
        email: metadata.email,
        address: metadata.address
      };
      break;
    case "studios":
      element = {
        id: data.timestamp,
        city: metadata.city
      };
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
}

getCollections();
