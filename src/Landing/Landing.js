import SignUpLogin from './SignUpLoginForm/SignUpLogin/SignUpLogin';
import styles from './Landing.styles';
import { useEffect } from 'react';
import { mobileCheck } from '../Helper/Helper';

const Landing = () => {

    useEffect(() => {
        mobileCheck() ? document.querySelector("body").style.overflow = "auto" : document.querySelector("body").style.overflow = "hidden";
    }, [])

    return (
        <styles.LandingWrapper>
            <styles.LandingTitleWrapper>
                <styles.LandingTitle>TruckGrub</styles.LandingTitle>
                <styles.LandingIcon />
                <styles.LandingSubTitle>where food trucks and food lovers meet</styles.LandingSubTitle>
                <SignUpLogin />
            </styles.LandingTitleWrapper>
            <styles.LandingImage src={'landing-image.jpg'} />
        </styles.LandingWrapper>
    );
};

export default Landing;