import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { authorizationUser } from '../../api/api';
import '../../App.css';
import s from './AuthPage.module.css';
import ValidateError from '../../components/UI/ValidateError/ValidateError';

type Data = {
    email: string;
    password: string;
};

const AuthPage = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isGettingData, setIsGettingData] = useState<boolean>(false);

    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm<Data>({ mode: 'onBlur' });

    const onSubmit = (data: Data) => {
        setIsGettingData(true);
        console.log(data);
        reset();
        return authorizationUser(data.email, data.password)
            .then((response) => {
                console.log(response);
            })
            .catch((e) => console.log(e))
            .finally(() => {
                setIsGettingData(false);
            });
    };

    return (
        <div className={s.formContainer}>
            <div className={s.formContent}>
                <Link to="/">
                    <img src="image/apple.svg" alt="" />
                </Link>
                <p className={s.formTitle}>Авторизуйтесь в интернет-магазине</p>
                <form
                    className={s.form}
                    action=""
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <input
                        className={s.formInput}
                        value={email}
                        type="email"
                        placeholder="Введите ваш email"
                        {...register('email', {
                            required: 'Поле обязательно к заполнению',
                            onChange: (event) => setEmail(event.target.value),
                        })}
                    />
                    {errors?.email && (
                        <ValidateError errorsMessage={errors?.email?.message} />
                    )}
                    <input
                        className={s.formInput}
                        value={password}
                        type="password"
                        minLength={8}
                        placeholder="Введите пароль"
                        {...register('password', {
                            required: 'Поле обязательно к заполнению',
                            onChange: (event) =>
                                setPassword(event.target.value),
                        })}
                    />
                    {errors?.password && (
                        <ValidateError
                            errorsMessage={errors?.password?.message}
                        />
                    )}
                    <button className={s.formSubmitButton} type="submit">
                        {isGettingData ? (
                            <span>Загрузка...</span>
                        ) : (
                            <span>Авторизоваться</span>
                        )}
                    </button>
                    <Link className={s.formLink} to="/register">
                        Зарегистрироваться
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default AuthPage;
