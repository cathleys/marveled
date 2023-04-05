import axios from "axios";
import md5 from "md5";
import { useQuery } from "react-query";

const ts = Number(Date.now());
const hash = md5(ts + process.env.PRIVATE_KEY + process.env.PUBLIC_KEY);

async function getChar() {
  const { data } = await axios.get(
    `https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${process.env.PUBLIC_KEY}&hash=${hash}`
  );
  console.log("data results", data.data.results);
  return data;
}

export function useChar() {
  return useQuery("characters", getChar);
}
