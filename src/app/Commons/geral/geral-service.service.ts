import { Injectable } from '@angular/core';
import { IOptions } from 'src/app/Interfaces/IOptions';

@Injectable({
  providedIn: 'root',
})
export class GeralServiceService {
  estadoSelect: IOptions[] = [
    {
      label: 'Acre',
      value: 'AC',
    },
    {
      label: 'Alagoas',
      value: 'AL',
    },
    {
      label: 'Amapá',
      value: 'AP',
    },
    {
      label: 'Amazonas',
      value: 'AM',
    },
    {
      label: 'Bahia',
      value: 'BA',
    },
    {
      label: 'Ceará',
      value: 'CE',
    },
    {
      label: 'Distrito Federal',
      value: 'DF',
    },
    {
      label: 'Espirito Santo',
      value: 'ES',
    },
    {
      label: 'Goiás',
      value: 'GO',
    },
    {
      label: 'Maranhão',
      value: 'MA',
    },
    {
      label: 'Mata Grosso',
      value: 'MT',
    },
    {
      label: 'Mato Grosso do Sul',
      value: 'MS',
    },
    {
      label: 'Minas Gerais',
      value: 'MG',
    },
    {
      label: 'Pará',
      value: 'PA',
    },
    {
      label: 'Paraiba',
      value: 'PB',
    },
    {
      label: 'Pernambuco',
      value: 'PE',
    },
    {
      label: 'Piaui',
      value: 'PI',
    },
    {
      label: 'Rio de Janeiro',
      value: 'RJ',
    },
    {
      label: 'Rio Grande do Norte',
      value: 'RN',
    },
    {
      label: 'Rio Grande do SUl',
      value: 'RS',
    },
    {
      label: 'Rondônia',
      value: 'RO',
    },
    {
      label: 'Roraima',
      value: 'RR',
    },
    {
      label: 'Santa Catarina',
      value: 'SC',
    },
    {
      label: 'São Paulo',
      value: 'SP',
    },
    {
      label: 'Sergipe',
      value: 'SE',
    },
    {
      label: 'Tocantins',
      value: 'TO',
    },
    {
      label: 'Acre',
      value: 'AC',
    },
  ];
  constructor() {}
}
