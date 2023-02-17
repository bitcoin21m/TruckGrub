import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { tgc } from "../../../App";
import { API, APIRouter } from "../../../Data/Middleware";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import { useNavigate } from 'react-router-dom';
import { isNullEmptyUndefined } from "../../../Helper/Helper";
import styles from './SignUpLogin.style';

const SignUpLogin = () => {
    //states
    const [isExistingUser, setIsExistingUser] = useState(false);
    const [userFound, setUserFound] = useState(false);
    const [loginError, setLoginError] = useState(null);
    const [signUpSuccess, setSignUpSuccess] = useState(false);
    const navigate = useNavigate();

    //context
    const { loader, setLoader } = useContext(tgc);

    //submit sign-up and login handler
    const submitHandler = async (e, data) => {
        data.type = 'Foodie';
        const target = e.target;

        APIRouter(setLoader, loader, isExistingUser ? 'login' : 'signUp', data, target).then(res => {
            if(!isExistingUser) {
                setUserFound(res.data === 1);
                setSignUpSuccess(res.data !== 1);
            }
            else {
                if(res.data !== 'failed' && res.data !== 'failed 1' && res.data !== 'failed 2' && res.data !== 'not validated') {
                    if(!isNullEmptyUndefined(res.data)) {
                        localStorage.setItem('user', JSON.stringify({
                            id: res.data,
                            timestamp: Date.now()
                        }));
                        navigate("/profile");
                    } else {
                        setLoginError('There was an issue with loggin in :(');
                    }
                } else {
                    if(res.data === 'not validated') {
                        setLoginError('Please verify your account!');
                    } else {
                        setLoginError('Cannot find email and/or password');
                    }
                }
            }
        });

        e.preventDefault();
    };

    useEffect(() => {
        setUserFound(false);
    }, [isExistingUser]);

    return (
        <styles.SignUpLoginWrapper>
            { !isExistingUser 
                ? <SignUp setIsExistingUser={setIsExistingUser} userFound={userFound} signUpSuccess={signUpSuccess} submit={submitHandler} /> 
                : <Login setIsExistingUser={setIsExistingUser} loginError={loginError} setLoginError={setLoginError} submit={submitHandler} />
            }
        </styles.SignUpLoginWrapper>
    );
};

export default SignUpLogin;