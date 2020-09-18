import React, { useEffect, useState } from 'react'
import {
  details, 
  prodClass, 
  prodTitle, 
  prodSubtitle, 
  prodPrice, 
  paymentOptions, 
  prodSizesList, 
  prodSize,
  prodQuantity,
  buyButton,
  carButton,
  cep,
  cepInput,
  buttonCalc,
  cepTitle,
  cepLegend,
} from './details.module.scss'

import Utils from '../../../utils/Utils'
import { Link } from 'react-router-dom'
import Social from '../../Shared/Social'

function Details({content}) {

  const [installments, setInstallments] = useState(null)
  const [quantity, setQuantity] = useState(0)

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
    <div className={details}>
      <p className={prodClass}> { Utils.classifier(content.name) } </p>
      <h2 className={`${prodTitle} is-poppins`}> { content.name } </h2>
      <p className={prodSubtitle}> Produzido e entregue por {content.store} </p>
      <p className={prodSubtitle}> Produzido e entregue por ... </p>
      <span className={`${prodPrice} is-poppins`}> { content.price } </span>
      <p className={paymentOptions}> ou até 5x de { installments } | Atacado mínimo: x peças </p>
      <p> Tamanho: </p>
      <div className={prodSizesList}>
        {
          content.grids.map(grid => (
            <span className={prodSize} key={grid.sizeId}> {grid.sizeName} </span>
          ))  
        }
      </div>

      <div className={`${prodQuantity} m-b-24`}>
        <p className="f-16"> Quantidade </p>
        <div className='is-row align-center'>
          <select className="is-poppins">
            { 
              quantity && 
              quantity.map(index => (
                <option key={index+1} id={index+1} > {index+1} </option>
              )) 
            }
          </select>
          <p className="m-l-16 f-12"> Avise-me quando chegar </p>
        </div>
      </div>

      <div className="is-column">
        <button className={`${buyButton} radius-4`}>
          Comprar
        </button>
        <button className={`${carButton} radius-4`}>
          Adicionar ao carrinho
        </button>
      </div>

      <div className={cep}>
        <h3 className={`${cepTitle} is-poppins`}> Frete </h3>
        <p className={cepLegend}> Calcule o frete estimado para sua região </p>
        <div className="is-row">
          <input className={`${cepInput} m-r-16 m-b-8`} type="text" value="" placeholder="CEP" />
          <button className={buttonCalc}> Calcular </button>
        </div>
        <Link to="/"> Não sei meu CEP </Link>
      </div>

      <Social />

    </div>
  );
}

export default Details;