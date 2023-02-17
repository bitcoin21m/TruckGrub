import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isNullEmptyUndefined } from "../Helper/Helper";


const Home = () => {
    const navigate = useNavigate();

    useEffect(() => {
        console.log(localStorage.getItem('user'))
        if(isNullEmptyUndefined(localStorage.getItem('user'))) {
            navigate('/');
        }
    }, [])

    return (
        <div style={{ marginTop: '15%' }}>
            You are logged in
        </div>
    );
};

export default Home;