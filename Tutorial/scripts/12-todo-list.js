/*
Main Idea of JavaScript
1. Save the data
2. Generate the HTML
3. Make it interactive

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

// // Todo list v2;, displays the list of element on the display
// const todoList1 = ['make dinner', 'wash dishes'];

// // Generating HTML
// function renderTodoList(){

//     let todoListHTML = '';

//     for (let i = 0; i < todoList1.length; i++) {
//         const todo = todoList1[i];
//         const html = `<p> ${todo} </p>`;
//         todoListHTML += html;
//     }
//     console.log(todoListHTML);
//     document.querySelector('.js-todo-list').innerHTML = todoListHTML;
// }

// renderTodoList();

// function addTodo1(){
//     const inputElement = document.querySelector('.js-name-input1');
//     // To get the value out from input,use inbuilt .value property
//     const name = inputElement.value;
//     todoList1.push(name);
//     console.log(todoList1);
//     // Reset placeholder to initial stage
//     inputElement.value = '';
//     //disply todo list
//     renderTodoList();
// }

// Todo list v3;, add/delete and set date
const todoList1 = [{
    name:'make dinner',
    dueDate:'2022-12-22'
},{
    name:'wash dishes',
    dueDate:'2022-12-22'
}];

// Generating HTML
function renderTodoList(){

    let todoListHTML = '';

    todoList1.forEach(function(todoObject, index){

        const { name, dueDate } = todoObject;
        const html = `
        <div>${name}</div>
        <div>${dueDate}</div>     
        <button onclick="
            todoList1.splice(${index},1);
            renderTodoList();
        " class="delete-todo-button">Delete</button>
        `;
        todoListHTML += html;
    });

    // Above code is created using forEach array loop method. Easy to read
    // than below ones.

    /*
    for (let i = 0; i < todoList1.length; i++) {
        const todoObject = todoList1[i];
        // const name = todoObject.name;
        // const dueDate = todoObject.dueDate;
        const { name, dueDate } = todoObject;

        const html = `
        <div>${name}</div>
        <div>${dueDate}</div>     
        <button onclick="
            todoList1.splice(${i},1);
            renderTodoList();
        " class="delete-todo-button">Delete</button>
        `;
        todoListHTML += html;
    }
    */
    console.log(todoListHTML);
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

renderTodoList();

function addTodo1(){
    const inputElement = document.querySelector('.js-name-input1');
    // To get the value out from input,use inbuilt .value property
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-due-date-input');

    const dueDate = dateInputElement.value;

    todoList1.push({
        // name: name, Below is property shorthand
        // dueDate:dueDate, if the variable and property name is same
        name,
        dueDate
    });

    console.log(todoList1);
    // Reset placeholder to initial stage
    inputElement.value = '';
    //disply todo list
    renderTodoList();
}