import { getEndpoint } from "../../pages/api/easybank/easybank-api-utils";
import { fetcher } from "../../pages/api/utils";

export const getArticlesFileName = "/get-articles";

export default async function GetArticlesGridData() {
  const fullEndpointUrl = getEndpoint(getArticlesFileName);
  return await fetcher(fullEndpointUrl);
}
