import inmunizados from "../data/damages.data";

interface Damager {
  iddamage: number;
  damage: string;
  descricion: string;
}

const useInmunizados = () => ({ data: inmunizados, isLoading: false, error: null });

export default useInmunizados;
