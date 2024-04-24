export interface ILuchador {
    idluchador: number;
    nombre: string;
    fkclase: number;
    date_release: string;
    idclase: number;
    clase: string;
    image_background: string;
  }

  export interface IDamageXluchadores{
    iddamage?: number;
    damage?: string;  
    descripcion?: string;
    luchadoresInmunes?: ILuchador[];
  }