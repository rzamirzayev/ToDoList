import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import { nanoid} from "nanoid";
import User from "./User";
function App() {
  const [todo,setTodo]=useState([])
  const [input,setInput]=useState(
    {
      name:"",
      id:""
    }
  )
  const inputHandler=(e)=>{
    const value = e.target.value
    setInput(
    {
      name:value,
      id:nanoid()
    }
    )
  }
  const submitHandler=()=>{
   if(input.name!==""){
    setTodo([
      ...todo,input
    ])
    setInput({
      name:"",
      id:""
    })
   }

  
  
  }
  const deleteButton=(id)=>{
     const todoDelete=todo.filter((a)=>{
       return a.id!==id
    })
    setTodo(todoDelete)
    
    
  }
  console.log(todo);
  return (
    <div className="App">
      <div>My todos {todo.length}</div>
    <input  value={input.name} onChange={inputHandler}/>
    <button onClick={submitHandler}>add</button>
    { todo.map(
      (item,index)=>{return <User 
        key={index}
        name={item.name}
        delete={()=>deleteButton(item.id)}
        />}
      )
      }
      <p>
        {
          todo.length ===0 ? <p>List Bosdur</p> :""
        }
      </p>
     
  
    </div>
  );
}

export default App;
