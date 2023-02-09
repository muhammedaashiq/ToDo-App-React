import './App.css'
import { useState } from 'react';
function App() {

  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState('');

  return (
    <div className='Main'>
      <div className="app">
        <div className="mainHeading">
          <h1>ToDo List</h1>
        </div>
        <div className="subHeading">
          <br />
          {/* <h2>Whoop, it's Wednesday 🌝 ☕ </h2> */}
        </div>
        <div className="input">
          <input value={toDo} onChange={(e) => setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
          <i onClick={() => setToDos([...toDos, {id:Date.now() , text:toDo , status:false}])} className="fas fa-plus"></i>
        </div>
        <div className="todos">
          {
            toDos.map((value) => {
              return (
                <div className="todo">
                  <div className="left">
                    <input onChange={(e)=>{
                      setToDos(toDos.filter(obj2 =>{
                        console.log(e.target)
                        if(obj2.id == e.target.id){
                          obj2.status = e.target.checked
                        }
                        return obj2;
                      }))
                    }}
                    value={value.status}
                    type="checkbox" name={value.text} id={value.id} />
                    <p>{value.text}</p>
                    </div>
                  <div className="right"
                    onClick={(e)=>{
                      console.log('clicked')
                      console.log(e.target)
                    }}>
                    <i className="fas fa-times"></i>
                  </div>
                </div>
              )
            })
          }
          <div className='done'>
            
          </div>
          
        </div>
        
      </div>
      <div className="done">
        <div className="doneBox">
          <h1 id='head'>Done</h1>
          {toDos.map((obj)=>{
            if(obj.status){
              return (<h3>✔ {obj.text}</h3>)
            }
            return null;
          })}
        </div>
        </div>
    </div>
    
  );
}

export default App;


