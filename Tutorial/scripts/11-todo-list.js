/*

# Algorithm:
1. Create array to store todos
2. When we click "Add"
3. Get text from textbox
4. Add it to array
5. Console.log() the array
*/

// Todo list V1
const todoList = [];

function addTodo(){
    const inputElement = document.querySelector('.js-name-input');
    const name =  inputElement.value;
    todoList.push(name);
    console.log(todoList);

    // After each iteration, placeholder text should be reseted.
    inputElement.value = '';
}

// Todo list v2;, displays the list of element on the display
const todoList1 = [];

function addTodo1(){
    const inputElement = document.querySelector('.js-name-input1');
    // To get the value out from input,use inbuilt .value property
    const name = inputElement.value;
    todoList1.push(name);
    console.log(todoList1);
    // Reset placeholder to initial stage
    inputElement.value = '';
}