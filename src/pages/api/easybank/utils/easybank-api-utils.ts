import { API_BASE, setImagesDirectoryForProject } from "../../utils";

export const PROJECT_DIR_NAME = "/easybank";
export const PROJECT_API_PATH = `${API_BASE}${PROJECT_DIR_NAME}`;

export const IMAGES_DIR_NAME = "/images";
export const IMAGES_PATH = `${PROJECT_DIR_NAME}${IMAGES_DIR_NAME}`;

export const getWhyChooseFileName = "/get-whyChoose";
export const getArticlesFileName = "/get-articles";

export const GetWhyChooseCardsEndpoint = `${PROJECT_API_PATH}${getWhyChooseFileName}`;
export const GetArticlesEndpoint = `${PROJECT_API_PATH}${getArticlesFileName}`;

export const getImage = setImagesDirectoryForProject(IMAGES_PATH);
