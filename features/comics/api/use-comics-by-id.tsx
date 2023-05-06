import axios from "axios";
import { base_url, key, hash } from "@config/keys";
import { useQuery } from "react-query";

async function getComicsById(comicId: number) {
  const { data } = await axios.get(`${base_url}/comics/${comicId}`, {
    params: {
      ts: "1",
      apikey: key,
      hash: hash,
    },
  });
  return data;
}

export function useComicsById(comicId: number) {
  return useQuery(["comic by id", comicId], () => getComicsById(comicId));
}
