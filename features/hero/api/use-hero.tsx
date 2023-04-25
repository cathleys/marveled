import axios from "axios";
import { useQuery } from "react-query";

const ts = Date.now().toString();
const key1 = "207b830184c8de5036a41f859fbda02b";
const hash = "456c6321c6d5612de2d76c71e0f07015";

async function getHero(id: number) {
  const { data } = await axios.get(
    `https://gateway.marvel.com/v1/public/characters/${id}?
    ts=${ts}
    &apikey=${key1}
    &hash=${hash}`
  );
  console.log("getHero data", data);
  return data;
}

export function useHero(id: number) {
  return useQuery("characters", () => getHero(id));
}
