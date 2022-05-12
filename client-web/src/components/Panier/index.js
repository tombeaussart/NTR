import React from 'react';
import { UserContext } from '../../App';
import ProductPanier from './ProductPanier';

const Panier = () => {
    const context = React.useContext(UserContext);

    return (
        <div className='PanierContainer'>
            <div className='titlePanier'>Panier</div>
            {context.panier.map(r => {
                return <ProductPanier product={r}/>
            })}
            <div className='total'>Total : {context.total} €</div>
            <div className='buy'>Acheter</div>
        </div>
    );
};

export default Panier;