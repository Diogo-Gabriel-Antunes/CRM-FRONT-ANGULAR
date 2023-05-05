import { ICaptacao } from './ICaptacao';
import { IContato } from './IContate';
import { IEndereco } from './IEndereco';

export interface ICliente {
  uuid?: string;
  nome?: string;
  sobrenome?: string;
  contato?: IContato;
  endereco?: IEndereco;
  cargo?: string;
  setor?: string;
  empresa?: any;
  minFaturamento?: number;
  maxFaturamento?: number;
  captacao?: ICaptacao;
}
