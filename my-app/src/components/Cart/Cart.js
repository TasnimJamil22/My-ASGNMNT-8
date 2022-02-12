import React from 'react';
import './Cart.css'

const Cart = (props) => {
    // const {name,Personality,Powers,birth,salary,img} = props.cart;
    // console.log(props.cart);
    const { cart,name,Powers } = props;
    let total = 0;
    for(const writter of cart){
        total = total + writter.salary;
    }
    return (
        <div className='cart-background'>
            <div className='cart'>
            <p><b>Character selected:{cart.length}</b></p>
            <p><strong>Total=${total}</strong></p>
             
        </div>
        <div>
        <ul>
            {
                props.cart.map(single => <li className='name-selected'> {single.name} </li>)
            }
        </ul>
       </div>
        </div>
    );
};

export default Cart;