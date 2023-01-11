var path = require("path");
var fs = require("fs");

/**
 * Reads .md files of each collection in /content/ subfolders and creates JSON file with all the information.
 */
var getCollections = function () {
    var dir = path.join(__dirname, "../content/");
    // Get all subfolders of content/, those being the collections of Netlify CMS
    fs.readdir(dir, function (err, subfolders) {
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
var getSubfolderContent = function (subfolders) {
    subfolders.forEach(function (folder) {
        var dirPath = path.join(__dirname, "../content/".concat(folder));
        fs.readdir(dirPath, function (err, files) {
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
var formatDate = function (date) {
    var datetimeArray = date.split("T");
    var dateArray = datetimeArray[0].split("-");
    var timeArray = datetimeArray[1].split(":");
    var time = "".concat(timeArray[0], ":").concat(timeArray[1]);
    return { month: dateArray[1], day: dateArray[2], year: dateArray[0], time: time };
};
/**
 * Reads the content of every file inside the folder and writes a JSON file with all the content condensed.
 */
var getFilesContent = function (files, dirPath, folder) {
    var elementList = [];
    var indexList = [];
    files.forEach(function (file, index) {
        fs.readFile("".concat(dirPath, "/").concat(file), "utf8", function (err, contents) {
            if (err) {
                return console.error("Failed to read file of directory: " + err.message);
            }

            contents = JSON.parse(contents);
            var timestamp = [];
            if (contents) {
                if (contents.date) {
                    var parsedDate = contents.date ? formatDate(contents.date) : new Date();
                    var datestring = "".concat(parsedDate["year"], "-").concat(parsedDate["month"], "-").concat(parsedDate["day"], "T").concat(parsedDate["time"], ":00");
                    var date = new Date(datestring);
                    timestamp[0] = date.getTime() / 1000;
                    contents.id = timestamp[0];
                    delete (contents.date);
                }
                else if (contents.sort) {
                    contents.id = parseInt(contents.sort);
                    delete (contents.sort);
                }
                else contents.id = -1;
            }

            elementList.push(contents);
            indexList.push(index);
            // Check if files and indexes match
            if (indexList.length === files.length) {
                // Sort based on published time

                var sortedList = elementList
                    .sort(function (a, b) {
                        return a.id > b.id ? 1 : -1;
                    })
                    .filter(function (element) { return element.id !== -1; });
                fs.writeFileSync("src/content/".concat(folder, ".json"), JSON.stringify(sortedList));
            }
        });
    });
};
getCollections();
