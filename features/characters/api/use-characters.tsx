import axios from "axios";
import { useQuery } from "react-query";
import { key, hash, base_url } from "@config/keys";

async function getCharacters(name: string) {
  const { data } = await axios.get(`${base_url}/characters`, {
    params: {
      nameStartsWith: name,
      ts: "1",
      apikey: key,
      hash: hash,
    },
  });
  return data;
}

export function useCharacters(name: string) {
  return useQuery(["characters", name], () => getCharacters(name));
}
