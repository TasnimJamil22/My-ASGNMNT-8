import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Writters from '../Writters/Writters';
import './Library.css'

const Library = () => {
    const [writters,setWritters] = useState([]);
    const [cart,setCart] = useState([]);

    useEffect( ()=>{
        fetch('./writters.JSON')
        .then(res => res.json())
        .then(data=>setWritters(data));
      },[])

      const handleAddToCart = (writter) => {
        //   console.log(writter);
        const newCart= [...cart, writter];
        setCart(newCart);
      }
    return (
        <div className='library'>
            <div className='library-container'>
                 
                {

                    writters.map(writter => <Writters
                    key={writter.key}
                    writter={writter}
                    handleAddToCart={handleAddToCart}
                    >

                    </Writters>
                    )
                }
            </div>
            <div className='cart-container'>
                <Cart 
                cart={cart}
                > </Cart>
            </div>
        </div>
    );
};

export default Library;