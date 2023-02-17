import styled from "styled-components";
import { FaSlidersH, FaUser, FaArrowCircleRight } from 'react-icons/fa';
import { logout } from "../Helper/Helper";
import { useNavigate } from "react-router-dom";

const IconMenuWrapper = styled.div`
    background-color: #fff;
    height: auto;
    position: absolute;
    max-width: 150px;
    top: 60px;
    right: 15px;
    z-index: 999;
    margin: 0 15px;
    border-top: 1px solid #e8e8e8;
    width: -webkit-fill-available;
    border: 1px solid #e8e8e8;
`;
const MenuItemWrapper = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 1px solid #e8e8e8;
    padding: 0 15px;
    &:hover {
        background-color: #f1f0f0;
        cursor: pointer;
    };
`;
const SettingsWrapper = styled(MenuItemWrapper)``;
const LogoutWrapper = styled(MenuItemWrapper)``;
const Icon_Settings = styled(FaSlidersH)`
    margin-right: 10px;
`;
const SettingsText = styled.p``;
const Icon_Logout = styled(FaArrowCircleRight)`
    margin-right: 10px;
`;
const LogoutText = styled.p``;
const ProfileWrapper = styled(MenuItemWrapper)``;
const Icon_Profile = styled(FaUser)`
    margin-right: 10px;
`;
const ProfileText = styled.p``;

const IconMenu = ({ menuHandler }) => {
    return (
        <IconMenuWrapper>
            <ProfileWrapper onClick={() => menuHandler('Profile')}>
                <Icon_Profile /><ProfileText>Profile</ProfileText>
            </ProfileWrapper>
            <SettingsWrapper onClick={() => menuHandler('Settings')}>
                <Icon_Settings /><SettingsText>Settings</SettingsText>
            </SettingsWrapper>
            <LogoutWrapper onClick={() => menuHandler('Logout')}>
                <Icon_Logout /><LogoutText>Logout</LogoutText>
            </LogoutWrapper>
        </IconMenuWrapper>
    );
};

export default IconMenu;