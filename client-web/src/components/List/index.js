import React from 'react';
import Product from './Product';
import { UserContext } from '../../App';

const List = ({}) => {
    const context = React.useContext(UserContext);

    return (
        <div className='ListContainer'>
            {context.listProducts.map(r => {
                return <Product dataProduct={r}/>
            })}
        </div>
    );
};

export default List;