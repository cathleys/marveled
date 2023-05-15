import axios from "axios";
import { useQuery } from "react-query";
import { hash, key, base_url } from "@config/keys";

async function getCharacterByEvents(characterId: number) {
  const { data } = await axios.get(
    `${base_url}/characters/${characterId}/events`,
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

export function useCharacterByEvents(characterId: number) {
  return useQuery(["characterId by events", characterId], () =>
    getCharacterByEvents(characterId)
  );
}
