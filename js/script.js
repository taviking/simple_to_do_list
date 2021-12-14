const todoControl = document.querySelector('.todo-control')
let headerInput = document.querySelector('.header-input')
const todoList = document.querySelector('.todo-list')
const todoCompleted = document.querySelector('.todo-completed')

// console.log(todoControl)
// console.log(headerInput.value)
// console.log(todoList)
// console.log(todoCompleted)


let toDoDate = []



const render = function() {
	todoList.innerHTML = "";
	todoCompleted.innerHTML = "";
	localStorage.setItem("toDoList", JSON.stringify(toDoDate));

  toDoDate.forEach(function(item, index){
    const li = document.createElement('li')
    li.classList.add('todo-item')
    li.innerHTML = '<span class="text-todo">' + item.text + '</span>' +
      '<div class="todo-buttons">' +
      '<button class="todo-remove"></button>' +
      '<button class="todo-complete"></button>' +
      '</div>'
    if(item.completed) {
      todoCompleted.append(li)
    } else {
      todoList.append(li)
    }
    li.querySelector('.todo-complete').addEventListener('click', function() {
      item.completed = !item.completed
      render()

    })
    li.querySelector('.todo-remove').addEventListener('click', function() {
      toDoDate.splice(index, 1)
      render()

    })

  })
}

todoControl.addEventListener('submit', function(event) {
  event.preventDefault()
  headerInput = document.querySelector('.header-input')
  if (headerInput.value !== ''){


  const newToDo = {
    text: headerInput.value,
    completed: false
  }
  toDoDate.push(newToDo)
  headerInput.value = ""
  render()
  console.log(localStorage)
  } else {
    alert("заполни задачу")
  }
  // console.log(toDoDate)
// localStorage.clear()
})

if (JSON.parse(localStorage.getItem("toDoList"))) {
	toDoDate = JSON.parse(localStorage.getItem("toDoList"));
	render();
}
