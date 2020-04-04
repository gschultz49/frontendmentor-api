import {
  API_BASE,
  setImagesDirectoryForProject,
  setApiBaseForProject,
} from "../utils";

export const PROJECT_DIR_NAME = "/easybank";
export const PROJECT_API_PATH = `${API_BASE}${PROJECT_DIR_NAME}`;

export const IMAGES_DIR_NAME = "/images";
export const IMAGES_PATH = `${PROJECT_DIR_NAME}${IMAGES_DIR_NAME}`;

export const getImage = setImagesDirectoryForProject(IMAGES_PATH);

export const getEndpoint = setApiBaseForProject(PROJECT_API_PATH);
