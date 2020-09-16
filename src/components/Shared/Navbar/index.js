import React from 'react';
import './style.scss'
import burger from '../../../assets/shared/icons/menu.svg'
import search from '../../../assets/shared/icons/search.svg'
import favorites from '../../../assets/shared/icons/favorites.svg'
import shopcar from '../../../assets/shared/icons/shopcar.svg'

function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="burger-menu">
          <img src={burger} alt="menu de navegação" height="22px" />
          <p> Menu </p>
        </div>
        <div className="features">
          <ul>

            <li>
              <img src={search} alt="Icone de busca" height="20px"/>
              <input type="text" placeholder="Busca" />
            </li>

            <li>
              <img src={favorites} alt="Icone de meus favoritos" height="20px"/>
              <p> Meus favoritos </p>
            </li>

            <li>
              <img src={shopcar} alt="Icon de meu carrinho" height="20px"/>
              <p> Meu carrinho | R$ 0,00 </p>
            </li>

          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
