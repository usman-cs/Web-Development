import React, { useState } from 'react'
import ToDoList from './ToDoList';

const App = () => {
  const [inputList,setList] = useState('');
  const [items,setItems] = useState([]);
  const itemEvent = (event) => {
    setList(event.target.value)
  }
  const listOfItems = (event) => {
    if(event.key==='Enter' || event._reactName==='onClick'){
      setItems((oldItems)=>{
        return [...oldItems,inputList]
      })
      setList('');
    }

  }
  const deleteItem = (id) =>{
        let temp=[...items]
        temp.splice(id,1);
        setItems(temp);
    }
  return (
    <>
      <div className='main-div'>
        <div className='center-div'>
          <br/>
          <h1>ToDo List</h1>
          <br/>
          <input type='text' placeholder='Add a Item' onChange={itemEvent} value={inputList} onKeyDown={listOfItems}></input>
          <button onClick={listOfItems} >+</button>

          <ol>
            {/* <li>{inputList}</li> */}
            {items.map((i,index)=>{
             return <ToDoList key={index} text={i} id={index} delete={deleteItem}/>
            })}
          </ol>
        </div>
      </div>
    </>
  )
}

export default App