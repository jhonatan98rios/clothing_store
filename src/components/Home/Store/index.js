import React from 'react'
import Header from '../Header'
import ProductList from '../ProductList'

function Store({content, storeId}) {

  return (
    <div className="store">
      <Header content={content} />
      <ProductList products={content.products} storeId={storeId} />
    </div>
  );
}

export default Store;
