import React, { useCallback, useEffect, useMemo, useState } from 'react'
import Todo from './Todo';

function Todolist() {
    var [newTodo,setNewTodo]=useState('')
    var x=useMemo(()=>{return [10,20]},[])
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
    function addTodo(){
      setTodos([...todos,{title:newTodo,price:222}])
    }
    var deleteTodo=useCallback(function(ind){
      var temp=JSON.parse(JSON.stringify(todos));
      temp.splice(ind,1)
      setTodos([...temp])
  },[])
    return (
      <div className="border border-danger m-2 p-2">
        <h1>Todolist</h1>
        <input type='text' onChange={(e)=>{setNewTodo(e.target.value)}} />
        <button onClick={addTodo}>Add Todo</button>
        {
            todos.map((todo,i)=>{
                return <Todo todo={todo} deleteTodo={deleteTodo} id={i} x={x}></Todo>
            })
        }
      </div>
    );
  }

export default React.memo(Todolist);
