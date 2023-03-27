let inp = document.querySelector('#taskInput')
let add = document.querySelector('#addBtn')
let ul = document.querySelector('#list')

add.addEventListener('click', function () {
    let li = document.createElement('li');
    li.innerHTML = inp.value;
    ul.appendChild(li);
})
