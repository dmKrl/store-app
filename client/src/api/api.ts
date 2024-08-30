const registrationUrl = 'http://localhost:5000/api/user/registration';
const authorizationUrl = 'http://localhost:5000/api/user/login';

export const registrationUser = async (
    email: string,
    password: string,
    username: string,
) => {
    try {
        const response = await fetch(registrationUrl, {
            method: 'POST',
            body: JSON.stringify({
                email,
                password,
                username,
            }),
            headers: {
                'content-type': 'application/json',
            },
        });
        const responseData = await response.json();
        return responseData;
    } catch (error) {
        return error;
    }
};

export const authorizationUser = async (email: string, password: string) => {
    try {
        const response = await fetch(authorizationUrl, {
            method: 'POST',
            body: JSON.stringify({
                email,
                password,
            }),
            headers: {
                'content-type': 'application/json',
            },
        });
        const responseData = await response.json();
        return responseData;
    } catch (error) {
        return error;
    }
};
