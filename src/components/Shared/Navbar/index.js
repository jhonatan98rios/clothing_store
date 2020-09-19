import React from 'react';
import LocalStorage from '../../../utils/LocalStorage'

import burger from '../../../assets/shared/icons/menu.svg'
import search from '../../../assets/shared/icons/search.svg'
import favorites from '../../../assets/shared/icons/favorites.svg'
import shopcar from '../../../assets/shared/icons/shopcar.svg'

import { navbar, container, burgerMenu, features } from './navbar.module.scss'

function Navbar() {

  function showFavorite(){
    let data = LocalStorage.getData()
    console.log(data)
  }

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

            <li onClick={showFavorite}>
              <img src={favorites} alt="Icone de meus favoritos" height="20px"/>
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
