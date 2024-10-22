import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import Todolist from "./Todolist";
import "./App.css";

function App() {
  var [todos,setTodos]=React.useState(["bat","ball","keeper"])
  var [countries,setCountries]=React.useState([])

  useEffect(()=>{  
    fetch("https://restcountries.com/v3/all")
    .then((res)=>{return res.json()})
    .then((data)=>{setCountries(data)})
  },[])
  return (
    <div className="border border-info p-2 m-2">
      <ul>
        {
          countries.map((c,i)=>{
            return<li key={i}>{c.name.common}</li>//key anedi isthene unique key is required for the list ane error raakundaa untundi//idi enduku ante react virtual dom comparision kosam each element ki unique keys isthunnaam
          })
        }
      </ul>
    </div>
  );
}

export default App;
