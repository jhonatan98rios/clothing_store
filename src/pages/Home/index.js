import React, { useContext } from 'react'
import Store from '../../components/Home/Store'

import DataContext from '../../store/DataContext'

function Home() {

  const currentData = useContext(DataContext)

  return (
    <div className="Home m-t-64">
      { (currentData.isFiltered && currentData.favoredData) && currentData.favoredData.map(store => (
        <Store 
          key={store.id} 
          content={store} 
          storeId={store.id} 
        />
      ))}

      { (currentData.inputText && currentData.favoredData) && currentData.favoredData.map(store => (
        <Store 
          key={store.id} 
          content={store} 
          storeId={store.id} 
        />
      ))}

      {  (!currentData.isFiltered && !currentData.inputText && currentData.storeData) && currentData.storeData.map(store => (
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
