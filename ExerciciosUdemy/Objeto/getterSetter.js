const sequencia = {
  _valor: 1, //underline é usado por convencao para indicar que esta variavel é pra ser usada dentro do obj
  get valor() {
    return this._valor++;
  },
  set valor(valor) {
    if (valor > this._valor) {
      this._valor = valor;
    }
  },
};
console.log(sequencia.valor, sequencia.valor);
sequencia.valor = 1000;
console.log(sequencia.valor, sequencia.valor);
sequencia.valor = 900;
console.log(sequencia.valor, sequencia.valor);
