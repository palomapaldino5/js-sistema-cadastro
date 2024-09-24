let alunos = JSON.parse(localStorage.getItem('alunos')) || [];

const alunosTableBody = document.getElementById('alunosTable').getElementsByTagName('tbody') [0];
alunosTableBody.innerHTML = '';

alunos.forEach(aluno => {
    const row = alunosTableBody.insertRow();

    row.insertCell(0).textContent = aluno.nome;
    row.insertCell(1).textContent = aluno.idade;
    row.insertCell(2).textContent = aluno.curso;
    row.insertCell(3).textContent = aluno.emails;
    
});