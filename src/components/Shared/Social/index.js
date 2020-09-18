import React from 'react';
import { social, iconList, icon } from './social.module.scss'
import facebook from '../../../assets/shared/social/facebook.svg'
import instagram from '../../../assets/shared/social/instagram.svg'
import linkedin from '../../../assets/shared/social/linkedin.svg'
import pinterest from '../../../assets/shared/social/pinterest.svg'
import whatsapp from '../../../assets/shared/social/whatsapp.svg'

function Social() {

  const socialList = [
    whatsapp,
    pinterest,
    instagram,
    facebook,
    linkedin,
  ]

  return (
    <div className={`${social} is-column`}>
      <p> Compartilhar </p>
      <ul>
        <li className={`${iconList} is-row`}>
          {
            socialList.map(social => (
              <img className={icon} src={social} alt=""/>
            ))
          }
        </li>
      </ul>
    </div>
  );
}

export default Social;
