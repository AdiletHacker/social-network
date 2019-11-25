import React, { useEffect, useState } from 'react';
import s from './Selected.module.scss';
import {connect} from "react-redux";
import userIcon from "../../../user-icon.png";


const Selected = (props) => {
    const info = React.createRef();
    const [ message, setMessage ] = useState([]);

    const setInfo = () => {
        if (!info.current.value) return;
        setMessage([ ...message, info.current.value ]);
        info.current.value = '';
    };

    return <div className={s.wrapper}>
        <div className={s.profileBlock}>
            <img src={ props.small || userIcon} alt=""/>
            <div>{props.fullName || "Не авторизован!"}</div>
        </div>

        <div className={s.messageBlock}>
            {message.map(message => <div className={s.message}>{ message }</div>)}
            <textarea autoFocus={true} ref={info}>{}</textarea>
            <div><button onClick={setInfo}>Send</button></div>
        </div>
    </div>
};

const mapStateToProps = (state) => ({
    fullName: state.auth.fullName,
    small: state.auth.small,
    id: state.auth.id,
});

export default connect(mapStateToProps, null)(Selected);
