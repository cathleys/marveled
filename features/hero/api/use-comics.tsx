import axios from "axios";
import { useQuery } from "react-query";
import { key, hash } from "@config/keys";

async function getComics(id: number) {
  const { data } = await axios.get(
    `https://gateway.marvel.com/v1/public/characters/${id}/comics`,
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

export function useComics(id: number) {
  return useQuery(["comics of a hero", id], () => getComics(id));
}
