import axios from "axios";
import { useQuery } from "react-query";
import { key, hash, base_url } from "@config/keys";

async function getHero(id: number) {
  const { data } = await axios.get(`${base_url}/characters/${id}`, {
    params: {
      ts: "1",
      apikey: key,
      hash: hash,
    },
  });

  return data;
}

export function useHero(id: number) {
  return useQuery(["hero details", id], () => getHero(id));
}
