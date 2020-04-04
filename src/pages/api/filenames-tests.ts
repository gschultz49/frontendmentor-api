import { isValidImage } from "./imageUtils";

const goodFilesNames = [
  "good-image.png",
  "good-image",
  "good-image.fl;dhgjlfhdskjghlfkz",
];

const badFilesNames = [
  "/badslash.png",
  "////lotsofslashes.png",
  ".png",
  "jfhdskjghkdfs",
];

// goodFilesNames.forEach(retrieveImage);
// badFilesNames.forEach(retrieveImage);
