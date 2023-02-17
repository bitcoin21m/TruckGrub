import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { logout } from '../Helper/Helper';
import IconMenu from './IconMenu';
import { useState } from 'react';
import styles from './Header.style';
import { mobileCheck } from '../Helper/Helper';
import { useRef } from 'react';

const Header = () => {
    // states
    const [profileToggle, setProfileToggle] = useState(false);
    const mobileNavWrapper = useRef();
    const navigate = useNavigate();

    // local variables
    const navBar = [
        {
            title: 'Home',
            url: JSON.parse(localStorage.getItem('user')) != null 
                ? '/profile'
                : '/',
        },
        {
            title: 'FAQ',
            url: '/faq',
        },
        {
            title: 'Help',
            url: '/help-center',
        },
        {
            title: 'Logout',
            url: () => logout().then(() => {
                navigate("/");
            }),
        },
    ];

    // mobile menu toggle handler
    const toggleMenu = () => {
        if(mobileNavWrapper.current.classList.value.indexOf('mobile-menu-active') > -1) {
            mobileNavWrapper.current.classList.remove('mobile-menu-active')
            mobileNavWrapper.current.classList.add('mobile-menu-inactive')
        } else {
            mobileNavWrapper.current.classList.remove('mobile-menu-inactive')
            mobileNavWrapper.current.classList.add('mobile-menu-active')
        }
    };

    // handler for the profile picture menu
    const menuHandler = (menuItem) => {
        switch(menuItem) {
            case "Profile":
                break;
            case "Settings":
                navigate('/settings')
                break;
            case "Logout":
                logout(navigate);
                break;
        }

        setProfileToggle(false);
    };

    const mobileNavMenuItemHandler = (nav) => {
        nav.title === 'Logout' ? nav.url() : navigate(nav.url);
        toggleMenu();
    }

    return (
        <styles.HeaderWrapper>
            { mobileCheck() && <styles.MobileNavWrapper ref={mobileNavWrapper}>
                <styles.MobileNavMenuHeaderWrapper>
                    <styles.MenuIcon />
                    <styles.HeaderTitle onClick={() => navigate(JSON.parse(localStorage.getItem('user')) != null ? '/profile' : '/')}>TruckGrub</styles.HeaderTitle>
                    <styles.MobileNavCloseButton onClick={toggleMenu} />
                </styles.MobileNavMenuHeaderWrapper>
                <styles.MobileNavMenuItemsWrapper>
                    <styles.MobileNavMenuItemsList>
                        {
                            navBar.map((nav, i) => {
                                if(localStorage.getItem('user') === null && nav.title === 'Logout') return;
                                return (
                                    <styles.MobileNavMenuItems
                                        key={i}
                                        onClick={() => mobileNavMenuItemHandler(nav)}
                                    >
                                        {nav.title}
                                    </styles.MobileNavMenuItems>
                                )
                            })
                        }
                    </styles.MobileNavMenuItemsList>
                </styles.MobileNavMenuItemsWrapper>
            </styles.MobileNavWrapper>
            }
            <styles.HeaderTitleWrapper>
                <styles.MenuIcon onClick={toggleMenu} />
                <styles.HeaderTitle onClick={() => navigate(JSON.parse(localStorage.getItem('user')) != null ? '/profile' : '/')}>TruckGrub</styles.HeaderTitle>
            </styles.HeaderTitleWrapper>
            { localStorage.getItem('user') &&
                <styles.ProfileWrapper>
                    <styles.ProfilePicture onClick={() => setProfileToggle(!profileToggle)} title={'Profile'} src={'/profile.jpeg'} />
                </styles.ProfileWrapper>
            }
            { !mobileCheck() && <styles.NavBarWrapper>
                <styles.NavBarList>
                    {
                        navBar.map((nav, i) => {
                            if(nav.title === 'Logout') return;
                            return (<styles.Nav
                                key={i}
                                onClick={() => nav.title === 'Logout' ? nav.url() : navigate(nav.url)}
                            >
                                {nav.title}
                            </styles.Nav>
                            )
                        })
                    }
                </styles.NavBarList>
            </styles.NavBarWrapper>
            }
            { profileToggle && <IconMenu menuHandler={menuHandler} /> }
        </styles.HeaderWrapper>
    );
};

export default Header;