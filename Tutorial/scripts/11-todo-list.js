/*
Steps (Algorithm)
1. Create array to store todos
2. When we click "Add"
3. Get text from textbox
4. Add it to array
5. Console.log() the array
*/

const todoList = [];

function addTodo(){
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;
    todoList.push(name);
    console.log(todoList);
    inputElement.value='';
}