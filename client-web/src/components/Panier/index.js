import React, { useState } from 'react';
import { UserContext } from '../../App';
import ProductPanier from './ProductPanier';
import axios from "axios";

const Panier = ({}) => {
    const context = React.useContext(UserContext);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleClick = () => {
        axios({
            method: "GET",
            url: "http://localhost:8080/clients",
            params: {
                id: 1,
                amount: context.total
            }
        }).then((res) => {
            console.log(res.data);
            setError("");
            setSuccess("L'achat a été effectué.");
            context.setPanier([]);
            context.setTotal(0);
        }).catch(err => {
            console.log(err);
            setError("Une erreur s'est produite. Réessayez.");
            setSuccess("");
        });
    };

    return (
        <div className='PanierContainer'>
            <div className='titlePanier'>Panier</div>
            {context.panier.map(r => {
                return <ProductPanier product={r}/>
            })}
            <div className='total'>Total : {context.total} €</div>
            {error && <div className='error'>{error}</div>}
            {success && <div className='success'>{success}</div>}
            <div className='buy' onClick={handleClick}>Acheter</div>
        </div>
    );
};

export default Panier;