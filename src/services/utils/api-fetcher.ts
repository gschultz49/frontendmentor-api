import fetch from "isomorphic-fetch";

export const fetcher = (url) =>
  fetch(url)
    .then((r) => r.json())
    .catch((err) => console.warn(err));

export const BASE_URL = process.env.BASE_URL;
