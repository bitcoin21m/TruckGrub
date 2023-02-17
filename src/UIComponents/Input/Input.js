import styled from "styled-components";

export const InputWrapper = styled.div``;
const InputComponent = styled.input`
    padding: 10px;
    font-size: 14px;
    letter-spacing: 1px;
    border-radius: 5px;
    border: 1px solid #e2e2e2;
    outline: 0;
    margin: 5px 0;
    &:focus {
        border: 1px solid #607d8b;
    };
`;

const Input = ({ type, value, className, fieldName, placeholder, onChange }) => {
    return (
        <InputComponent
            className={className}
            type={type} 
            placeholder={placeholder}
            value={value}
            fieldName={fieldName}
            onChange={onChange}
        />
    );
};

export default Input;