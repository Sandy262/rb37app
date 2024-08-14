import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import Todolist from "./Todolist";
import "./App.css";

function App() {
  var [c, setC] = useState(0);
  setInterval(() => {
    setC(c + 1);
  }, 1000);
  useEffect(()=>{
    console.log("App Component is Rendered")
  })
  return (
    <div className="border border-info p-2 m-2">
      <h1>India</h1>
      <Todolist></Todolist>
    </div>
  );
}

export default App;
