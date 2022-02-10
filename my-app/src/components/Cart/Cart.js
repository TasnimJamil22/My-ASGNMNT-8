import React from 'react';
import './Cart.css'

const Cart = (props) => {
    // console.log(props.cart);
    const { cart } = props;
    let total = 0;
    for(const writter of cart){
        total = total + writter.salary;
    }
    return (
        <div className='cart'>
            <p>Character selected:{props.cart.length}</p>
            <p>Total={total}</p>
        </div>
    );
};

export default Cart;