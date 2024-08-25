import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { authorizationUser } from '../../api/api';

type Data = {
    email: string;
    password: string;
};

const AuthPage = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const {
        register,
        // formState: { errors },
        handleSubmit,
        reset,
    } = useForm<Data>({ mode: 'onBlur' });

    const onSubmit = (data: Data) => {
        console.log(data);
        reset();
        return authorizationUser(data.email, data.password)
            .then((response) => {
                console.log(response);
            })
            .catch((e) => console.log(e));
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
                <input type="submit" value={'Авторизоваться'} />
                <Link to="/register">Зарегистрироваться</Link>
            </form>
        </div>
    );
};

export default AuthPage;
