import axios from "axios";
import { ILuchador } from "../models/luchadores.interface";

export async function getAll(): Promise<ILuchador[]> {
    try {
      // Realizar la solicitud GET a la API
      const response = await axios.get('https://api-marvel-constest-champion-production.up.railway.app/MCOC/luchadores/all');
      
      // Devolver los datos de los personajes
      return response.data;
    } catch (error) {
      // Manejar errores
      console.error('Error al obtener los datos de los personajes:', error);
      throw error; // Lanza el error para que sea manejado por el código que llama a esta función
    }
  }