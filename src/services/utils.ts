import fetch from "isomorphic-fetch";
import { isValidImage } from "./imageUtils";

export const API_BASE = "/api";

export const API_BASE_URL = process.env.API_BASE_URL;

export const setImagesDirectoryForProject = (imagesDir: string) => {
  return function getImageGivenDir(fileName: string) {
    const isValid = isValidImage(fileName);
    if (isValid) {
      return `${imagesDir}/${fileName}`;
    }
  };
};

export const setApiBaseForProject = (apiDir: string) => {
  return function getApiEndpointGivenDir(endpoint: string) {
    return `${apiDir}${endpoint}`;
  };
};

export const fetcher = (url) =>
  fetch(url)
    .then((r) => r.json())
    .catch((err) => console.warn(err));
