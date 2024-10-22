import React, { useEffect } from 'react'

function Todo({todo, deleteTodo,id}) {
  useEffect(()=>{
    console.log("Todo Component is Rendered:: ",todo.title)
  })
  return (
    <div className='border border-info p-2 m-2'>
      {todo.title}
      <button onClick={()=>{deleteTodo(id)}}>Delete</button>
    </div>
  )
}

export default React.memo(Todo)
