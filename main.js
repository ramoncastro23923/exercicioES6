class Aluno {
    constructor(nome, nota) {
      this.nome = nome;
      this.nota = nota;
    }
  }
  
  class Turma {
    constructor() {
      this.alunos = [];
    }
  
    adicionarAluno(aluno) {
      this.alunos.push(aluno);
    }
  
    alunosAprovados() {
      return this.alunos.filter(aluno => aluno.nota >= 6);
    }
  }
  
  const aluno1 = new Aluno('João', 7.5);
  const aluno2 = new Aluno('Maria', 5.8);
  const aluno3 = new Aluno('Ana', 8.2);
  const aluno4 = new Aluno('Carlos', 6.0);
  const aluno5 = new Aluno('Pedro', 4.3);
  
  const turma = new Turma();
  turma.adicionarAluno(aluno1);
  turma.adicionarAluno(aluno2);
  turma.adicionarAluno(aluno3);
  turma.adicionarAluno(aluno4);
  turma.adicionarAluno(aluno5);
  
  const aprovados = turma.alunosAprovados();
  console.log(aprovados);
  