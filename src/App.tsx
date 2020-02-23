import React from "react";
import "./App.css";
import { CounterActionType } from "./state/counter";
import { MessageActionType } from "./state/message";
import { StoreProvider, Store } from "./state/store";

function App() {
  return (
    <StoreProvider>
      <Store.Consumer>
        {([state, dispatch]) => (
          <div className="App">
            <p>{state.counter}</p>
            <p>{state.message}</p>
            <button
              onClick={() =>
                dispatch({ type: CounterActionType.incriment, number: 1 })
              }
            >
              Incriment
            </button>
            <button
              onClick={() =>
                dispatch({ type: CounterActionType.decriment, number: 1 })
              }
            >
              Decriment
            </button>
            <button
              onClick={() =>
                dispatch({
                  type: MessageActionType.setMessage,
                  message: "Goodbye!"
                })
              }
            >
              Goodbye
            </button>
          </div>
        )}
      </Store.Consumer>
    </StoreProvider>
  );
}

export default App;
