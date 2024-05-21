export function escapar(
  target: any,
  propertyKey: string,
  descriptior: PropertyDescriptor
) {
  const metodoOriginal = descriptior.value;
  descriptior.value = function (...args: any[]) {
    let retorno = metodoOriginal.apply(this, args);
    if (typeof retorno === 'string') {
      console.log('@escape em ação na classe ' + this.constructor.name) + ' para o método ' + propertyKey;
      retorno = retorno.replace(/<script>.*?<\/script>/g, '');
    }
    return retorno;
  }
  return descriptior;
}