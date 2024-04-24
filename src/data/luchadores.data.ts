import { ILuchador } from "../models/luchadores.interface";
import { getAll } from "../services/luchadores.sevice";

async function fetchData() {
  try {    
    const characters = await getAll()
    return characters;    
  } catch (error) {
    console.error('Error al obtener los datos:', error);
    return [];    
  }
}

const luchadores: ILuchador[] = await fetchData();

export default luchadores;