import './App.css';
import HeaderBar from "./components/HeaderBar"
import ExampleCard from "./components/ExampleCard"

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <HeaderBar />
      <div style={{ padding: 10 }}>

        <ExampleCard />
        <ExampleCard />
        <ExampleCard />
        <ExampleCard />
        <ExampleCard />
        <ExampleCard />
        <ExampleCard />
      </div>
    </div>
  );
}

export default App;
