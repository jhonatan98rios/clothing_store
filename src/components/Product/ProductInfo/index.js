import React from 'react'
import {productInfo, thumb, description} from './productInfo.module.scss'

function ProductInfo({content}) {

  return (
    <div className={productInfo}> {/* flex column */}
      <img className={thumb} src={content.photo} alt={content.name} />
      <p className={description}> {content.description} </p>
    </div>
  );
}

export default ProductInfo;
