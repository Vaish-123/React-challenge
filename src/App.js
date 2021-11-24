import { useState } from 'react'
import Counter from './components/counter';
function App() {
  const [count, setCount] = useState(0);
  const addCount = () => {
    setCount(count + 1)
  }
  let obj={
    title:'1st counter',
    c:count
  }
  return (
    <div>
      <h1>Hello user</h1>
      <Counter {...obj}/>
      <Counter title='2nd counter' c={count}/>
      <button onClick={addCount}>Add</button>
    </div>
  );
}

export default App;