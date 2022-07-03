import React, { useState } from 'react'
const CreateNote = () => {
  const [data,setData] = useState({
    title:'',
    note:''
  });
  const [dataArray,setDataArray] = useState([]);
  const inputEvent =(event)=>{
    if(event.target.name==='title'){
      setData({...data,title:event.target.value});
    }else if(event.target.name==='note'){
      setData({...data,note:event.target.value});
    }
  }
  const addNote = (event)=>{
    dataArray.push({title:data.title,note:data.note});
    setDataArray([...dataArray]);
    data.title=''
    data.note=''
  }
  const Ondelete = (id) =>{
    let temp = [...dataArray];
    temp.splice(id,1);
    setDataArray(temp);

  }
  return (
    <>
    <div className='createNote-main-div'>
      <div className='createNote-div'>

        <input type='text' placeholder='title' value={data.title} name='title' onChange={inputEvent}/>

        <textarea name="note" id="" placeholder='write a note here' value={data.note} onChange={inputEvent}></textarea>

        <button onClick={addNote}>
          +
        </button>
      </div>
    </div>
    <div className='note-main-div' >
    {dataArray.map((d,index)=>{
    return (
      <div className='note-div' key={index}>
        <h5>{d.title}</h5>
        <p>{d.note}</p>
        <button onClick={() =>{
          Ondelete(index);
        }}>-</button>
      </div>)
    })}
    </div>
    </>
  )
}

export default CreateNote