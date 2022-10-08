import logo from './logo.svg';
import './App.css';

function App({saludo, children}) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {saludo}
          {children}
        </a>
      </header>
    </div>
  );
}

export default App;
