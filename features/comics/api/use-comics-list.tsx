import axios from "axios";
import { useQuery } from "react-query";
import { key, hash } from "@config/keys";

async function getComicsList() {
  const { data } = await axios.get(
    "https://gateway.marvel.com/v1/public/comics",
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

export function useComicsList() {
  return useQuery(["comics list"], getComicsList);
}
