import { ICliente } from './ICliente';
import { IEtapaDoFunil } from './IEtapaDoFunil';
import { IFunil } from './IFunil';

export interface ILead {
  uuid: string;
  dataAtualizacao: string;
  dataIntegracao: string;
  descricao: string;
  data: string;
  funil: IFunil;
  etapaDoFunil: IEtapaDoFunil;
  campanha: any;
  valor: number;
  cliente: ICliente;
}
