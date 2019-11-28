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
            <NavLink to={'/main-info'} activeClassName={s.activeLink}><div><img src={homeIcon} alt=""/>Личный кабинет</div></NavLink>
            <NavLink to={'/users'} activeClassName={s.activeLink}><div><img src={usersIcon} alt=""/>Пользователи</div></NavLink>
            <NavLink to={'/selected'} activeClassName={s.activeLink}><div><img src={trelloIcon} alt=""/>Пользователь</div></NavLink>
            <NavLink to={'/store'} activeClassName={s.activeLink}><div><img src={bagIcon} alt=""/>Магазин</div></NavLink>
            <NavLink to={'/friends'} activeClassName={s.activeLink}><div><img src={ordersIcon} alt=""/>Друзья</div></NavLink>
            <NavLink to={'/documentation'} activeClassName={s.activeLink}><div><img src={bookIcon} alt=""/>Документация</div></NavLink>
            <NavLink to={'/notifications'} activeClassName={s.activeLink}><div><img src={bellIcon} alt=""/>Уведомления</div></NavLink>
        </nav>

   </div>
}

export default Navbar;
