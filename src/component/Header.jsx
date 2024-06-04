import React from "react";


import logoSvg from '../image/logo.svg'
import iphone from '../image/iPhone.svg'
import chat from '../image/Chat.svg'
import { Link } from 'react-router-dom'
import style from '../scss/_header.scss'



const Header = () => {


  return (
    <div className="header">
      <div className="container">
        <Link to="/">
        <div className="header__logo">
          <img width="38" src={logoSvg} alt="Pizza logo" />
        </div>
        </Link>
        <ul className='menu'>
          <li>
            О нас
          </li>
          <li>
            Сервис
            </li>
            <li>
            Проекты
            </li>
            <li>
            Новости
            </li>
        </ul>
        <ul className='call'>
          <li>
            <img width="38" src={iphone} alt="phone" /> 
              <div className="header_info">
              <b>Позвонить нам</b>
              <b>+79316117276</b>
              </div>
          </li>
          <li>
            <img width="38" src={chat} alt="phone" /> 
            <div className="header_info">
            <b>Написать нам</b>
            <b>specstroy@mail.com</b>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header