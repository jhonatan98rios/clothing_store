import React, { useEffect } from 'react'
import ProductCard from '../ProductCard'
import Flickity from 'react-flickity-component'
import './style.scss'

const flickityOptions = {
  initialIndex: 0,
  groupCells: '80%',
  prevNextButtons: true,
  pageDots: false,
  cellAlign: 'center',
  draggable: true
}

function Content({products, storeId}) {

  useEffect(() => {
    
  })

  return (
    <div className="content">
      <div className="container">
        <Flickity
          className={'carousel'}
          elementType={'div'}
          options={flickityOptions}
          disableImagesLoaded={false}
          reloadOnUpdate
          static
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
