import { IEtapaDoFunil } from './IEtapaDoFunil';

export interface IFunil {
  uuid: string;
  dataIntegração?: any;
  dataAtualização?: any;
  nomeFunil?: string;
  integracoes?: any;
  ativo?: boolean;
  etapaDoFunils?: IEtapaDoFunil[];
}
