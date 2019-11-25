import React, { useState } from 'react';
import s from './PersonalAcc.module.scss';
import {connect} from "react-redux";
import myPhoto from "../../../my-official-photo.jpg"


let PersonalAcc = (props) => {
    return <div className={s.wrapper}>

        <img src={myPhoto} alt=""/>
        <div>{props.id}</div>
        <div>{props.login}</div>
        <div>{props.email}</div>

    </div>
};

const mapStateToProps = (state) => ({
    login: state.auth.login,
    id: state.auth.id,
    email: state.auth.email,
});

export default connect(mapStateToProps, null )(PersonalAcc);
