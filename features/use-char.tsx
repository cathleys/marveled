import axios from "axios";
import md5 from "md5";
import { useQuery } from "react-query";

const PRIVATE_KEY = "8060fc014ea4e1e0b7aba3333b027a9e77a3aa05";
const PUBLIC_KEY = "207b830184c8de5036a41f859fbda02b";

const ts = Number(Date.now());
const hash = md5(ts + PRIVATE_KEY + PUBLIC_KEY);

async function getChar() {
  const { data } = await axios.get(
    `https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`
  );
  return data;
}

export function useChar() {
  return useQuery("characters", getChar);
}
