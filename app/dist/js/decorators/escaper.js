export function escape(target, propertyKey, descriptior) {
    const metodoOriginal = descriptior.value;
    descriptior.value = function (...args) {
        let retorno = metodoOriginal.apply(this, args);
        if (typeof retorno === 'string') {
            console.log('@escape em ação na classe ' + this.constructor.name) + ' para o método ' + propertyKey;
            retorno = retorno.replace(/<script>.*?<\/script>/g, '');
        }
        return retorno;
    };
    return descriptior;
}
