import React from "react";

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
  return <div><h1>Todolist</h1></div>;
}

export default Todolist;
