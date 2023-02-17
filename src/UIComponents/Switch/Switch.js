import styles from './Switch.style';
import React, { useState } from 'react';

const Switch = ({ switchText }) => {
    const [switchOn, setSwitchOn] = useState(false);

    return (
        <styles.SwitchWrapper onClick={() => setSwitchOn(!switchOn)} >
            <styles.SwitchContainer isOn={switchOn}>
                <styles.SwitchButton isOn={switchOn}/>
            </styles.SwitchContainer>
            <styles.SwitchLabel>{switchText}</styles.SwitchLabel>
        </styles.SwitchWrapper>
    );
};

export default Switch;