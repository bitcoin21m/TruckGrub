import * as constants from './Constants';

export const signUpFormData = () => {
    return {
        firstName: {
            type: 'text',
            value: constants.EMPTY_STRING,
        },
        lastName: {
            type: 'text',
            value: constants.EMPTY_STRING,
        },
        emailAddress: {
            type: 'email',
            value: constants.EMPTY_STRING,
        },
        password: {
            type: 'password',
            value: constants.EMPTY_STRING,
        },
    };
};

export const loginFormData = () => {
    return {
        emailAddress: {
            type: 'email',
            value: constants.EMPTY_STRING,
        },
        password: {
            type: 'password',
            value: constants.EMPTY_STRING,
            ignoreVal: true,
        },
    };
};

export const settings = () => {
    return [
        {
            setting: 'Hide profile from search',
            isOn: false,
        },
        {
            setting: 'Enable dark mode',
            isOn: false,
        },
        {
            setting: 'Turn on notifications',
            isOn: false,
        }
    ];
}