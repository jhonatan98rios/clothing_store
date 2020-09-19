import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";

import LocalStorage from '../../../utils/LocalStorage'

import redHeart from '../../../assets/shared/icons/red-favorites.svg'
import grayHeart from '../../../assets/shared/icons/favorites.svg'

import {productCard, productImage, favorites, favoritesIcon, productPrice, productButton } from './productCard.module.scss'

function ProductCard({content, storeId}) {

  const [favored, setFavored] = useState(false)

  function favoredVerification(){
    /* This method will change the icon of favored products */
    let data = LocalStorage.getData()

    data.forEach(d => {
      if( d.store === storeId && d.product === content.id ){
        setFavored(true)
      }else{
        setFavored(false)
      }
    })
  }

  function setFavorite(){
    /* Define the product as favorite when icon was clicked */
    LocalStorage.setData(storeId, content.id)
    favoredVerification()
  }

  useEffect(()=>{
    favoredVerification()
  })

  return (
    <div className={productCard}>
      <img className={`${productImage} m-b-16`} src={content.photo} alt="imagem do produto" />
      <div className={favorites} onClick={setFavorite}>
        <img src={favored ? redHeart : grayHeart} alt="" className={favoritesIcon} />
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
