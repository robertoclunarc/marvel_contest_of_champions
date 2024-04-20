import { GameQuery } from "../App";
import useData from "./useData";
import { ILuchador } from "./useluchadores";

export interface IDamage {
  iddamage: number;
  damage: string;
  descripcion: string;
}

export interface Iinmunes {
  iddamage: number;
  damage: string;
  //background_image?: string;
  descripcion: string;
  luchadoresInmunes: { luchadores: ILuchador }[];
}

const useGames = (gameQuery: GameQuery) =>
  useData<Iinmunes>(
    "",
    {
      params: {
        luchadores: gameQuery.luchador?.idluchador,
        damages: gameQuery.damage?.iddamage,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText
      },
    },
    [gameQuery]
  );

export default useGames;
