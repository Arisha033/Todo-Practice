// selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');


// event listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click',deleteCheck);
filterOption.addEventListener('click', filterTodo);

// functions
function addTodo(e){
    // prevent form from submitting
    e.preventDefault();
    //console.log('hello');

    // inputField check
    if(todoInput.value === ""){
        alert('Enter a valid todo');
        return;
    }

    // create todo div
     const todoDiv = document.createElement('div');
     todoDiv.classList.add('todo');

    //  create li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    // create check button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

    // create delete button
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add('delete-btn');
    todoDiv.appendChild(deleteButton);

    // append todoDiv into todoList
    todoList.appendChild(todoDiv);

    // clear todoInput
    todoInput.value = "";
}


// delete todo
function deleteCheck(e){
    // console.log(e.target);
    const item = e.target;

    // delete todo
    if(item.classList[0] === 'delete-btn'){
        const todo = item.parentElement;
        // animation
        todo.classList.add('fall');
        todo.addEventListener('transitionend', ()=>{
            todo.remove();
        })
    }

    // check todo
    if(item.classList[0] === 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}

// filter todo
function filterTodo(){
    const todos = document.querySelectorAll('.todo');
    // console.log(todos);
    const filter = document.querySelector('.filter-todo');

    todos.forEach(function (todo){
        // console.log(filter.value);
        switch (filter.value) {
            case 'all':
                todo.style.display = 'flex'
                break;
            case 'completed':
                if(todo.classList.contains('completed')){
                    todo.style.display = 'flex'
                }
                else{
                    todo.style.display = 'none'
                }
                break;
                case 'uncompleted':
                    if(!todo.classList.contains('completed')){
                        todo.style.display = 'flex'
                    }
                    else{
                        todo.style.display = 'none';
                    }
                break;
        }
    })
}
