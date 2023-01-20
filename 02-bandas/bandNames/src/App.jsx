import React, { useContext } from "react";
import { BandAdd } from "./components/BandAdd";
import { BandsList } from "./components/BandsList";
import { SocketContext } from "./context/SocketContext";

function App() {
  const { online } = useContext(SocketContext); //traigo el online del context

  return (
    <div className="container">
      <div className="alert">
        <p>
          Service status:
          {online ? (
            <span className="text-success"> Online</span>
          ) : (
            <span className="text-danger"> Offline</span>
          )}
        </p>
      </div>

      <h1>BandNames</h1>
      <hr />
      <div className="row">
        <div className="col-8">
          <BandsList />
        </div>

        <div className="col-4">
          <BandAdd />
        </div>
      </div>
    </div>
  );
}

export default App;
