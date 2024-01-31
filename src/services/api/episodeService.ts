import { baseEndpoint } from "../../constants/api";
import { type Episode } from "../../types/Episode";
import { type Character } from "../../types/Character";

type EpisodeWithCharacters = Episode & { characters: Character[] };
type GetManyByIdResponse = { message: string; items: EpisodeWithCharacters[] };

export const episodeService = () => {
  const getManyById = async (ids: number[]): Promise<EpisodeWithCharacters[]> => {
    try {
      const idsString = ids.toString();
      const url = `${baseEndpoint}/episodes/${idsString}?includeCharacters`;
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
