import React, { useEffect } from 'react'
//import { Link } from 'react-router-dom';
import {productInfo} from './productInfo.module.scss'

function ProductInfo({content}) {

  useEffect(()=>{
    console.log(content)
  })

  return (
    <div className={productInfo}> {/* flex column */}
      
    </div>
  );
}

export default ProductInfo;
