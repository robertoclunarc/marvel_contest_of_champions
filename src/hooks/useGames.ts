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

/*const useGames = (gameQuery: GameQuery) =>
  useData<ILuchadoresConInmunidades>(
    `/results/${gameQuery.damage?.iddamage}/${gameQuery.sortOrder}/${gameQuery.luchador?.idluchador}/${gameQuery.searchText}`,
    {
      params: { searchText = gameQuery.searchText },
    },
    [gameQuery]
  );*/

  const useGames = (gameQuery: GameQuery) => {
    let idDamage = "null";
    let sortOrder = "null";
    let idLuchador = "null";
    let searchText = gameQuery.searchText || "";
  
    if (gameQuery.luchador?.idluchador) {
      idLuchador = gameQuery.luchador?.idluchador.toString();
    } else if (searchText.trim() !== "") {
      idLuchador = "null";
    } else {
      idDamage = gameQuery.damage?.iddamage || "null";
      sortOrder = gameQuery.sortOrder || "null";
    }
  
    return useData<ILuchadoresConInmunidades>(
      `/results/${idDamage}/${sortOrder}/${idLuchador}/${searchText}`,
      {
        params: {},
      },
      [gameQuery]
    );
  };

export default useGames;
