const add = document.querySelector('.add');
const todos = document.querySelector('.todos');
const search = document.querySelector('.search input');

const addListElement = function (todo) {

    const li =
        `
     <li class="list-group-item d-flex justify-content-between align-items-center">
      <span>${todo}</span>
      <i class="far fa-trash-alt delete"></i>
     </li>
    `;
    todos.innerHTML += li;
};

add.addEventListener('submit', (e) => {
    e.preventDefault();
    const todo = add.add.value.trim();
    if (todo.length) {
        addListElement(todo);
        add.add.value = "";
    }
});

todos.addEventListener('click', (e) => {
    let x = e.target;
    // if the target class list contains ... class
    if (e.target.classList.contains('delete')) {
        x.parentNode.remove();
        // x.parentElement.remove();
    }
});

const filterInput = function (input) {
    Array.from(todos.children)
        // _todo here is the one of the child of todos which means ul tag
        // textContent returns the text where ever the tag is
        // filter and return all _todo that doesn't have a text match
        .filter((_todo) => !_todo.textContent.includes(input))
        // then apply to those terms a class which later hide inside css
        .forEach((_todo) => {
            _todo.style = 'display: none !important;';
        });

    // if there is no match I want to remove the filtered class
    Array.from(todos.children)
        .filter((_todo) => _todo.textContent.includes(input))
        .forEach((_todo) => {
            _todo.style = 'display: inherit;';
        });
};

search.addEventListener('keyup', (e) => {
    const _in = search.value.trim();
    filterInput(_in);
});



