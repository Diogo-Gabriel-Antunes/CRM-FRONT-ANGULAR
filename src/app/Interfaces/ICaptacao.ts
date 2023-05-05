import { ICampanha } from './ICampanha';
import { ICliente } from './ICliente';
import { IFunil } from './IFunil';

export interface ICaptacao {
  cliente?: ICliente[];
  funil: IFunil;
  campanha: ICampanha;
}
