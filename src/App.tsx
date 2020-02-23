import React from "react";
import "./App.css";
import { reducer } from "./state/app";
import { CounterActionType } from "./state/counter";
import { MessageActionType } from "./state/message";

function App() {
  const [state, dispatch] = React.useReducer(reducer, {
    counter: 100,
    message: "hello"
  });

  return (
    <div className="App">
      <p>{state.counter}</p>
      <p>{state.message}</p>
      <button onClick={() => dispatch({ type: CounterActionType.incriment, number: 1})}>Incriment</button>
      <button onClick={() => dispatch({ type: CounterActionType.decriment, number: 1})}>Decriment</button>
      <button onClick={() => dispatch({ type: MessageActionType.setMessage, message: "Goodbye!"})}>Goodbye</button>
    </div>
  );
}

export default App;
