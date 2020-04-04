import { getEndpoint } from "./easybank-api-utils";
import { fetcher } from "../utils";

export const getWhyChooseFileName = "/get-whyChoose";

export default async function GetWhyChooseData() {
  const fullEndpointUrl = getEndpoint(getWhyChooseFileName);
  return await fetcher(fullEndpointUrl);
}
