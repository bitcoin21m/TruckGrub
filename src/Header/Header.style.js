import styled from "styled-components";
import { FaHamburger, FaAngleLeft } from 'react-icons/fa';
import { getStyles } from '../Helper/Helper';

//
// desktop styles
//
const desktopStyles = {
    HeaderWrapper: styled.div`
        width: 100vw;
        background-color: white;
        color: #444;
        position: absolute;
        top: 0;
        left: 0;
        height: auto;
        border-bottom: 2px solid #e1e1e1;
        padding: 10px 15px;
        z-index: 2;
    `,
    HeaderTitleWrapper: styled.div`
        cursor: pointer;
        width: fit-content;
    `,
    MenuIcon: styled(FaHamburger)`
        color: #607d8b;
        font-size: 35px;
        float: left;
    `,
    HeaderTitle: styled.p`
        font-size: 20px;
        letter-spacing: 1.5px;
        font-family: 'Heebo';
        color: #444;
        left: 60px;
        float: left;
        margin: 5px 0 0 10px;
    `,
    ProfileWrapper: styled.div`
        float: right;
        margin-right: 35px;
        margin-top: -5px;
    `,
    ProfilePicture: styled.img`
        border-radius: 100px;
        width: 40px;
        height: 40px;
        margin-top: 5px;
        margin-bottom: -5px;
        cursor: pointer;
    `,
    NavBarWrapper: styled.div`
        float: right;
        margin-right: 25px;
    `,
        NavBarList: styled.ul`
        list-style-type: none;
        display: inline-flex;
        margin-bottom: 0;
    `,
    Nav: styled.li`
        margin-right: 25px;
        margin-top: -7px;
        &:hover {
            color: #607d8b;
            cursor: pointer;
        };
    `,
};

//
// mobile styles
//
const mobileStyles = {
    HeaderWrapper: styled.div`
        width: 100vw;
        background-color: white;
        color: #444;
        position: fixed;
        top: 0;
        left: 0;
        height: auto;
        border-bottom: 2px solid #e1e1e1;
        padding: 10px 15px;
        z-index: 2;
    `,
    HeaderTitleWrapper: styled.div`
        cursor: pointer;
        width: fit-content;
    `,
    MenuIcon: styled(FaHamburger)`
        color: #607d8b;
        font-size: 35px;
        float: left;
    `,
    HeaderTitle: styled.p`
        font-size: 20px;
        letter-spacing: 1.5px;
        font-family: 'Heebo';
        color: #444;
        left: 60px;
        float: left;
        margin: 5px 0 0 10px;
    `,
    ProfileWrapper: styled.div`
        float: right;
        margin-right: 35px;
        margin-top: -5px;
    `,
    ProfilePicture: styled.img`
        border-radius: 100px;
        width: 40px;
        height: 40px;
        margin-top: 5px;
        margin-bottom: -5px;
        cursor: pointer;
    `,
    MobileNavWrapper: styled.div`
        height: 100vh;
        background-color: #fff;
        width: 98.5%;
        position: absolute;
        z-index: 99999;
        left: -100%;
    `,
    MobileNavCloseButton: styled(FaAngleLeft)`
        font-size: 35px;
        float: right;
        margin: 0 30px;
    `,
    MobileNavMenuHeaderWrapper: styled.div`
        padding: 5px 20px;
        border-bottom: 2px solid #e1e1e1;
        height: 45px;
    `,
    MobileNavMenuItemsWrapper: styled.div``,
    MobileNavMenuItemsList: styled.ul`
        list-style-type: none;
        margin: 0;
        padding: 0;
    `,
    MobileNavMenuItems: styled.li`
        padding: 25px;
        font-size: 18px;
        border-bottom: 1px solid #e8e8e8;
        &:active {
            background-color: #e8e8e8;
        };
    `,
}

// grab the appropriate stylesheet based on if mobile or not
export default getStyles(desktopStyles, mobileStyles);