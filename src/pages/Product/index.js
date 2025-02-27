import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProductInfo from '../../components/Product/ProductInfo';
import Details from '../../components/Product/Details';
import Breadcrumb from '../../components/Product/Breadcrumb';

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
    <div className="product">
      { data && 
        <>
          <Breadcrumb paths={[ 'Home', data.store, data.name ]} />
          <ProductInfo content={data} />
          <Details content={data} />
        </>
      }
    </div>
  );
}

export default Product;
