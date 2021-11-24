import Employee from "./components/maping";

function App() {
  let emp = [{ name: 'Vvn', age: 21 }, { name: 'abc', age: 12 }]
  return (
    <div>
      <h1>Hello user</h1>
      {
        emp.map((obj, index) => 
          <Employee key={index} {...obj} />
        )
      }
    </div>
  );
}

export default App;