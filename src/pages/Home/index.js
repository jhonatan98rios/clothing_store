import React, { useEffect, useState } from 'react'
import Store from '../../components/Home/Store'
import axios from 'axios';

import Filter from '../../utils/Filter'

import LocalStorage from '../../utils/LocalStorage'

function Home() {

  const [data, setData] = useState([])

  useEffect(() => {

    axios.get('https://sandbox.houpa.app/api-tests/showcases').then(res => {
      setData(res.data.showcases)

      let showcases = res.data.showcases
      let favoredList = LocalStorage.getData()

      Filter.favoredFilter(showcases, favoredList)
    }) 


  }, [])

  return (
    <div className="Home">
      {data.map(store => (
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
