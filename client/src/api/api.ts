export const registrationUser = () => {};

export const authorizationUser = async (email: string, password: string) => {
    try {
        const response = await fetch('http://localhost:5000/api/user/login', {
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
