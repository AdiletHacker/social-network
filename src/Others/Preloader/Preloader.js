import React from 'react';
import s from './Preloaderr.module.scss';
import preloader from "../preloader.gif";



export const Preloader = () => {
    return <aside className={s.preloader}><img src={preloader} alt=""/></aside>
};

















