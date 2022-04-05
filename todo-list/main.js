const inputTarefa = document.querySelector('#class-nova-tarefa');
const btnTarefa = document.querySelector('#btn-add-tarefa');
const tarefas = document.querySelector('#tarefas');

function criaLi() {
  const li = document.createElement('li');
  return li;
}

inputTarefa.addEventListener('keypress', function (e) {
  if (e.keyCode === 13) {
    if (!inputTarefa.value) return;
    criarTarefas(inputTarefa.value);
  }
});

function limpaInput() {
  inputTarefa.value = '';
  inputTarefa.focus();
}

function criarTarefas(textInput) {
  const li = criaLi()
  li.innerText = textInput;
  tarefas.appendChild(li);
  limpaInput()
  criaBtnDelete(li);
}

btnTarefa.addEventListener('click', function () {
  if (!inputTarefa.value) return;
  criarTarefas(inputTarefa.value);
})

function criaBtnDelete(li) {
  li.innerText += ' ';
  const apagar = document.createElement('button');
  apagar.innerText = 'Apagar';
  apagar.setAttribute('class', 'apagar');
  li.appendChild(apagar);
}

document.addEventListener('click', function (e) {
  const el = e.target;
  if (el.classList.contains('apagar')) {
    el.parentElement.remove();
  }
});