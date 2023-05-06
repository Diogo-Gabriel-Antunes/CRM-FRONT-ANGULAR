import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataUtilService {
  constructor() {}

  FormataData(data: string) {
    let dataInDate = new Date(data);
    let ano = dataInDate.getFullYear();
    let mes = ('0' + (dataInDate.getMonth() + 1)).slice(-2);
    let dia = ('0' + dataInDate.getDate()).slice(-2);
    let hora = ('0' + dataInDate.getHours()).slice(-2);
    let minuto = ('0' + dataInDate.getMinutes()).slice(-2);
    let segundo = ('0' + dataInDate.getSeconds()).slice(-2);
    return (
      ano + '-' + mes + '-' + dia + 'T' + hora + ':' + minuto + ':' + segundo
    );
  }
  dataAtualFormatada(dataNoFormat: string) {
    var data = new Date(dataNoFormat),
      dia = data.getDate().toString(),
      diaF = dia.length == 1 ? '0' + dia : dia,
      mes = (data.getMonth() + 1).toString(), //+1 pois no getMonth Janeiro começa com zero.
      mesF = mes.length == 1 ? '0' + mes : mes,
      anoF = data.getFullYear();
    let hora = ('0' + data.getHours()).slice(-2);
    let minuto = ('0' + data.getMinutes()).slice(-2);
    return diaF + '/' + mesF + '/' + anoF + ' ' + hora + ':' + minuto;
  }
}
