import React from "react";
import { UserContext } from '../../../App';

const Product = ({ dataProduct }) => {
    const context = React.useContext(UserContext);

    const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

    const handleClickPlus = () => {
        context.setPanier(oldPanier => [...oldPanier, dataProduct.id]);
        context.setTotal(context.total + dataProduct.prix);
    };

    const handleClickMoins = () => {
        var arr = [...context.panier];
        let index = arr.indexOf(dataProduct.id);
        if (index > -1) {
            arr.splice(index, 1);
        }
        context.setPanier(arr);
        context.setTotal(context.total - dataProduct.prix);
    };

    return (
        <div className="productContainer">
        <div>
            <img src={"Products/" + dataProduct.id + ".jpg"}></img>
            <div className="nomProduct">{dataProduct.nom}</div>
            <div className="descProduct">{dataProduct.desc}</div>
        </div>
        <div className="prixInput">
            <div className="prixProduct">{dataProduct.prix} €</div>
            <div className="addRemoveButton">
                {countOccurrences(context.panier, dataProduct.id)>0 && <input type="button" value="-" onClick={handleClickMoins} />}
                {countOccurrences(context.panier, dataProduct.id)}
                <input type="button" value="+" onClick={handleClickPlus} />
            </div>
        </div>
        </div>
    );
};

export default Product;
