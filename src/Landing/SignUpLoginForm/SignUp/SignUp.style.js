import styled from "styled-components";
import { getStyles } from "../../../Helper/Helper";
import Button, { ButtonWrapper } from "../../../UIComponents/Button/Button";
import Input, { InputWrapper } from "../../../UIComponents/Input/Input";

const desktopStyles = {
    SignUpForm: styled.form``,
    SignUpFormInputWrapper: styled(InputWrapper)``,
    SignUpButtonWrapper: styled(ButtonWrapper)`
        margin-top: 15px
    `,
    SignUpError: styled.p`
        font-size: 12.5px;
        color: #444;
    `,
    SignUpMessage: styled.p`
        color: #607d8b;
        cursor: pointer;
    `,
    SignUpInput: styled(Input)`
        width: -webkit-fill-available;
    `,
    SignUpButton: styled(Button)`
        width: -webkit-fill-available;
        ${({ isDisabled }) => isDisabled && 'display: none;'};
    `,
    SignUpSuccess: styled.p`
        font-weight: bold;
    `,
    SignUpPasswordHint: styled.p`
        font-size: 9px;
    `,
};

const mobileStyles = {
    SignUpForm: styled.form``,
    SignUpFormInputWrapper: styled(InputWrapper)``,
    SignUpButtonWrapper: styled(ButtonWrapper)`
        margin-top: 15px
    `,
    SignUpError: styled.p`
        font-size: 12.5px;
        color: #444;
    `,
    SignUpMessage: styled.p`
        color: #607d8b;
        cursor: pointer;
        font-size: 20px;
    `,
    SignUpInput: styled(Input)`
        width: -webkit-fill-available;
        font-size: 18px;
        margin: 8px 0;
        letter-spacing: 1.5px;
        padding: 15px;
        font-family: 'Heebo', sans-serif;
    `,
    SignUpButton: styled(Button)`
        width: -webkit-fill-available;
        ${({ isDisabled }) => isDisabled && 'display: none;'};
    `,
    SignUpSuccess: styled.p`
        font-weight: bold;
    `,
    SignUpPasswordHint: styled.p`
        font-size: 14px;
    `,
}

export default getStyles(desktopStyles, mobileStyles);