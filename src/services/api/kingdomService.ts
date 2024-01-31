import { baseEndpoint } from "../../constants/api";
import { type Kingdom } from "../../types/Kingdom";
import { type Character } from "../../types/Character";

type KingdomWithCharacters = Kingdom & { characters: Character[] };
type GetManyByIdResponse = { message: string; items: KingdomWithCharacters[] };

export const kingdomService = () => {
  const getManyById = async (ids: number[]): Promise<KingdomWithCharacters[]> => {
    try {
      const idsString = ids.toString();
      const url = `${baseEndpoint}/kingdoms/${idsString}?includeCharacters`;
      const response = await fetch(url);
      const data = (await response.json()) as GetManyByIdResponse;
      return data.items;
    } catch (error) {
      console.log({ error });
      return [];
    }
  };

  return {
    getManyById,
  };
};
