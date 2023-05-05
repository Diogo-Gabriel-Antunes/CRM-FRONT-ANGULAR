export const FormataData = (data: string) => {
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
};
