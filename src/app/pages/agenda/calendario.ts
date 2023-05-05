import { IOportunidade } from 'src/app/Interfaces/IOportunidade';

export interface Calendario {
  dias: Dias[];
  mes: Mes;
}

export interface Dias {
  calendarioHorarios: CalendarioHorario[];
  diaDoMes: string;
}

export interface CalendarioHorario {
  horario: string;
  compromisso: Compromisso;
}

export interface Compromisso {
  mes: Mes;
  diaDoMes: DiaDoMes;
  tipoCompromisso: string;
  inicioCompromisso: string;
  fimCompromisso: string;
  oportunidades: IOportunidade;
  tarefas: any;
  horario: Horario;
}
export enum Mes {
  JANEIRO = 1,
  FEVEREIRO = 2,
  MARCO = 3,
  ABRIL = 4,
  MAIO = 5,
  JUNHO = 6,
  JULHO = 7,
  AGOSTO = 8,
  SETEMBRO = 9,
  OUTUBRO = 10,
  NOVEMBRO = 11,
  DEZEMBRO = 12,
}
export enum DiaDoMes {
  DIA_1 = 1,
  DIA_2 = 2,
  DIA_3 = 3,
  DIA_4 = 4,
  DIA_5 = 5,
  DIA_6 = 6,
  DIA_7 = 7,
  DIA_8 = 8,
  DIA_9 = 9,
  DIA_10 = 10,
  DIA_11 = 11,
  DIA_12 = 12,
  DIA_13 = 13,
  DIA_14 = 14,
  DIA_15 = 15,
  DIA_16 = 16,
  DIA_17 = 17,
  DIA_18 = 18,
  DIA_19 = 19,
  DIA_20 = 20,
  DIA_21 = 21,
  DIA_22 = 22,
  DIA_23 = 23,
  DIA_24 = 24,
  DIA_25 = 25,
  DIA_26 = 26,
  DIA_27 = 27,
  DIA_28 = 28,
  DIA_29 = 29,
  DIA_30 = 30,
  DIA_31 = 31,
}
export enum Horario {
  H01 = '01:00',
  H02 = '02:00',
  H03 = '03:00',
  H04 = '04:00',
  H05 = '05:00',
  H06 = '06:00',
  H07 = '07:00',
  H08 = '08:00',
  H09 = '09:00',
  H10 = '10:00',
  H11 = '11:00',
  H12 = '12:00',
  H13 = '13:00',
  H14 = '14:00',
  H15 = '15:00',
  H16 = '16:00',
  H17 = '17:00',
  H18 = '18:00',
  H19 = '19:00',
  H20 = '20:00',
  H21 = '21:00',
  H22 = '22:00',
  H23 = '23:00',
  H24 = '24:00',
}
