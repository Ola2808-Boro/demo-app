import logo from './logo.svg';
import './App.css';

function App() {

  function helloReact() {
    alert('Hello React!')
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={helloReact}>
          Click on me!
        </button>
      </header>
    </div>
  );
}

export default App;
