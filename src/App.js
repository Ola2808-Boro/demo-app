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
        <a href='https://github.com/Ola2808-Boro/demo-app'>Repo link</a>
      </header>
    </div>
  );
}

export default App;
