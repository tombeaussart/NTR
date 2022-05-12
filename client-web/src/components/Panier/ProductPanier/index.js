import React, { useEffect, useState } from "react";
import { UserContext } from "../../../App";

const ProductPanier = ({ product }) => {
  const [prod, setProd] = useState({});
  const context = React.useContext(UserContext);

  useEffect(() => {
    var result = context.listProducts.find((obj) => {
      return obj.id === product;
    });
    setProd(result);
  });

  return (
    <div className="ProductPanierContainer">
        <img src={"Products/" + product + ".jpg"}></img>
        <div className="ProductInfos">
            <div className="nameProduct">{prod.nom}</div>
            <div className="priceProduct">{prod.prix} €</div>
        </div>
    </div>
  );
};

export default ProductPanier;
