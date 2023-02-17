import { useContext, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { tgc } from "../App";
import { APIRouter } from "../Data/Middleware";
import styles from './SignUpValidation.style';

const SignUpValidation = () => {
    //states
    const [searchParams, setSearchParams] = useSearchParams();
    const [validated, setValidated] = useState(false);
    const navigate = useNavigate();

    //context
    const { setLoader, loader } = useContext(tgc);

    useEffect(() => {
        const token = searchParams.get("token")?.toString();
        if(token) {
            console.log(token)
            //call the validation api and pass the token through
            APIRouter(setLoader, loader, 'validation', { token }, null).then(res => {
                const valid = res.data.indexOf('validated') > -1;
                setValidated(valid);
                setTimeout(() => {
                    if(valid) {
                        //show validation message for a sec and then navigate to profile
                        localStorage.setItem('user', JSON.stringify({
                            id: res.data.split("_")[1],
                            timestamp: Date.now()
                        }));
                        navigate("/profile");
                    }
                }, 5000)
            });
        }
    }, []);

    return (
        <styles.ValidationWrapper loader={loader}>
            { validated && <styles.ValidationMessage>You're account has been successfully validated!<br/><br/>You'll be directed to your profile page now...</styles.ValidationMessage> }
        </styles.ValidationWrapper>
    );
};

export default SignUpValidation;