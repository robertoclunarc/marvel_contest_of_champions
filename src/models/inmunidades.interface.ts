import { IClase } from "./clases.interface";
import { IDamage } from "./damages.interface";
import { ILuchador } from "./luchadores.interface";

export interface ILuchadorInmuneDamage {
    luchador?: ILuchador,
    clase?: IClase,
    inmunidades?: IDamage[]
  }