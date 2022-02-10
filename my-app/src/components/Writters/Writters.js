import React from 'react';
import './Writters.css'

const Writters = (props) => {
     
    const {name,Personality,Powers,birth,salary,img} = props.writter;
    return (
        <div className="writter-container">
            
            <div className="row row-cols-1 row-cols-md-3">
   
   
   
  <div className="col-lg-6">
    <div className="card">
      <img src= {img}  className="card-img-top mx-auto" alt="..."/>
      <div className="card-body">
         
        <p className="card-text"> </p>
 
            <h5>Name:{name}</h5>
            <p>Personality:{Personality}</p>
            <h6>Powers:{Powers}</h6>
            <h6>Birth:{birth}</h6>
             <h6>Salary:{salary}</h6> 
       
            <button 
            onClick={() => props.handleAddToCart(props.writter)}
            className="button"> <i className="fas fa-cart-plus"></i> Add</button>
      </div>
    </div>
  </div>
  
</div>
        </div>
    );
};

export default Writters;