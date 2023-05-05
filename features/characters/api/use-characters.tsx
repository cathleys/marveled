import axios from "axios";
import { useQuery } from "react-query";
import { key, hash } from "@config/keys";

async function getCharacters(name: string) {
  const { data } = await axios.get(
    "https://gateway.marvel.com/v1/public/characters",
    {
      params: {
        nameStartsWith: name,
        ts: "1",
        apikey: key,
        hash: hash,
      },
    }
  );
  return data;
}

export function useCharacters(name: string) {
  return useQuery(["characters", name], () => getCharacters(name));
}
