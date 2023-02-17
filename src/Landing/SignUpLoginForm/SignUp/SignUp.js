import { useEffect, useState } from "react";
import styled from "styled-components";
import { signUpLoginFormVal } from "../../../Helper/FormValidation";
import Button, { ButtonWrapper } from '../../../UIComponents/Button/Button';
import Input, { InputWrapper } from "../../../UIComponents/Input/Input";
import { signUpFormData } from "../../../Helper/BaseData";
import { inputHandler } from "../../../Helper/Helper";
import styles from './SignUp.style';

const SignUp = ({ setIsExistingUser, submit, userFound, signUpSuccess }) => {
    //states
    const [signUpInfo, setSignUpInfo] = useState(signUpFormData);
    const [formValidated, setFormValidated] = useState(false);

    useEffect(() => {
        setFormValidated(signUpLoginFormVal(signUpInfo));
    }, [signUpInfo]);

    return (
        <styles.SignUpForm onSubmit={(e) => e.preventDefault()}>
            { !signUpSuccess && <styles.SignUpFormInputWrapper>
                    <styles.SignUpInput fieldName={'firstName'} placeholder={'First name'} type={'text'} value={signUpInfo.firstName.value} onChange={(e) => inputHandler(e, 'firstName', signUpInfo, setSignUpInfo)} />
                    <styles.SignUpInput fieldName={'lastName'} placeholder={'Last name'} type={'text'} value={signUpInfo.lastName.value} onChange={(e) => inputHandler(e, 'lastName', signUpInfo, setSignUpInfo)} />
                    <styles.SignUpInput fieldName={'emailAddress'} placeholder={'Email'} type={'email'} value={signUpInfo.emailAddress.value} onChange={(e) => inputHandler(e, 'emailAddress', signUpInfo, setSignUpInfo)} />
                    <styles.SignUpInput fieldName={'password'} placeholder={'Password'} type={'password'} value={signUpInfo.password.value} onChange={(e) => inputHandler(e, 'password', signUpInfo, setSignUpInfo)} />
                        { (signUpInfo.password.value.length > 0 && !formValidated) && <styles.SignUpPasswordHint>Password must be at least 8 characters long with at least one capital letter, one lowercase letter, a special symbol and a number</styles.SignUpPasswordHint> }
                    <styles.SignUpButtonWrapper>
                        <styles.SignUpButton isDisabled={!formValidated} className={'su_button'} fieldName={'signUp_submitBtn'} color={'#444'} name={'Sign Up'} onClick={formValidated ? ((e) => submit(e, signUpInfo)) : () => {}} type={'submit'} />
                    </styles.SignUpButtonWrapper>
                </styles.SignUpFormInputWrapper>
            }
            { userFound && <styles.SignUpError>There's already an account associated with this email</styles.SignUpError> }
            { signUpSuccess && <styles.SignUpSuccess>Please check your email to complete the sign-up process</styles.SignUpSuccess> }
            { !signUpSuccess && <styles.SignUpMessage onClick={() => setIsExistingUser(true)}>Already have an account?</styles.SignUpMessage> }
        </styles.SignUpForm>
    );
};

export default SignUp;