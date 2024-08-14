import React, { useEffect } from 'react'

function Todo({todo}) {
  useEffect(()=>{
    console.log("Todo Component is Rendered")
  })
  return (
    <div className='border border-info p-2 m-2'>
      {todo.title}
    </div>
  )
}

export default Todo
