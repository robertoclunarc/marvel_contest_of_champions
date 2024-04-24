import axios from "axios";
import { IDamageXluchadores } from "../models/luchadores.interface";

export async function getDamageXLuchadores(): Promise<IDamageXluchadores[]> {
    try {
      // Realizar la solicitud GET a la API
      const response = await axios.get('http://localhost:3000/MCOC/inmunidades/luchadores');
      
      // Devolver los datos de los personajes
      return response.data.results;
    } catch (error) {
      // Manejar errores
      console.error('Error al obtener los datos de los personajes:', error);
      throw error; // Lanza el error para que sea manejado por el código que llama a esta función
    }
}