import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProductInfo from '../../components/Product/ProductInfo';
import Details from '../../components/Product/Details';
import Breadcrumb from '../../components/Product/Breadcrumb';

import Utils from '../../utils/Utils'

import {container} from './product.module.scss'

function Product(props) {

  const { storeId, productId } = useParams()
  const [data, setData] = useState(null)

  useEffect(() => {
    if(storeId && productId){
      axios.get(`https://sandbox.houpa.app/api-tests/product/${storeId}/${productId}`).then(res => {
        setData(res.data.product)
        console.log(res.data.product)
      })
    }
  }, [storeId, productId])

  return (
    <div className={container}>
      { data && 
        <>
          <Breadcrumb paths={[ 'Home', data.store, Utils.classifier(data.name) ]} />
          <div className="is-row-desktop is-column-mobile">
            <ProductInfo content={data} />
            <Details content={data} />
          </div>
        </>
      }
    </div>
  );
}

export default Product;
