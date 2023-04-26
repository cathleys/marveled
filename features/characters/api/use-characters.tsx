import axios from "axios";
import { useQuery } from "react-query";

const key1 = "207b830184c8de5036a41f859fbda02b";
const hash = "456c6321c6d5612de2d76c71e0f07015";

async function getCharacters(name: string) {
  const { data } = await axios.get(
    `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${name}&ts=1&apikey=${key1}&hash=${hash}`
  );
  return data;
}

export function useCharacters(name: string) {
  return useQuery("characters", () => getCharacters(name));
}
