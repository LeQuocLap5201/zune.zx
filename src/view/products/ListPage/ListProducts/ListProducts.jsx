import React from 'react';
import PropTypes from 'prop-types';
import BoxProduct from '../../BoxProduct/BoxProduct';
import './style.css'

ListProducts.propTypes = {
    listProducts: PropTypes.array,
};

ListProducts.defaultProps = {
    listProducts: []
}

function ListProducts(props) {
    const {listProducts} = props;

    return (
        <div className='list-products'>
        {listProducts.map(product => (
            <BoxProduct key={product.id} product={product}/>
        ))}
        </div>
    );
}

export default ListProducts;