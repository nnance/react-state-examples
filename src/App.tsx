import React from "react";
import "./App.css";
import { StoreProvider, Store } from "./state/store";

function App() {
  return (
    <StoreProvider>
      <Store.Consumer>
        {([state, { autoIncriment, incriment, decriment, setMessage }]) => {
          return (
            <div className="App">
              <p>{state.counter}</p>
              <p>{state.message}</p>
              <button onClick={() => autoIncriment(1)}>Auto Incriment</button>
              <button onClick={() => incriment(1)}>Incriment</button>
              <button onClick={() => decriment(1)}>Decriment</button>
              <button onClick={() => setMessage("Goodbye!")}>Goodbye</button>
            </div>
          );
        }}
      </Store.Consumer>
    </StoreProvider>
  );
}

export default App;
