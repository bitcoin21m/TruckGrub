import styled from "styled-components";
import { getStyles } from "../Helper/Helper";
import Button from "../UIComponents/Button/Button";
import Input from "../UIComponents/Input/Input";

const desktopStyles = {
    SettingsWrapper: styled.div`
        margin: 100px 50% 150px 50px;
        text-align: left;
        letter-spacing: 3px;
    `,
    SettingsTitle: styled.h1`
        font-size: 35px;
        font-family: 'Raleway', sans-serif;
        margin-bottom: 100px;
    `,
    ProfilePictureUploadWrapper: styled.div`
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        width: 35%;
        flex-wrap: wrap;
    `,
    ProfilePicture: styled.img`
        border-radius: 100px;
        width: 150px;
        background-color: #e8e8e8;
        height: 150px;
        border: 0;
        margin-bottom: 50px;
    `,
    SettingsSectionsWrapper: styled.div`
        display: flex;
        flex-direction: flex-start;
        justify-content: space-between;
    `,
    SettingsSwitchesWrapper: styled.div``,
    SettingsSectionsDivider: styled.div`
        width: 1px;
        background-color: #e8e8e8;
        height: auto;
    `,
    SettingsProfileWrapper: styled.div``,
};

const mobileStyles = {
    SettingsWrapper: styled.div`
        margin: 35% 30px;
        text-align: center;
        letter-spacing: 3px;
    `,
    SettingsTitle: styled.h1`
        font-size: 35px;
        font-family: 'Raleway', sans-serif;
        margin-bottom: 40px;
    `,
    ProfilePictureUploadWrapper: styled.div``,
    ProfilePicture: styled.img`
        border-radius: 100px;
        width: 100px;
        height: 100px;
    `,
    ProfilePictureUploadInput: styled(Input)``,
}

export default getStyles(desktopStyles, mobileStyles);