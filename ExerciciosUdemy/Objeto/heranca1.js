const ferrari = {
  modelo: "f40",
  velocidadeMaxima: 342,
};

const volvo = {
  modelo: "v40",
  velocidadeMaxima: 210,
};

console.log(ferrari.__proto__);
console.log(ferrari.__proto__ === Object.prototype);

const avo = { atributo1: "a" };
const pai = { __proto__: avo, atributo2: "b" };
const filho = { __proto__: pai, atributo3: "c" };

console.log(filho.atributo1); //filho herda de pai, que herda de avo, que possui o atributo 1

const carro = {
  velocidadeAtual: 0,
  velocidadeMaxima: 200,
  aceleraMais(delta) {
    if (this.velocidadeAtual + delta <= this.velocidadeMaxima) {
      this.velocidadeAtual += delta;
    } else {
      this.velocidadeAtual = this.velocidadeMaxima;
    }
  },
  status() {
    return `${this.velocidadeAtual}Km/h de ${this.velocidadeMaxima}Km/h`;
  },
};

const ferrari2 = {
  modelo: "f40",
  velocidadeMaxima: 324, // shadow acontece quando uma variavel local mais proxima a função sobrescreve uma mais global
};

const volvo2 = {
  modelo: "v40",
  status() {
    return `${this.modelo}: ${super.status()}`; // super : é para referenciar o prototipo
  },
};

Object.setPrototypeOf(ferrari2, carro); // estabelece a relação de objeto e prototipo sem utilizar __proto__
Object.setPrototypeOf(volvo2, carro);
console.log(ferrari2); //imprime { modelo: 'f40', velocidadeMaxima: 324 }
console.log(volvo2); // imprime { modelo: 'v40', status: [Function: status] }

volvo2.aceleraMais(100);
console.log(volvo2.status()); // imprime v40: 100Km/h de 200Km/h
