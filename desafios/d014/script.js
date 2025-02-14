function newTask () {
    let taskDescription = window.document.getElementById('itaskHere')
    let description = taskDescription.value.trim()
    let toDoList = window.document.getElementById('toDoList')

    if (description != 0) {
        
        // Remover bloco de inicialização
        if (toDoList.children.length == 0) {
            let noTaskinList = window.document.getElementById('noTaskinList')
            noTaskinList.style.display = 'none'
        }

        // Criação dos elementos
        let li = window.document.createElement('li')
        let input = window.document.createElement('input')
        let label = window.document.createElement('label')
        let delBtn = window.document.createElement('button')

        input.setAttribute('type', 'checkbox')
        input.setAttribute('id', toDoList.children.length)

        label.setAttribute('for', toDoList.children.length)
        label.innerText = `${description}`

        delBtn.innerHTML = `<span class="material-symbols-outlined">delete</span>`
        delBtn.setAttribute('onclick', 'deleteTask(this)')

        li.appendChild(input)
        li.appendChild(label)
        li.appendChild(delBtn)
        toDoList.appendChild(li)

        closeModal()

        li.setAttribute('class', 'toTopMove')
        setTimeout(function() {
            li.removeAttribute('class', 'toTopMove')
        }, 500)
        
    } else {
        alert('Por favor, insira algo no campo de tarefa.')
    }
}

// Função para deletar a tarefa em questão
function deleteTask(botao) {
    botao.parentNode.setAttribute('class', 'deleteAnimation')
    setTimeout(function() {
        let item = botao.parentNode;
        toDoList.removeChild(item)
        if (toDoList.children.length == 0) {
            let noTaskinList = window.document.getElementById('noTaskinList')
            noTaskinList.style.display = 'flex'
        }
    }, 1000)
}

let modalWindow = window.document.querySelector('section#modalArea')
// Função para abrir o modal
function openModal() {
    modalWindow.style.display = 'block'
    let taskDescription = window.document.getElementById('itaskHere')
    taskDescription.value = ''
    taskDescription.focus()
}

// Função para fechar o modal
function closeModal() {
    modalWindow.style.display = 'none'
}