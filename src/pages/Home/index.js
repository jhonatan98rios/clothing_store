import React, { useContext, useEffect } from 'react'
import Store from '../../components/Home/Store'

import DataContext from '../../store/DataContext'

function Home() {

  const currentData = useContext(DataContext)

  useEffect(()=>{
    console.log(currentData)
  })

  return (
    <div className="Home">
      { (currentData.isFiltered && currentData.favoredData) && currentData.favoredData.map(store => (
        <Store 
          key={store.id} 
          content={store} 
          storeId={store.id} 
        />
      ))}

      {  (!currentData.isFiltered && currentData.storeData) && currentData.storeData.map(store => (
        <Store 
          key={store.id} 
          content={store} 
          storeId={store.id} 
        />
      ))}
    </div>
  );
}

export default Home;
