import { getEndpoint } from "./easybank-api-utils";
import { fetcher } from "../utils";

export const getArticlesFileName = "/get-articles";

export default async function GetArticlesGridData() {
  const fullEndpointUrl = getEndpoint(getArticlesFileName);
  return await fetcher(fullEndpointUrl);
}
