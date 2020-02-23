import React from "react";
import "./App.css";
import { CounterActions } from "./state/counter";
import { MessageActions } from "./state/message";
import { StoreProvider, Store } from "./state/store";

function App() {
  return (
    <StoreProvider>
      <Store.Consumer>
        {([state, dispatch]) => {
          const { incriment, decriment } = CounterActions;
          const { setMessage } = MessageActions;
          return (
            <div className="App">
              <p>{state.counter}</p>
              <p>{state.message}</p>
              <button onClick={() => dispatch(incriment(1))}>Incriment</button>
              <button onClick={() => dispatch(decriment(1))}>Decriment</button>
              <button onClick={() => dispatch(setMessage("Goodbye!"))}>
                Goodbye
              </button>
            </div>
          );
        }}
      </Store.Consumer>
    </StoreProvider>
  );
}

export default App;
