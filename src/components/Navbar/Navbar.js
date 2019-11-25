import React from 'react';
import s from './Navbar.module.scss';
import {NavLink} from "react-router-dom";
import homeIcon from '../../Others/Icons/home-icon.png'
import usersIcon from '../../Others/Icons/users-icon.png'
import trelloIcon from '../../Others/Icons/trello-icon.png'
import bagIcon from '../../Others/Icons/bag-icon.png'
import ordersIcon from '../../Others/Icons/orders-icon.png'
import bookIcon from '../../Others/Icons/book-icon.png'
import bellIcon from '../../Others/Icons/bell-icon.png'

function Navbar() {
    return <div className={s.wrapper}>

        <nav>
            <NavLink to={'/main-info'}><div><img src={homeIcon} alt=""/>Личный кабинет</div></NavLink>
            <NavLink to={'/users'}><div><img src={usersIcon} alt=""/>Пользователи</div></NavLink>
            <NavLink to={'/selected'}><div><img src={trelloIcon} alt=""/>Пользователь</div></NavLink>
            <NavLink to={'/store'}><div><img src={bagIcon} alt=""/>Магазин</div></NavLink>
            <NavLink to={'/friends'}><div><img src={ordersIcon} alt=""/>Друзья</div></NavLink>
            <NavLink to={'/documentation'}><div><img src={bookIcon} alt=""/>Документация</div></NavLink>
            <NavLink to={'/notifications'}><div><img src={bellIcon} alt=""/>Уведомления</div></NavLink>
        </nav>

   </div>
}

export default Navbar;
