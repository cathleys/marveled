import axios from "axios";
import { useQuery } from "react-query";

const key = "207b830184c8de5036a41f859fbda02b";
const hashkey = "456c6321c6d5612de2d76c71e0f07015";

async function getComicsList() {
  const { data } = await axios.get(
    "https://gateway.marvel.com/v1/public/comics",
    {
      params: {
        ts: "1",
        apikey: key,
        hash: hashkey,
      },
    }
  );
  return data;
}

export function useComicsList() {
  return useQuery(["comics list"], () => getComicsList());
}
