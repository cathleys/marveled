import axios from "axios";
import { useQuery } from "react-query";
import { key, hash } from "@config/keys";

async function getHero(id: number) {
  const { data } = await axios.get(
    `https://gateway.marvel.com/v1/public/characters/${id}`,
    {
      params: {
        ts: "1",
        apikey: key,
        hash: hash,
      },
    }
  );

  return data;
}

export function useHero(id: number) {
  return useQuery(["hero details", id], () => getHero(id));
}
