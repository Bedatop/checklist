let inp = document.querySelector('#taskInput')
let add = document.querySelector('#addBtn')
let ul = document.querySelector('#list')

add.addEventListener('click', function () {
    let li = document.createElement('li');
    li.innerHTML = inp.value;
    ul.appendChild(li);
    inp.value = '';
    let check = document.createElement('input');
    check.type = 'checkbox'
    li.appendChild(check);
    check.addEventListener('click', function () {
        li.classList.toggle('add');
    })
    let del = document.createElement('a');
    del.href = ''
    del.innerHTML ='X';
    li.appendChild(del);
    del.addEventListener('click', function (ev) {
        ev.preventDefault();
        li.parentElement.removeChild(li)
    })
})
