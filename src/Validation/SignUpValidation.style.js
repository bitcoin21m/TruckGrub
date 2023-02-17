import styled from "styled-components";
import { getStyles } from "../Helper/Helper";
import Section from "../UIComponents/Section/Section";

const desktopStyles = {
    ValidationWrapper: styled(Section)`
        margin: 150px auto;
        text-align: center;
        letter-spacing: 3px;
        width: 787px;
    `,
    ValidationMessage: styled.p``,
};

const mobileStyles = {
    ValidationWrapper: styled(Section)`
        margin: 150px auto;
        text-align: center;
        letter-spacing: 3px;
        width: 787px;
    `,
    ValidationMessage: styled.p``,
}

export default getStyles(desktopStyles, mobileStyles);