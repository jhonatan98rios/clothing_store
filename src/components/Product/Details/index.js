import React, { useEffect, useState } from 'react'
import {
  container,
  details, 
  prodClass, 
  prodPrice, 
  paymentOptions, 
  prodSizesList, 
  prodSize,
  prodQuantity,
  selectQuantity,
  buyButton,
  carButton,
  cep,
  cepInput,
  buttonCalc,
  cepLegend,
  fav
} from './details.module.scss'

import Utils from '../../../utils/Utils'
import { Link } from 'react-router-dom'
import Social from '../../Shared/Social'

import LocalStorage from '../../../utils/LocalStorage'

import redHeart from '../../../assets/shared/icons/red-favorites.svg'
import grayHeart from '../../../assets/shared/icons/favorites.svg'

function Details({content, storeId}) {

  const [installments, setInstallments] = useState(null)
  const [quantity, setQuantity] = useState(0)
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
    /* to get installments value from the content */
    let floatedMoney = Utils.moneyToFloat(content.price)
    let installmentsValue = Utils.getInstallments(floatedMoney, 5)
    setInstallments(installmentsValue)

    /* Create a options array */
    let options = Array.from(Array(content.grids[0].quantity).keys())
    setQuantity(options)

  }, [content])

  return (
    <div className={container}>
      <div className={details}>

        <img 
          src={favored ? redHeart : grayHeart} 
          alt="favoritos" className={fav}
          onClick={setFavorite}
        />

        {/* Product data and description */}

        <p className={`${prodClass} f-16`}> { Utils.classifier(content.name) } </p>
        <h2 className="is-poppins text-gray f-20 m-b-8"> { content.name } </h2>
        <p className="text-gray f-12"> Produzido e entregue por {content.store} </p>
        <p className="text-gray f-12 m-b-16"> Produzido e entregue por Tom Hanks </p>
        <span className={`${prodPrice} is-poppins text-gray`}> { content.price } </span>
        <p className={`${paymentOptions} f-12 m-b-16`}> ou até 5x de { installments } | Atacado mínimo: x peças </p>

        {/* Sizes selection */}

        <p className="f-12"> Tamanho: </p>
        <div className={prodSizesList}>
          {
            content.grids.map(grid => (
              <span className={prodSize} key={grid.sizeId}> {grid.sizeName} </span>
            ))  
          }
        </div>

        {/* Quantity Selection */}

        <div className={`${prodQuantity} m-b-24`}>
          <p className="f-16 text-gray"> Quantidade </p>
          <div className='is-row align-center'>
            <select className={`${selectQuantity} is-poppins radius-4`}>
              { 
                quantity && 
                quantity.map(index => (
                  <option key={index+1} id={index+1} > {index+1} </option>
                )) 
              }
            </select>
            <p className="m-l-16 f-12 text-gray"> Avise-me quando chegar </p>
          </div>
        </div>

        {/* Button */}

        <div className="is-column">
          <button className={`${buyButton} radius-4 black-bg text-white f-18 m-b-10`}>
            Comprar
          </button>
          <button className={`${carButton} radius-4 text-gray f-18 m-b-10`}>
            Adicionar ao carrinho
          </button>
        </div>

        {/* Transport */}

        <div className={`${cep} text-gray m-t-48 m-b-48`}>
          <h3 className="is-poppins f-20 text-gray"> Frete </h3>
          <p className={cepLegend}> Calcule o frete estimado para sua região </p>
          <div className="is-row">
            <input className={`${cepInput} m-r-16 m-b-8 p-l-16 radius-4`} type="text" placeholder="CEP" />
            <button className={`${buttonCalc} radius-4 black-bg text-white`}> Calcular </button>
          </div>
          <Link to="/" className="f-12 m-t-10 text-gray"> Não sei meu CEP </Link>
        </div>

        <Social />

      </div>
    </div>
  );
}

export default Details;