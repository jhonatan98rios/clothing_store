import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Product(props) {

  const { storeId, productId } = useParams()
  const [data, setData] = useState(null)

  useEffect(() => {
    if(storeId && productId){
      axios.get(`https://sandbox.houpa.app/api-tests/product/${storeId}/${productId}`).then(res => {
        setData(res.data)
      })
    }
  }, [])

  return (
    <div className="Product">
      { data ? data.product.name : null }
    </div>
  );
}

export default Product;
