import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
import Rating from 'react-rating';

const Product = (props) => {
    // console.log(props.product);
    const {name, price, seller,stock, img, star} = props.product;
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h1>Product Name : {name}</h1>
                <p>Sell By : {seller}</p>
                <h3>Price: {price}</h3>
                <p>Only {stock} items left</p>
                <Rating
                 initialRating={star}
                 emptySymbol="far fa-star icon"
                 fullSymbol="fas fa-star icon"                
                readonly>                
                  </Rating>
                <br />
                <br />
                     <button onClick={() => props.handelProductAddtoCart(props.product)} 
                    className="btn-regular">
                    {element} Add to Cart
                    </button>
            </div>            
        </div>
    );
};

export default Product;