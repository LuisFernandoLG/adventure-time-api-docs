import { baseEndpoint } from "../../constants/api";
import type { Character } from "../../types/Character";
import type { Kingdom } from "../../types/Kingdom";

const charactersEndpoint = `${baseEndpoint}/characters`

type characterWithKingdom = Character & { kingdom: Kingdom };
type getManyByIdResponse = {
  message: string;
  items: characterWithKingdom[];
};

export const characterService = () => {
  const getManyById = async (
    ids: number[]
  ): Promise<characterWithKingdom[]> => {
    try {
      const idsToString = ids.toString();
      const url = `${charactersEndpoint}/${idsToString}?includeKingdom`;
      const response = await fetch(url);
      const data = (await response.json()) as getManyByIdResponse;
      return data.items;
    } catch (error) {
      console.log({ msg: "Oops, algo salió mal", error });
      return [];
    }
  };

  return {
    getManyById,
  };
};
