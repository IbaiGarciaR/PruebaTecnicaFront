export interface Estudios {
  instituto: string;
  titulacion: string;
  fecha: string;
}

export interface Experiencia {
  empresa: string;
  puesto: string;
  fecha: string;
}

export interface Direccion {
  calle: string;
  numero: string;
  puerta: string;
  codigopostal: string;
  ciudad: string;
}

export interface Usuario {
  id: number;
  tipo: 'Demandante' | 'Empleado';
  nif: string;
  nombre: string;
  primerApellido: string;
  segundoApellido?: string;
  genero?: string;
  fechaNac?: string;
  direccion?: Direccion;
  estudios?: Estudios[];
  experiencia?: Experiencia[];
}