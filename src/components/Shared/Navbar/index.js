import React, { useContext } from 'react';

import burger from '../../../assets/shared/icons/menu.svg'
import search from '../../../assets/shared/icons/search.svg'
import shopcar from '../../../assets/shared/icons/shopcar.svg'
import redHeart from '../../../assets/shared/icons/red-favorites.svg'
import grayHeart from '../../../assets/shared/icons/favorites.svg'

import { navbar, container, burgerMenu, features } from './navbar.module.scss'

import DataContext from '../../../store/DataContext'

function Navbar() {

  const currentData = useContext(DataContext)

  return (
    <div className={navbar}>
      <div className={container}>
        <div className={burgerMenu}>
          <img src={burger} alt="menu de navegação" height="18px" />
          <p> Menu </p>
        </div>
        <div className={features}>
          <ul>

            <li className="m-l-24">
              <img src={search} alt="Icone de busca" className="m-r-8" height="20px"/>
              <input 
                type="text" 
                placeholder="Busca" 
                className="f-14"
                value={currentData.inputText || ''} 
                onChange={ (e) => currentData.doSearch(e) }
              />
            </li>

            <li className="m-l-24" onClick={ (e) => currentData.showFavorites(e) }>

              <img src={ currentData.isFiltered ? redHeart : grayHeart } className="m-r-8" alt="Icone de meus favoritos" height="20px"/>
              <p className="is-hidden-mobile f-16"> Meus favoritos </p>
            </li>

            <li className="m-l-24">
              <img src={shopcar} className="m-r-8" alt="Icone de meu carrinho" height="20px"/>
              <p className="is-hidden-mobile f-16"> Meu carrinho | R$ 0,00 </p>
            </li>

          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
