import { GameQuery } from "../App";
import useData from "./useData";
import { ILuchador } from "./useluchadores";

export interface IDamage {
  iddamage: number;
  damage: string;
  descripcion: string;
}

export interface ILuchadoresConInmunidades {
  luchador: ILuchador;
  parentInmunidades: {inmune: IDamage}[];
}

export interface Iinmunes {
  iddamage: number;
  damage: string;
  descripcion: string;
  luchadoresInmunes: { luchadores: ILuchador }[];
}

const useGames = (gameQuery: GameQuery) =>
  useData<ILuchadoresConInmunidades>(
    `/results/${gameQuery.damage?.iddamage}`,
    {
      params: {
        idLuchador: gameQuery.luchador?.idluchador,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText
      },
    },
    [gameQuery]
  );

export default useGames;
