import React, { useEffect, useState } from 'react'
import Store from '../../components/Home/Store'
import axios from 'axios';

function Home() {

  const [data, setData] = useState([])

  useEffect(() => {

    axios.get('https://sandbox.houpa.app/api-tests/showcases').then(res => {
      setData(res.data.showcases)
    })

  }, [])

  return (
    <div className="Home">
      {data.map(store => (
          <Store key={store.id} content={store} storeId={store.id} />
      ))}
    </div>
  );
}

export default Home;
