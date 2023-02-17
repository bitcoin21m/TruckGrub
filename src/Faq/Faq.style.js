import styled from "styled-components";
import { getStyles } from "../Helper/Helper";
import { FaChevronRight, FaChevronDown } from 'react-icons/fa';
import SectionWrapper from "../UIComponents/Section/Section";

const desktopStyles = {
    FaqWrapper: styled(SectionWrapper)`
        margin: 100px 50% 150px 50px;
        text-align: left;
        letter-spacing: 3px;
    `,
    FaqTitle: styled.h1`
        font-size: 50px;
        font-family: 'Raleway', sans-serif;
        margin-bottom: 100px;
    `,
    FaqList: styled.ul`
        list-style-type: none;
        padding-left: 0;
    `,
    FaqItem: styled.li`
        font-size: 25px;
        text-align: left;
        margin: 0 0 ${({ closed }) => closed ? '75px' : '50px'} 0;
    `,
    FaqItemAnswer: styled.p`
        font-size: 16px;
        margin-left: 75px;
        letter-spacing: 0.5px;
        margin-bottom: 0;
        color: #607d8b;
        cursor: initial;
        line-height: 30px;
    `,
    FaqTogglePlus: styled(FaChevronRight)`
        font-size: 35px;
        float: left;
        margin-right: 20px;
        cursor: pointer;
    `,
    FaqToggleMinus: styled(FaChevronDown)`
        font-size: 35px;
        float: left;
        margin-right: 20px;
        cursor: pointer;
    `,
};

const mobileStyles = {
    FaqWrapper: styled(SectionWrapper)`
        margin: 35% 30px;
        text-align: center;
        letter-spacing: 3px;
    `,
    FaqTitle: styled.h1`
        font-size: 35px;
        font-family: 'Raleway', sans-serif;
        margin-bottom: 40px;
    `,
    FaqList: styled.ul`
        list-style-type: none;
        padding-left: 0;
    `,
    FaqItem: styled.li`
        font-size: 18px;
        text-align: left;
        margin: 0 0 ${({ closed }) => closed ? '50px' : '25px'} 0;
    `,
    FaqItemAnswer: styled.p`
        font-size: 16px;
        margin-left: 0px;
        font-style: italic;
        letter-spacing: 0.5px;
        margin-bottom: 0;
        cursor: initial;
        line-height: 30px;
    `,
    FaqTogglePlus: styled(FaChevronRight)`
        font-size: 20px;
        float: left;
        margin-right: 20px;
        cursor: pointer;
    `,
    FaqToggleMinus: styled(FaChevronDown)`
        font-size: 20px;
        float: left;
        margin-right: 20px;
        cursor: pointer;
    `,
}

export default getStyles(desktopStyles, mobileStyles);