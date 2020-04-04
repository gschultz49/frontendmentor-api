import { isValidImage } from "./imageUtils";

export const API_BASE = "/api";

export const setImagesDirectoryForProject = (imagesDir: string) => {
  return function getImageGivenDir(fileName: string) {
    const isValid = isValidImage(fileName);
    if (isValid) {
      return `${imagesDir}/${fileName}`;
    }
  };
};
