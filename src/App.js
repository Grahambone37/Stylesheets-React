import './App.css';
import Sarah from './child-one';
import Bill from './child-two';

function App() {
  return (
    <div className="App">
      <h1>Bob, father of:</h1>
      <div>
        <Sarah />
        <h1>and</h1>
        <Bill />
      </div>
    </div>
  );
}

export default App;
