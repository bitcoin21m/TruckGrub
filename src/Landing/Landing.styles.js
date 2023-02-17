import styled from "styled-components";
import { getStyles } from "../Helper/Helper";
import { FaTruck } from 'react-icons/fa';

const desktopStyles = {
    LandingWrapper: styled.div`
        display: grid;
        grid-template-columns: 500px 1200px;
        grid-template-areas: 'title image';
        overflow: hidden;
    `,
    LandingTitleWrapper: styled.div`
        grid-area: title;
        width: auto;
        position: relative;
        background-color: #fff;
        color: #444;
        display: grid;
        text-align: center;
        align-items: center;
        align-content: center;
        border-right: 2px solid #e1e1e1;
    `,
    LandingTitle: styled.p`
        font-size: 80px;
        font-family: 'Heebo', sans-serif;
        margin: 0 auto;
    `,
    LandingSubTitle: styled.p`
        margin-top: 0px;
        font-size: 14px;
        font-family: 'Heebo', sans-serif;
    `,
    LandingImage: styled.img`
        grid-area: image;
        width: fit-content;
        height: 100vh;
        overflow: hidden;
    `,
    LandingIcon: styled(FaTruck)`
        font-size: 40px;
        color: #607d8b;
        margin: 0 auto 20px auto;
    `,
};

const mobileStyles = {
    LandingWrapper: styled.div`
        margin-top: 35%;
    `,
    LandingTitleWrapper: styled.div`
        grid-area: title;
        width: auto;
        position: relative;
        background-color: #fff;
        color: #444;
        text-align: center;
        align-items: center;
        align-content: center;
    `,
    LandingTitle: styled.p`
        font-size: 52px;
        font-family: 'Heebo', sans-serif;
        margin: 0 auto;
    `,
    LandingSubTitle: styled.p`
        margin-top: 0px;
        font-size: 14px;
        font-family: 'Heebo', sans-serif;
    `,
    LandingImage: styled.img`
        grid-area: image;
        width: fit-content;
        height: 100vh;
        overflow: hidden;
        display: none;
    `,
    LandingIcon: styled(FaTruck)`
        font-size: 40px;
        margin-bottom: 10px;
        color: #607d8b;
    `,
}

export default getStyles(desktopStyles, mobileStyles);