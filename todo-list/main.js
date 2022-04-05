const inputTarefa = document.querySelector('#class-nova-tarefa');
const btnTarefa = document.querySelector('#btn-add-tarefa');
const tarefas = document.querySelector('#tarefas');

function criarTarefas(textInput) {
  console.log(textInput);
}

btnTarefa.addEventListener('click', function () {
  if (!inputTarefa.value) return;
})