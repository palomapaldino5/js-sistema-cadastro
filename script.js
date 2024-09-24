let alunos = JSON.parse(localStorage.getItem('alunos')) || [];

document.getElementById('alunoForm').addEventListener('submit', function (event) {
    event.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const curso = document.getElementById('curso').value;
    const emails = document.getElementById('emails').value;
        
        const novoAluno = {nome, idade, curso, emails};
    alunos.push (novoAluno);
localStorage.setItem ('alunos', JSON.stringify(alunos));

window.location.href = 'lista_alunos.html';
});