import axios from "axios";
import { useQuery } from "react-query";

const key = "207b830184c8de5036a41f859fbda02b";
const hash = "456c6321c6d5612de2d76c71e0f07015";

async function getCompleteCharacters() {
  const { data } = await axios.get(
    `https://gateway.marvel.com/v1/public/characters?&ts=1&apikey=${key}&hash=${hash}`
  );
  return data;
}
export function useCompleteCharacters() {
  return useQuery("List of heroes", () => getCompleteCharacters());
}
