import React from 'react'
import ProductCard from '../ProductCard'
import Flickity from 'react-flickity-component'
import './style.scss' // This page require default css to stylize Flickty

const flickityOptions = {
  prevNextButtons: true,
  initialIndex: 0,
  groupCells: '80%',
  cellAlign: 'center',
  draggable: true,
  pageDots: false
}

function Content({products, storeId}) {

  return (
    <div className="content">
      <div className="container">
        <Flickity
          className={'carousel'}
          options={flickityOptions}
        >
          {products.map((prod, key) => (
            <ProductCard key={key} content={prod} storeId={storeId} />
          ))}
        </Flickity>
      </div>
    </div>
  );
}

export default Content;
