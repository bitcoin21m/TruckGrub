import styled from "styled-components";
import theme from "../../Helper/Theme";
import { FaPizzaSlice } from 'react-icons/fa';
import { useContext, useEffect, useRef } from "react";
import { tgc } from "../../App";

export const ButtonWrapper = styled.div``;
const Btn = styled.button`
    font-size: ${theme.fontSize.button};
    color: ${theme.colors.white};
    border-radius: 8px;
    border: 1px solid ${({color}) => color};
    &:hover {
        box-shadow: 0px 0px 10px ${({color}) => color};
    };
    background-color: ${({color}) => color};
    ${({ loading }) => loading && 'opacity: 0.3'};
    padding: 15px;
    cursor: ${({ loading }) => loading ? 'not-allow' : 'pointer'};
    ${({ position }) => position === 'fixed' ? 'position: fixed; right: 100px; top: 20px;' : 'position: inherit'};
    @media (max-width: 1199px) {
        ${({ position }) => position === 'fixed' && 'display: none;'};
    }
`;
const Spinner = styled(FaPizzaSlice)`
    animation: spin 1s linear infinite;
`;

const Button = ({ fieldName, type, className, name, position, color, onClick, onHover }) => {
    const { loader } = useContext(tgc);
    const btnRef = useRef();

    return (
        <Btn 
            className={className}
            type={type} 
            color={color}
            fieldName={fieldName} 
            value={name} 
            position={position} 
            onClick={onClick} 
            loading={loader.loading}
            disabled={loader.loading}
            ref={btnRef}
        >
           { loader.loading && loader.target === btnRef?.current ? <Spinner /> : name }
        </Btn>
    );
};

export default Button;