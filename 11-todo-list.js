const todoList=[ {
    name:'make dinner',
    dueDate: '2024-12-22'},
     {
      name:'wash dishes',
    dueDate:'2024-12-22'
  }];
renderTodoList();
function renderTodoList() {


let todoListHTMl = '';

for (let i = 0 ; i<todoList.length ; i++ )
{
  const todoOject=todoList[i];
  //const name = todoOject.name;
  //const dueDate = todoOject.dueDate;
  const {name,dueDate} = todoOject;
  const html =`
 <div>${name}</div>
 <div>${dueDate}</div>
     
    <button onclick="
    todoList.splice(${i},1);
    renderTodoList();
    " class="delete-todo-button">Delete</button>
  
  `;

  todoListHTMl += html;

}
console.log(todoListHTMl);

document.querySelector('.js-todo-list')
  .innerHTML = todoListHTMl;
}
function addTodo() {
  const inputElement= document.querySelector('.js-name-input');
  const name= inputElement.value;//value rept text in text box

  const dateInputElement = document.querySelector('.js-todo-date-input')//get the date selector element and put it this variable
  const dueDate = dateInputElement.value;//this will get the date that we selected and save to this variable
  
  todoList.push({
    name,
    dueDate
  });
  

  inputElement.value='';//reset text in tstbox

  renderTodoList();

}