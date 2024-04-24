import axios from "axios";
import { ILuchadorInmuneDamage } from "../models/inmunidades.interface";

export async function getAll(): Promise<ILuchadorInmuneDamage[]> {
    try {
      // Realizar la solicitud GET a la API
      const response = await axios.get('http://localhost:3000/MCOC/luchadores/all/inmnunidades/null/null');
      
      // Devolver los datos de los personajes
      return response.data;
    } catch (error) {
      // Manejar errores
      console.error('Error al obtener los datos de los personajes:', error);
      throw error; // Lanza el error para que sea manejado por el código que llama a esta función
    }
  }