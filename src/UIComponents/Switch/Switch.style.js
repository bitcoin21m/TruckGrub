import styled from "styled-components";
import { getStyles } from "../../Helper/Helper";

const desktopStyles = {
    SwitchWrapper: styled.div`
        cursor: pointer;
        margin: 0 0 50px 0;
        width: fit-content;
    `,
    SwitchContainer: styled.div`
        width: 45px;
        height: 10px;
        margin-right: 15px;
        border-radius: 50px;
        background-color: ${({ isOn }) => isOn ? '#589fc1' : '#e6e6e6'};
        position: relative;
        display: inline-block;
    `,
    SwitchButton: styled.div`
        position: absolute;
        height: 20px;
        width: 20px;
        top: -5px;
        left: ${({ isOn }) => isOn ? '60%' : '0'};
        border-radius: 100px;
        background-color: #607d8b;
        cursor: pointer;
    `,
    SwitchLabel: styled.p`
        display: inline;
        font-size: 18px;
        letter-spacing: 1.5px;
    `,
};

const mobileStyles = {

}

export default getStyles(desktopStyles, mobileStyles);