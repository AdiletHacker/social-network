import React  from 'react';
import s from './Login.module.scss';
import {connect} from "react-redux";
import {Field, reduxForm} from "redux-form";
import {login} from "../../../Store/auth";


const require = value => !value ? "Field is required!" : undefined;
const minLength = min => value => value && value.length < min ? `Must be at least ${min}!` : undefined;
const minLength3 = minLength(3);

const formComponent = ({ input, meta: { touched, error }, ...rest }) => {
    return <div>
        <input { ...input } { ...rest } />
        { touched && error && <div>{ error }</div> }
    </div>
};

const LoginForm = ({ handleSubmit, pristine, reset, error, ...rest }) => {
    return <form onSubmit={handleSubmit}>
        <Field name='email' type='text' component={formComponent} validate={[ require, minLength3 ]} />
        <Field name='password' type='password' component={formComponent} validate={[ require, minLength3 ]} />
        <div id={s.checkbox}><Field name='rememberMe' type='checkbox' component={formComponent} /><h4>remember me</h4></div>
        { error && <div id={s.stopSubmit}>{error}</div> }
        <button disabled={pristine}>Submit</button>
        <button disabled={pristine} onClick={reset}>Reset</button>

    </form>
};

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

let Login = (props) => {
    const submit = data => {
        const { email, password, rememberMe } = data;
        props.login(email, password, rememberMe);
    };
    return <div className={s.wrapper}>
        <LoginReduxForm onSubmit={submit} />
    </div>
};

const mapStateToProps = (state) => ({
    selectedProducts: state.store.selectedProducts
});

export default connect(mapStateToProps, { login })(Login);
