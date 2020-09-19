import React, { useContext, useEffect } from 'react';

import burger from '../../../assets/shared/icons/menu.svg'
import search from '../../../assets/shared/icons/search.svg'
import shopcar from '../../../assets/shared/icons/shopcar.svg'
import redHeart from '../../../assets/shared/icons/red-favorites.svg'
import grayHeart from '../../../assets/shared/icons/favorites.svg'

import { navbar, container, burgerMenu, features } from './navbar.module.scss'

import DataContext from '../../../store/DataContext'

function Navbar() {

  const currentData = useContext(DataContext)

  useEffect(() => {
    console.log(currentData.isFiltered)
  })

  return (
    <div className={navbar}>
      <div className={container}>
        <div className={burgerMenu}>
          <img src={burger} alt="menu de navegação" height="18px" />
          <p> Menu </p>
        </div>
        <div className={features}>
          <ul>

            <li>
              <img src={search} alt="Icone de busca" height="20px"/>
              <input type="text" placeholder="Busca" />
            </li>

            <li onClick={ (e) => { currentData.showFavorites(e) } }>

              <img src={ currentData.isFiltered ? redHeart : grayHeart } alt="Icone de meus favoritos" height="20px"/>
              <p className="is-hidden-mobile"> Meus favoritos </p>
            </li>

            <li>
              <img src={shopcar} alt="Icon de meu carrinho" height="20px"/>
              <p className="is-hidden-mobile"> Meu carrinho | R$ 0,00 </p>
            </li>

          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
