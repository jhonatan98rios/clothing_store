import React from 'react'
import { Link } from 'react-router-dom';
import {container, breadcrumb} from './breadcrumb.module.scss'

function Breadcrumb({paths}) {

  /* const pathItens = [
    'Home',
    content.store,
    content.name
  ] */

  return (
    <div className={container}>
      <Link to="/" className="m-r-32"> Voltar </Link>
      
      <ul className={breadcrumb}>

        {paths.map((path => (
          <li>
            <p> {path} </p>
          </li>
        )))}

      </ul>
    </div>
  );
}

export default Breadcrumb;
