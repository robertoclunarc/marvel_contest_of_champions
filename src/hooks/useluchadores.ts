import luchadores from "../data/luchadores";

export interface ILuchador {
    idluchador: number;
    nombre: string;
    fkclase: number;
    date_release: string;
    idclase: number;
    clase: string;
    image_background: string;
  }

const useLuchadores = () => ({ data: luchadores, isLoading: false, error: null })

export default useLuchadores;