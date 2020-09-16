import React from 'react'
import {header, container, avatar, name} from './header.module.scss'

function Header({content}) {

  return (
    <div className={header}>
      <div className={container}>
        <img className={avatar} src={content.thumb} alt="avatar" />
        <h2 className={name}> {content.name} </h2>
      </div>
    </div>
  );
}

export default Header;
