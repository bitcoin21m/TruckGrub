import styled from "styled-components";
import { FaPizzaSlice } from 'react-icons/fa';
import { getStyles } from "../../Helper/Helper";

const desktopStyles = {
    SectionWrapper: styled.div``,
    LoadingIcon: styled(FaPizzaSlice)`
        animation: spin 1s linear infinite;
        position: absolute;
        top: 45%;
        left: 45%;
        font-size: 100px;
    `,
};

const mobileStyles = {
    SectionWrapper: styled.div``,
    LoadingIcon: styled(FaPizzaSlice)`
        animation: spin 1s linear infinite;
        position: absolute;
        top: 45%;
        font-size: 50px;
        left: 45%;
    `,
}

export default getStyles(desktopStyles, mobileStyles);