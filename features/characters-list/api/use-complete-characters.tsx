import axios from "axios";
import { useQuery } from "react-query";
import { key, hash, base_url } from "@config/keys";

async function getCompleteCharacters() {
  const { data } = await axios.get(`${base_url}/characters`, {
    params: {
      ts: "1",
      apikey: key,
      hash: hash,
    },
  });
  return data;
}
export function useCompleteCharacters() {
  return useQuery(["List of heroes"], getCompleteCharacters);
}
