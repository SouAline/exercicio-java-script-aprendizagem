class Avo {
  constructor(sobrenome) {
    this.sobrenome = sobrenome;
  }
}

class Pai extends Avo {
  constructor(sobrenome, profissao = "Professor") {
    super(sobrenome); //vai pegar o sobrenome recebido pelo avó
    this.profissao = profissao;
  }
}

class Filho extends Pai {
  constructor() {
    super("Silva"); //esse sobrenome foi setado para o constructor super, que passou pelo pai e depois chegou ate o avó
  }
}
const filho = new Filho();
console.log(filho);
