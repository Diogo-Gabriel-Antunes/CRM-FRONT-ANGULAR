import { IOportunidade } from './IOportunidade';

export interface ICalendario {
  compromissos: Compromissos;
}
export interface Compromissos {
  SEGUNDA: Segunda;
  TERCA: Terca;
  QUARTA: Quarta;
  QUINTA: Quinta;
  SEXTA: Sexta;
  SABADO: Sabado;
  DOMINGO: Domingo;
}
export interface Segunda {
  H08: H08;
  H12: H12;
  H15: H15;
  H17: H17;
  H14: H14;
  H16: H16;
  H13: H13;
  H09: H09;
  H11: H11;
  H18: H18;
  H10: H10;
}
export interface Terca {
  H08: H08;
  H12: H12;
  H15: H15;
  H17: H17;
  H14: H14;
  H16: H16;
  H13: H13;
  H09: H09;
  H11: H11;
  H18: H18;
  H10: H10;
}
export interface Quarta {
  H08: H08;
  H12: H12;
  H15: H15;
  H17: H17;
  H14: H14;
  H16: H16;
  H13: H13;
  H09: H09;
  H11: H11;
  H18: H18;
  H10: H10;
}
export interface Quinta {
  H08: H08;
  H12: H12;
  H15: H15;
  H17: H17;
  H14: H14;
  H16: H16;
  H13: H13;
  H09: H09;
  H11: H11;
  H18: H18;
  H10: H10;
}
export interface Sexta {
  H08: H08;
  H12: H12;
  H15: H15;
  H17: H17;
  H14: H14;
  H16: H16;
  H13: H13;
  H09: H09;
  H11: H11;
  H18: H18;
  H10: H10;
}
export interface Sabado {
  H08: H08;
  H12: H12;
  H15: H15;
  H17: H17;
  H14: H14;
  H16: H16;
  H13: H13;
  H09: H09;
  H11: H11;
  H18: H18;
  H10: H10;
}
export interface Domingo {
  H08: H08;
  H12: H12;
  H15: H15;
  H17: H17;
  H14: H14;
  H16: H16;
  H13: H13;
  H09: H09;
  H11: H11;
  H18: H18;
  H10: H10;
}

export interface CompromissoOportunidade {
  momento: string;
  oportunidade: IOportunidade;
}
export interface H08 {
  compromissoOportunidade: CompromissoOportunidade;
}
export interface H09 {
  compromissoOportunidade: CompromissoOportunidade;
}
export interface H10 {
  compromissoOportunidade: CompromissoOportunidade;
}
export interface H11 {
  compromissoOportunidade: CompromissoOportunidade;
}
export interface H12 {
  compromissoOportunidade: CompromissoOportunidade;
}
export interface H13 {
  compromissoOportunidade: CompromissoOportunidade;
}

export interface H14 {
  compromissoOportunidade: CompromissoOportunidade;
}
export interface H15 {
  compromissoOportunidade: CompromissoOportunidade;
}

export interface H16 {
  compromissoOportunidade: CompromissoOportunidade;
}
export interface H17 {
  compromissoOportunidade: CompromissoOportunidade;
}

export interface H18 {
  compromissoOportunidade: CompromissoOportunidade;
}
