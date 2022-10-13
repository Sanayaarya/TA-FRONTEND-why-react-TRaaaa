let uLRoot = document.querySelector(".todos");
let todoInput = document.querySelector(`input[type="text"]`)

let all = document.querySelector(".all")
let active = document.querySelector(".active");
let completed = document.querySelector("completed")
let clear = document.querySelector(".clear")

let activeButton = "all";

let allTodos = localStorage.getItem("allTodos")
    ? JSON.parse(localStorage.getItem("allTodos"))
    :[]

    function addTodo(event){
      if(event.keyCode === 13 && event.target.value){
       allTodos.push({
        name:event.target.value,
        isDone:false,
       })
        event.target.value="";
        createUI();
        localStorage.setItem("allTodos",JSON.stringify(allTodos))
      }
    }
    function handleCheck(event){
      if(event.target.classList.contains("check")){
        let id = event.target.dataset.id;
        
        allTodos[id].isDone = !allTodos[id].isDone;
        createUI();
        localStorage.setItem("allTodos",JSON ,stringify(allTodos))
      }
    }

    function createUI(data = allTodos){
      let todoUI=data.map((todo,i)=>{
        let li = React.createElement(
          "li",
          {},
          React.createElement("input",{
            type:"checkbox",
            className:"check",
            checked: todo.isDone,
            "data-id":i,
          }),
          React.createElement("p",{},todo.name),
          React.createElement("span",
          {
            className:"delete",
            "data-id":i
          },
          "❌"
        ) 
      );
      return li;
      
      })
      ReactDom.render(todoUI,ulRoot); 
    }