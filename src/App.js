import Usf from './components/useEffect'
import { useState } from 'react';
function App() {
  const [state,setState]=useState(false)
  return (
    <div>
      <h1>Hello User</h1>
      <h1 onClick={()=>setState(!state)}>Show/Hide</h1>
      {state?<Usf/>:null}
    </div>
  );
}

export default App;