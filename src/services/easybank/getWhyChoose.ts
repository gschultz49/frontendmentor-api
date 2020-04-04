import { getEndpoint } from "../../pages/api/easybank/easybank-api-utils";
import { fetcher } from "../../pages/api/utils";

export const getWhyChooseFileName = "/get-whyChoose";

export default async function GetWhyChooseData() {
  const fullEndpointUrl = getEndpoint(getWhyChooseFileName);
  return await fetcher(fullEndpointUrl);
}
