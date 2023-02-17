import styled from "styled-components";
import { getStyles } from "../../../Helper/Helper";

const desktopStyles = {
    SignUpLoginWrapper: styled.div`
        padding: 15px;
        border-radius: 5px;
        margin: 0 auto;
        width: 60%;
        height: 100px;
    `,
};

const mobileStyles = {
    SignUpLoginWrapper: styled.div`
        padding: 5px;
        border-radius: 5px;
        margin: 0 auto;
        width: 80%;
        height: 100px;
    `,
}

export default getStyles(desktopStyles, mobileStyles);