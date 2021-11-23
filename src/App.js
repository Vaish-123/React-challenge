import './App.css';
import Txt from './components/text'
function App() {
  const abc = 'here'
  return (
    <div>
      <Welcome/>
      <h3>React</h3>
      <p style={{ backgroundColor: "grey" }}>something {abc}</p>
      <Txt data={abc}/>
    </div>
  );
}

export default App;

function Welcome(){
  return(<h1 className='wlcm'>Welcome</h1>)
}