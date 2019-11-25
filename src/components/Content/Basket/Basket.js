import React, { useState } from 'react';
import s from './Basket.module.scss';
import {connect} from "react-redux";
import {getProducts} from "../../../Store/store";


let Basket = (props) => {

    let [products] = useState([...props.selectedProducts]);

    return <div className={s.wrapper}>
        <aside>Корзина товаров</aside>

        <main>{products.map(item => <div key={item.id}>

            <img src={item.thumbnailUrl} alt=""/>
            <article>{item.id}</article>

        </div>)}</main>

    </div>
};

const mapStateToProps = (state) => ({
    selectedProducts: state.store.selectedProducts
});

export default connect(mapStateToProps, { getProducts })(Basket);
