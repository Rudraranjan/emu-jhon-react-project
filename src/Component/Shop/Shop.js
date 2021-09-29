import React, { useEffect, useState } from 'react';
import { addToDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {

    const[products, setProducts] =useState([]);

    const [cart, setCart] = useState([]);

    const[displayProduct, setDisplayProduct] = useState([]);

    useEffect(()=> {
        fetch('./products.JSON')
        .then(res => res.json())
        .then(data => {setProducts(data);
        setDisplayProduct(data)
    });
                       

    },[])

    const handelProductAddtoCart = (product) => {
            const newCart = [...cart, product]
            setCart(newCart);
            addToDb(product.key);
    }

    const seachHandeler = event =>{
        const inputValue = event.target.value;
        const matchProducts = products.filter(product => product.name.toLowerCase().includes(inputValue.toLowerCase()));
        setDisplayProduct(matchProducts);
    }
    return (
       <div>
           <div className="search-box">
               <input onChange={seachHandeler} type="text" placeholder="Search Here" />
           </div>
            <div className="shop-container">
            <div className="product-container">
                <h3>Product : {products.length}</h3>
                {
                    displayProduct.map(product => <Product 
                        key = {product.key}
                         product={product} 
                         handelProductAddtoCart ={handelProductAddtoCart}>
                         </Product>)
                }
            </div>
            <div className="cart-container">
               <Cart cart={cart}></Cart>
            </div>            
        </div>
       </div>
    );
};

export default Shop;