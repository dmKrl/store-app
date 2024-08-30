import { FC } from 'react';

interface ValidateErrorProps {
    errorsMessage: string | undefined;
}

const ValidateError: FC<ValidateErrorProps> = ({ errorsMessage }) => {
    return (
        <p style={{ color: 'red', fontSize: '12px' }}>
            <span>{errorsMessage}</span>
        </p>
    );
};

export default ValidateError;
