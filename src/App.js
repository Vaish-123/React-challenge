import { useState } from 'react/cjs/react.development';
import './App.css'
function App() {
  const [toDo, setToDo] = useState('')
  const [toDos, setToDos] = useState([])
  const [Delete, setDelete] = useState([])
  const del = (index) => {
    var temp = toDos.filter((d, i) => {
      if (index !== i)
        return d
      setDelete([...Delete, d])
    })
    setToDos(temp)
  }
  const chk = (index) => {
    var temp = toDos.map((obj, i) => {
      if (index === i)
        return { text: obj.text, status: !obj.status }
      return obj
    })
    setToDos(temp)
  }
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e) => setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." id='abc' />
        <i onClick={() => { setToDos([...toDos, { text: toDo, status: false }]); setToDo('') }} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {
          toDos.map((value, index) => {
            return (<div className="todo">
              <div className="left">
                <input onClick={() => { chk(index) }} type="checkbox" checked={value.status} />
                {
                  value.status ? <p id='chk'>{value.text}</p> : <p>{value.text}</p>
                }
              </div>
              <div className="right">
                <i onClick={() => { del(index) }} className="fas fa-trash-alt"></i>
              </div>
            </div>
            )
          })
        }
      </div>
      <div>
        <ul>
          {
            Delete.map(((data)=>
            (
              <li>{data.text}</li>
            )
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default App;