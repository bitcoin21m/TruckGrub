import { isNullEmptyUndefined } from "./Helper";

export const validateEmail = (email) => String(email)
        .toLowerCase()
        .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

const validatePassword = (password) => {
    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const regex = new RegExp(pattern);
    return regex.test(password);
}

export const signUpLoginFormVal = (obj) => {
    console.log(obj)
    let result = true;
    for (let i = 0; i < Object.values(obj).length; i++) {
        let item = Object.values(obj)[i];
        if (item.value?.length === 0) {
            result = false;
            break;
        } else if (item.type === 'email') {
            result = validateEmail(item.value);
            if (!result) break;
        } else if(item.type === 'password') {
            console.log(item)
            if(item.ignoreVal) {
                return true;
            } else {
                result = validatePassword(item.value);
            }
        }
    };

    return result;
};