import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

type Data = {
    email: string;
    password: string;
    repeatPassword: string;
    username: string;
};

const RegisterPage = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [repeatPassword, setRepeatPassword] = useState<string>('');
    const [username, setUsername] = useState<string>('');

    const {
        register,
        // formState: { errors },
        handleSubmit,
        reset,
    } = useForm<Data>({ mode: 'onBlur' });

    const onSubmit = (data: Data) => {
        if (password !== repeatPassword) {
            return [];
        }
        reset();
        console.log(data);
        return data;
    };

    return (
        <div>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <input
                    value={email}
                    type="text"
                    placeholder="Введите ваш email"
                    {...register('email', {
                        required: 'Поле обязательно к заполнению',
                        onChange: (event) => setEmail(event.target.value),
                    })}
                />
                <input
                    value={password}
                    type="password"
                    placeholder="Введите пароль"
                    {...register('password', {
                        required: 'Поле обязательно к заполнению',
                        onChange: (event) => setPassword(event.target.value),
                    })}
                />
                <input
                    value={repeatPassword}
                    type="password"
                    placeholder="Повторите пароль"
                    {...register('repeatPassword', {
                        required: 'Поле обязательно к заполнению',
                        onChange: (event) =>
                            setRepeatPassword(event.target.value),
                    })}
                />
                <input
                    value={username}
                    type="text"
                    placeholder="Введите логин"
                    {...register('username', {
                        required: 'Поле обязательно к заполнению',
                        onChange: (event) => setUsername(event.target.value),
                    })}
                />
                <input type="submit" />
                <Link to="/auth">Войти</Link>
            </form>
        </div>
    );
};

export default RegisterPage;
