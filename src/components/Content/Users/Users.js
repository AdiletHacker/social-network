import React, { useEffect, useState } from 'react';
import s from './Users.module.scss';
import {connect} from "react-redux";
import {getCurrentPage, getUsers, setFriends} from "../../../Store/users";
import userIcon from "../../../user-icon.png"
import {getProfile} from "../../../Store/auth";
import {Preloader} from "../../../Others/Preloader/Preloader";


let Users = (props) => {

    useEffect(() => {
        props.getUsers(props.currentPage, props.pageSize);
    }, []);

    const pagesCount = Math.ceil(props.totalCount / props.pageSize);
    const pages = [];
    for (let i = 1; i < pagesCount; i++) {
        pages.push(i)
    }

    const userClick = id => {
        props.getProfile(id);
        return props.history.push(`/selected`);
    };

    return <div className={s.wrapper}>
        { props.isLoading ? <Preloader /> : undefined }

        { pages.map(page => <button id={s.pagButton} onClick={() => props.getCurrentPage(page)} className=
            {props.currentPage === page && s.currentPage} key={page}>{page}</button>) }

        <main>{ props.users.map(user => <div className={s.userBlock} key={user.id}>
            <div onClick={() => userClick(user.id)}><img src={ user.photos.small || userIcon } alt=""/></div>
            <div>{ user.id }</div>
            <div>{ user.name }</div>
            <div>{user.status || "Нет статуса" }</div>
            <button onClick={() => props.setFriends(user)}>В друзья</button>
        </div>) }</main>

    </div>
};

const mapStateToProps = (state) => ({
    users: state.users.users,
    totalCount: state.users.totalCount,
    currentPage: state.users.currentPage,
    pageSize: state.users.pageSize,
    isLoading: state.users.isLoading
});

export default connect(mapStateToProps, { getUsers, getCurrentPage, getProfile, setFriends } )(Users);
