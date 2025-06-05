class Alunos {
    constructor(nomeDoAluno, notaDoAluno) {
        this.nome = nomeDoAluno
        this.nota = notaDoAluno
    }
}

const listaDeAlunos = [
    new Alunos('João', 8),
    new Alunos('Maria', 5),
    new Alunos('Pedro', 5),
    new Alunos('Dnaiel', 9),
    new Alunos('Roberta', 5),
    new Alunos('Clara', 6)
]

function alunosAprovados() {
    return listaDeAlunos
    .filter(aluno => aluno.nota >=6)
    
}

const aprovados = alunosAprovados()

console.log('Nota mínima para aprovação: 6')

console.log('Os alunos aprovados são: ')

aprovados.forEach(aluno => {
    console.log(`- ${aluno.nome} (Nota: ${aluno.nota})`)
})