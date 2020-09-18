import React from 'react'
import { Link } from "react-router-dom";

import favoritesSVG from '../../../assets/home/icons/favorites.svg'
import {productCard, productImage, favorites, favoritesIcon, productPrice, productButton } from './productCard.module.scss'

function ProductCard({content, storeId}) {

  return (
    <div className={productCard}>
      <img className={`${productImage} m-b-16`} src={content.photo} alt="imagem do produto" />
      <div className={favorites}>
        <img src={favoritesSVG} alt="" className={favoritesIcon} />
      </div>
      <p> {content.name} </p>
      <span className={productPrice}> {content.price} </span>
      <Link 
        className={`${productButton} radius-4`} 
        to={`/product/${storeId}/${content.id}`}>
        Comprar
      </Link>
    </div>
  );
}

export default ProductCard;
