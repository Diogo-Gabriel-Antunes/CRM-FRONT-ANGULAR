import { ICliente } from './ICliente';
import { IEtapaDoFunil } from './IEtapaDoFunil';
import { IFunil } from './IFunil';

export interface ILead {
  uuid?: string;
  descricao?: string;
  data?: string;
  funil?: IFunil;
  etapaDoFunil?: IEtapaDoFunil;
  campanha?: any;
  valor?: number | string;
  cliente?: ICliente;
  anotacoes: Anotacoes[];
}

interface Anotacoes {
  anotacao: string;
  checkbox: boolean;
  topico: string;
}
