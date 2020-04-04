import { BASE_URL, fetcher } from "../utils/api-fetcher";
import { GetArticlesEndpoint } from "../../pages/api/easybank/easybank-utils";

export default async function GetArticlesGridData(url = GetArticlesEndpoint) {
  return await fetcher(`${BASE_URL}${url}`);
}
