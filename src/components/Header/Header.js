import React from 'react';
import s from './Header.module.scss';
import homeIcon from '../../Others/Icons/home-icon.png'
import basketIcon from '../../Others/Icons/basket-icon.png'
import optionsIcon from '../../Others/Icons/options-icon.png'
import exitIcon from '../../Others/Icons/exit-icon.png'
import mainLogo from '../../Others/Icons/main-logo.png'
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {logout} from "../../Store/auth";

const Header = (props) => {

    const logout = () => {
        const exit = window.confirm("Do you really want to exit ?");
        return exit ? props.logout() : undefined;
    };

    return <div className={s.wrapper}>

        <div className={s.logoDiv}><img src={mainLogo} alt=""/></div>

        <nav>
            <div><img src={homeIcon} alt=""/>На главную</div>
            <NavLink to='/basket'><img src={basketIcon} alt=""/>Корзина</NavLink>
            <NavLink to='/options'><img src={optionsIcon} alt=""/>Настройки</NavLink>
            <NavLink to='/login' onDoubleClick={logout} title='If you want to exit click double time!'>
                <img src={exitIcon} alt=""/>{ props.isAuth ? props.login : 'Войти' }</NavLink>
        </nav>

    </div>
};

const mapStateToProps = state => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});


export default connect(mapStateToProps, { logout })(Header);
