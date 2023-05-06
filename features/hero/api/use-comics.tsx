import axios from "axios";
import { useQuery } from "react-query";
import { key, hash, base_url } from "@config/keys";

async function getComics(id: number) {
  const { data } = await axios.get(`${base_url}/characters/${id}/comics`, {
    params: {
      ts: "1",
      apikey: key,
      hash: hash,
    },
  });

  return data;
}

export function useComics(id: number) {
  return useQuery(["comics of a hero", id], () => getComics(id));
}
