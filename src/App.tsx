import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { reducer } from "./state/app";
import { CounterActionType } from "./state/counter";

function App() {
  const [state, dispatch] = React.useReducer(reducer, {
    counter: 100,
    message: "hello"
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <p>{state.counter}</p>
      <button onClick={() => dispatch({ type: CounterActionType.incriment, number: 1})}>Incriment</button>
    </div>
  );
}

export default App;
