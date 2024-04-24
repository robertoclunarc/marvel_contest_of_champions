import { IDamageXluchadores } from "../models/luchadores.interface";
import { getDamageXLuchadores } from "../services/inmunidades.service";

async function fetchData() {
  try {    
    const characters = await getDamageXLuchadores()
    return characters;    
  } catch (error) {
    console.error('Error al obtener los datos:', error);
    return [];    
  }
}

const damagesConLuchadoresInmunes: IDamageXluchadores[] = await fetchData();

export default damagesConLuchadoresInmunes;