import inmunizados from "../data/platforms";

interface Damager {
  iddamage: number;
  damage: string;
  descricion: string;
}

const useInmunizados = () => ({ data: inmunizados, isLoading: false, error: null });

export default useInmunizados;
