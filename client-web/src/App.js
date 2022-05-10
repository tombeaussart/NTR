import React, { useState } from "react";
import List from "./components/List";
import "./style/index.scss";

export const UserContext = React.createContext();

function App() {
  const [pagePanier, setPagePanier] = useState(false);
  const [panier, setPanier] = useState([]);
  const [listProducts, setListeProducts] = useState([
    {id: 1, nom: "T-Shirt Gris", desc: "Un t-shirt gris 100% coton", prix: 10},
    {id: 2, nom: "Pantalon Noir", desc: "Un pantalon noir 100% polyesther", prix: 20},
    {id: 3, nom: "Pull Rouge", desc: "Un pull rouge 100% laine", prix: 30},
    {id: 4, nom: "Casquette Noire", desc: "Une casquette noire brodée", prix: 15}
  ]);

  return (
    <div className="app">
      <UserContext.Provider value={{listProducts, panier, setPanier}}>
        <div className="title">
          <div className="title-first" onClick={() => setPagePanier(false)}>
            Web<div className="title-second">Client</div>
          </div>
          <div className="panierButton" onClick={() => setPagePanier(true)}>
            {panier.length}
            <img src="cart.png" alt="cart"></img>
          </div>
        </div>
        <div className="content">
          {!pagePanier && <List/>}
        </div>
      </UserContext.Provider>
    </div>
  );
}

export default App;
