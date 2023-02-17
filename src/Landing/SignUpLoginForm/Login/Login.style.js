import styled from "styled-components";
import { getStyles } from "../../../Helper/Helper";
import Button, { ButtonWrapper } from "../../../UIComponents/Button/Button";
import Input, { InputWrapper } from "../../../UIComponents/Input/Input";

const desktopStyles = {
    LoginForm: styled.form``,
    LoginFormInputWrapper: styled(InputWrapper)``,
    LoginButtonWrapper: styled(ButtonWrapper)`
        margin-top: 30px;
    `,
    LoginMessage: styled.p`
        color: #607d8b;
        cursor: pointer;
    `,
    LoginInput: styled(Input)`
        width: -webkit-fill-available;
    `,
    LoginButton: styled(Button)`
        width: -webkit-fill-available;
        ${({ isDisabled }) => isDisabled && 'display: none;'};
    `,
    LoginError: styled.p`
        font-size: 12.5px;
        color: #444;
    `,
    ResendEmailButton: styled(Button)``,
};

const mobileStyles = {
    LoginForm: styled.form``,
    LoginFormInputWrapper: styled(InputWrapper)``,
    LoginButtonWrapper: styled(ButtonWrapper)`
        margin-top: 30px;
    `,
    LoginMessage: styled.p`
        color: #607d8b;
        cursor: pointer;
        font-size: 20px;
    `,
    LoginInput: styled(Input)`
        width: -webkit-fill-available;
        font-size: 18px;
        margin: 8px 0;
        padding: 15px;
        letter-spacing: 1.5px;
        font-family: 'Heebo', sans-serif;
    `,
    LoginButton: styled(Button)`
        width: -webkit-fill-available;
        ${({ isDisabled }) => isDisabled && 'display: none;'};
    `,
    LoginError: styled.p`
        font-size: 12.5px;
        color: #444;
    `,
    ResendEmailButton: styled(Button)``,
}

export default getStyles(desktopStyles, mobileStyles);