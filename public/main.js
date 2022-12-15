var path = require("path");
var fs = require("fs");
var blankMetadata = {
    date: "",
    section: "",
    title: "",
    subtitle: "",
    image: "",
    branding: "",
    service: "",
    value: "",
    content: "",
    partner: "",
    logo: "",
    website: "",
    city: "",
    phone: "",
    email: "",
    address: "",
    sort: ""
};
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
 * Callback used when reducing metadataIndexes.
 */
var getMetadataIndexes = function (acc, elem, index) {
    if (/^---/.test(elem)) {
        acc.push(index);
    }
    return acc;
};
/**
 * Remove all content info and format properties in an object.
 */
/** */
var parseMetadata = function (lines, metadataIndexes) {
    if (metadataIndexes.length > 0) {
        var metadata_1 = blankMetadata;
        var metadataLines = lines.slice(metadataIndexes[0] + 1, metadataIndexes[1]);
        metadataLines.forEach(function (line) {
            metadata_1[line.split(": ")[0]] = line.split(": ")[1];
        });
        return metadata_1;
    }
    return blankMetadata;
};
/**
 * Remove all metadata info and extract only the content after --- separator.
 */
var parseContent = function (lines, metadataIndexes) {
    if (metadataIndexes.length > 0) {
        lines = lines.slice(metadataIndexes[1] + 1, lines.length);
    }
    return lines.join("\n");
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
 * Construct the element object based on the collection they belong to.
 */
var constructElement = function (folder, metadata, data) {
    if (!folder || !metadata)
        return { id: -1 };
    var element = { id: -1 };
    switch (folder) {
        case "projects":
            element.id = data.timestamp;
            element.title = metadata.title ? metadata.title : "No title given";
            element.subtitle = metadata.subtitle ? metadata.subtitle : "No subtitle given";
            element.image = metadata.image;
            element.branding = metadata.branding;
            element.service = metadata.service;
            element.value = metadata.value;
            element.body = data.content ? data.content : "No content given";
            break;
        case "partners":
            element.id = metadata.sort ? parseInt(metadata.sort) : -1;
            // element.id = data.timestamp;
            element.logo = metadata.logo;
            element.website = metadata.website;
            element.partner = metadata.partner;
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
        default:
            console.error("\n ----------------------------------- \n");
            console.error("ERROR: '".concat(folder, "' collection is missing. \n\nGo to public/main.js to add configuration in 'constructElement' method"));
            console.error("\n ----------------------------------- \n");
            break;
    }
    return element;
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
            var lines = contents.split("\n");
            var metadataIndexes = lines.reduce(getMetadataIndexes, []);
            var metadata = lines ? parseMetadata(lines, metadataIndexes) : blankMetadata;
            var content = parseContent(lines, metadataIndexes);
            var timestamp = [];
            if (metadata && metadata.date) {
                var parsedDate = metadata.date ? formatDate(metadata.date) : new Date();
                var datestring = "".concat(parsedDate["year"], "-").concat(parsedDate["month"], "-").concat(parsedDate["day"], "T").concat(parsedDate["time"], ":00");
                var date = new Date(datestring);
                timestamp[0] = date.getTime() / 1000;
            }
            var element = constructElement(folder, metadata, { timestamp: timestamp[0], content: content });
            elementList.push(element);
            indexList.push(index);
            // Check if files and indexes match
            if (indexList.length === files.length) {
                // Sort based on published time
                var sortedList = elementList
                    .sort(function (a, b) {
                    return a.id > b.id ? 1 : -1;
                })
                    .filter(function (element) { return element.id != -1; });
                fs.writeFileSync("src/content/".concat(folder, ".json"), JSON.stringify(sortedList));
            }
        });
    });
};
getCollections();
