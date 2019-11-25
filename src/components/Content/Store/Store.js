import React, { useEffect, useState } from 'react';
import s from './Store.module.scss';
import {connect} from "react-redux";
import {setToBasket} from "../../../Store/store";


let Store = (props) => {

    let [products] = useState([ ...props.storeData ]);
    products.splice(25);

    return <div className={s.wrapper}>
        <aside>Интернет-магазин для партнеров</aside>

        <main>{products.map(item => <div key={item.id}>

                <img src={item.thumbnailUrl} alt=""/>
                <article>{item.id}</article>
                <button onClick={() => props.setToBasket(item)}>В корзину</button>

            </div>
        )}</main>

    </div>
};

const mapStateToProps = (state) => ({
    storeData: state.store.storeData,
});

export default connect(mapStateToProps, { setToBasket })(Store);
