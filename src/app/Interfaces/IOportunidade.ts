import { ICampanha } from './ICampanha';
import { ICliente } from './ICliente';
import { IEtapaDoFunil } from './IEtapaDoFunil';
import { IFonte } from './IFonte';
import { IFunil } from './IFunil';

export interface IOportunidade {
  uuid: string;
  nomeOportunidade?: string;
  funil?: IFunil;
  etapaDoFunil?: IEtapaDoFunil;
  fonte?: IFonte;
  campanha?: ICampanha;
  empresa?: any;
  cliente?: ICliente;
  dataMarcada?: string;
}
