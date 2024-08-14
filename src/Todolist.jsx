import React, { useEffect, useState } from 'react'
import Todo from './Todo';

function Todolist() {
    var [todos, setTodos] = useState([
      {
        title: "buy vegetables",
        price: "100",
      },
      {
        title: "go to goa",
        price: "300",
      },
      {
        title: "create institute app",
        price: "200",
      },
      {
        title: "make toy car",
        price: "150",
      },
    ]);
    useEffect(()=>{
      console.log("Todolist Component is Rendered")
    })
    return (
      <div className="border border-danger m-2 p-2">
        <h1>Todolist</h1>
        {
            todos.map((todo)=>{
                return <Todo todo={todo}></Todo>
            })
        }
      </div>
    );
  }

export default Todolist
