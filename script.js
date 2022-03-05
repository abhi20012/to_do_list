let list = document.querySelector(".textarea ul");

list.addEventListener('click', e => {

    if (e.target.className == 'delete') {
        let li = e.target.parentElement;
        li.parentNode.removeChild(li);
    }
});

let addTask = document.querySelector('#addTask');
addTask.addEventListener('submit', e => {
    e.preventDefault();
    let value = addTask.querySelector('input[type="text"]').value;
    if (value === "") {
        alert("Please enter a task");

    } else {


        //create element
        let li = document.createElement('li');
        let newTask = document.createElement('span');
        let deleteBtn = document.createElement('span');

        //add content

        deleteBtn.textContent = 'delete';
        newTask.textContent = value;
        addTask.querySelector('input[type="text"]').value = "";

        //add class
        newTask.classList.add('name');
        deleteBtn.classList.add('delete');

        //append them to DOM
        li.appendChild(newTask);
        li.appendChild(deleteBtn);
        list.appendChild(li);


    }
});

function myFilters() {
    let input, filter, ul, li, span, i, textValue;
    input = document.getElementById("myBox");
    filter = input.value.toLowerCase();
    ul = document.getElementById("myUl");
    li = document.getElementsByTagName("li");

    for (i = 0; i <= li.length; i++) {
        span = li[i].getElementsByTagName("span")[0];
        textValue = span.textContent || span.innerText;
        if (textValue.toLowerCase().indexOf(filter) > -1) {
            li[i].style.display = '';
        } else {
            li[i].style.display = 'none';
        }
    }
}