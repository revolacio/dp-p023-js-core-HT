const todos = [
    {
        text : 'Read new book',
        isDone : false
    },
    {
        text : 'Add new bookmark to bookmark list',
        isDone : false
    },
    {
        text : 'Buy a pet',
        isDone : false
    },
    {
        text : 'Wash my hands',
        isDone : false
    }
];

function render(data) {
   const list = document.querySelector('.todos-list');
   
   list.innerHTML = data.map(todo => {
            const className = todo.isDone ? 'class="done"' : '';
            return `<li ${className}>${todo.text}</li>`;

   } ).join('');
}

function onTodoClick(ev) {
    console.log('click to todo', ev.target);
    console.dir(ev.target);
}

document.querySelector('.todos-list').addEventListener('click', onTodoClick);

render(todos);