import React from 'react'

const ToDoList = (props) => {
 
    return(
      <div className='todo-list'>
        <button onClick={()=>{
          props.delete(props.id);
        }}>x</button>
        <li>{props.text}</li>
      </div>
    ) 
}

export default ToDoList