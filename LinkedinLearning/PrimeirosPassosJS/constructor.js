function Curso(
  titulo,
  instrutora,
  nivel,
  dataPublicacao,
  numeroVisualizacao,
  atualizaVisualizacao
) {
  (this.titulo = titulo),
    (this.instrutora = instrutora),
    (this.nivel = nivel),
    (this.dataPublicacao = dataPublicacao),
    (this.numeroVisualizacao = numeroVisualizacao),
    (this.atualizaVisualizacao = function () {
      return ++curso.numeroVisualizacao;
    });
}

var curso = [
  //transformando em array de curso
  new Curso("JavaScript: Formação Básica", "Amanda", 1, false, 0),
  new Curso("Java", "Nelio Alves", 1, true, 423),
];

console.log(curso);
