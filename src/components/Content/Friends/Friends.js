import React, { useEffect, useState } from 'react';
import s from './Friends.module.scss';
import {connect} from "react-redux";
import userIcon from "../../../user-icon.png";
import {deleteFriend} from "../../../Store/users";

let Friends = (props) => {
    return <div className={s.wrapper}>
        { props.friends.map(user => <div className={s.userBlock} key={user.id}>

            <div><img src={ user.photos.small || userIcon } alt=""/></div>
            <div>{ user.id }</div>
            <div>{ user.name }</div>
            <div>{ user.status || "Нет статуса" }</div>
            <button onClick={() => props.deleteFriend(user)}>Удалить</button>

        </div>) }
    </div>
};

const mapStateToProps = (state) => ({
    friends: state.users.friends
});

export default connect(mapStateToProps, { deleteFriend })(Friends);
