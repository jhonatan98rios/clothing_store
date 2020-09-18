import React from 'react'
import { Link } from "react-router-dom";

import favorites from '../../../assets/home/icons/favorites.svg'
import './style.scss'

function ProductCard({content, storeId}) {

  return (
    <div className="productCard">
      <img className="product-image m-b-16" src={content.photo} alt="imagem do produto" />
      <div className="favorites">
        <img src={favorites} alt="" className="favorites-icon" />
      </div>
      <p> {content.name} </p>
      <span className="product-price"> {content.price} </span>
      <Link 
        className="product-button radius-4" 
        to={`/product/${storeId}/${content.id}`}>
        Comprar
      </Link>
    </div>
  );
}

export default ProductCard;
