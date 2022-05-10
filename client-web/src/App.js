import React, { useState } from "react";
import "./style/index.scss";

export const UserContext = React.createContext();

function App() {
  const [panier, setPanier] = useState(false);
  const [listProducts, setListeProducts] = useState([]);

  return (
    <div className="app">
      <UserContext.Provider>
        <div className="title">
          <div className="title-first" onClick={() => setPanier(false)}>
            Web<div className="title-second">Client</div>
          </div>
          <div className="panierButton" onClick={() => setPanier(true)}>
            {listProducts.length}
            <img src="cart.png" alt="cart"></img>
          </div>
        </div>
        <div className="content">
          
        </div>
      </UserContext.Provider>
    </div>
  );
}

export default App;
