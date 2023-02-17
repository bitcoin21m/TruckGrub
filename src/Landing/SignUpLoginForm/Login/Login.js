import { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { signUpLoginFormVal } from "../../../Helper/FormValidation";
import Button, { ButtonWrapper } from "../../../UIComponents/Button/Button";
import Input, { InputWrapper } from "../../../UIComponents/Input/Input";
import { loginFormData } from "../../../Helper/BaseData";
import { inputHandler } from "../../../Helper/Helper";
import { APIRouter } from "../../../Data/Middleware";
import { tgc } from "../../../App";
import styles from './Login.style';

const Login = ({ setIsExistingUser, submit, loginError, setLoginError }) => {
    //states
    const [loginInfo, setLoginInfo] = useState(loginFormData);
    const [formValidated, setFormValidated] = useState(false);

    //context
    const { setLoader, loader } = useContext(tgc);

    const resendEmail = (e) => {
        console.log("event: ", e.target)
        const target = e.target;
        //before resending verification, make sure email and password are still validated
        APIRouter(setLoader, loader, 'resendVerification', loginInfo, target).then(res => {
            setLoginError(null);
        });
    };

    useEffect(() => {
        setFormValidated(signUpLoginFormVal(loginInfo));
    }, [loginInfo]);

    return (
        <styles.LoginForm onSubmit={(e) => e.preventDefault()}>
            <styles.LoginFormInputWrapper>
                <styles.LoginInput fieldName={'emailAddress'} placeholder={'Email'} type={'text'} value={loginInfo.emailAddress.value} onChange={(e) => inputHandler(e, 'emailAddress', loginInfo, setLoginInfo)} />
                <styles.LoginInput fieldName={'password'} placeholder={'Password'} type={'password'} value={loginInfo.password.value} onChange={(e) => inputHandler(e, 'password', loginInfo, setLoginInfo)} />
                <styles.LoginButtonWrapper>
                    <styles.LoginButton isDisabled={!formValidated} className={'login_button'} fieldName={'login_submitBtn'} color={'#444'} name={'Login'} onClick={formValidated ? ((e) => submit(e, loginInfo)) : () => {}} type={'submit'} />
                </styles.LoginButtonWrapper>
            </styles.LoginFormInputWrapper>
            { loginError && <styles.LoginError>{loginError}</styles.LoginError> }
            { loginError === 'Please verify your account!' && <styles.ResendEmailButton className={'resend_button'} fieldName={'resend_button'} color={'#607d8b'} name={'Resend Verification Email'} onClick={(e) => resendEmail(e)} type={'button'} /> }
            <styles.LoginMessage onClick={() => setIsExistingUser(false)}>New to TruckGrub?</styles.LoginMessage>
        </styles.LoginForm>
    );
};

export default Login;