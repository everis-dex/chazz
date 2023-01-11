const path = require("path");
const fs = require("fs");

type FormatedDate = {
  month: string;
  day: string;
  year: string;
  time: string;
};

interface BuiltElement {
  id: number;
}

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
 * Reads the content of every file inside the folder and writes a JSON file with all the content condensed.
 */
const getFilesContent = (files: string[], dirPath: string, folder: string) => {
  const elementList: BuiltElement[] = [];
  const indexList: number[] = [];

  files.forEach((file, index: number) => {
    fs.readFile(`${dirPath}/${file}`, "utf8", (err: Error, contents: string) => {
      if (err) {
        return console.error("Failed to read file of directory: " + err.message);
      }
      var contentJSON = JSON.parse(contents);
      var timestamp: number = -1;
      if (contentJSON) {
        if (contentJSON.date) {
          const parsedDate = contentJSON.date ? formatDate(contentJSON.date) : new Date();
          const datestring = `${parsedDate["year"]}-${parsedDate["month"]}-${parsedDate["day"]}T${parsedDate["time"]}:00`;
          const date = new Date(datestring);
          timestamp = date.getTime() / 1000;
          contentJSON.id = timestamp;
          delete contentJSON.date;
        } else if (contentJSON.sort) {
          contentJSON.id = parseInt(contentJSON.sort);
          delete contentJSON.sort;
        } else contentJSON.id = -1;
      }

      elementList.push(contentJSON);
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
