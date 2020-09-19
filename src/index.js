import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Navbar from './components/Shared/Navbar';
import Routes from './routes'
import Filter from './utils/Filter'
import LocalStorage from './utils/LocalStorage'
import './styles/main.scss';

import DataContext from './store/DataContext'

const App = () => {
  
  const [currentData, setCurrentData] = useState({})
  const [isFiltered, setFiltered] = useState(false)

  function showFavorites(e){
    setFiltered(old => (!old))
  }

  useEffect(() => {

    axios.get('https://sandbox.houpa.app/api-tests/showcases').then(res => {

      let favoredList = LocalStorage.getData()
      
      setCurrentData({
        storeData: res.data.showcases,
        favoredData: Filter.favoredFilter(res.data.showcases, favoredList),
        isFiltered,
        showFavorites
      })
    })

  }, [isFiltered])

  return(
    <React.StrictMode>
      <DataContext.Provider value={currentData}>
        <DataContext.Consumer>
          {(currentData) => (
            <>
              <Navbar {...currentData}  />
              <Routes {...currentData} />   
            </>
          )}
        </DataContext.Consumer>
      </DataContext.Provider>
    </React.StrictMode>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

