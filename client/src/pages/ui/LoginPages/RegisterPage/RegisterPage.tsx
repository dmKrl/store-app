import { useState } from 'react';
import { useForm } from 'react-hook-form';
import s from '../styles/LoginPages.module.css';
import { useNavigate } from 'react-router';
import { useModalStore, useUsersStore } from 'src/features/store';
import ValidateError from 'src/shared/ui/ValidateError/ValidateError';

type Data = {
    email: string;
    password: string;
    repeatPassword: string;
    username: string;
};

export const RegisterPage = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [repeatPassword, setRepeatPassword] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [validatePassword, setValidatePassword] = useState<boolean>(false);
    const { switchVisibleModals, closeVisibleModals } = useModalStore();
    const { isLoading, setIsLoading, registrationUser } = useUsersStore();
    const navigate = useNavigate();

    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm<Data>({ mode: 'onBlur' });

    const onSubmit = (data: Data) => {
        if (password !== repeatPassword) {
            return setValidatePassword(true);
        }
        reset();
        setIsLoading();
        registrationUser(data.email, data.password, data.username)
            .then(() => {
                setIsLoading();
                closeVisibleModals();
                setValidatePassword(false);
                navigate('/basket');
            })
            .catch(() => {
                setIsLoading();
            });
    };

    return (
        <div className={s.formWrapper}>
            <div className={s.formContainer}>
                <div className={s.formContent}>
                    <button
                        className={s.formButtonLogo}
                        onClick={closeVisibleModals}
                    >
                        <img src="image/apple.svg" alt="" />
                    </button>
                    <p className={s.formTitle}>
                        Зарегистрируйтесь в интернет-магазине
                    </p>
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
                                onChange: (event) =>
                                    setEmail(event.target.value),
                            })}
                        />
                        {errors?.email && (
                            <ValidateError
                                errorsMessage={errors?.email?.message}
                            />
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
                        <input
                            className={s.formInput}
                            value={repeatPassword}
                            type="password"
                            placeholder="Повторите пароль"
                            {...register('repeatPassword', {
                                required: 'Поле обязательно к заполнению',
                                onChange: (event) =>
                                    setRepeatPassword(event.target.value),
                            })}
                        />
                        {errors?.repeatPassword && (
                            <ValidateError
                                errorsMessage={errors?.repeatPassword?.message}
                            />
                        )}
                        <input
                            className={s.formInput}
                            value={username}
                            type="text"
                            placeholder="Введите логин"
                            {...register('username', {
                                required: 'Поле обязательно к заполнению',
                                onChange: (event) =>
                                    setUsername(event.target.value),
                            })}
                        />
                        {errors?.username && (
                            <ValidateError
                                errorsMessage={errors?.username?.message}
                            />
                        )}
                        {validatePassword && (
                            <ValidateError
                                errorsMessage={'Пароли не совпадают'}
                            />
                        )}
                        <button
                            className={`${s.formSubmitButton} ${isLoading && s.formSubmitButtonDisabled}`}
                            type="submit"
                        >
                            {isLoading ? (
                                <span>Загрузка...</span>
                            ) : (
                                <span>Зарегистрироваться</span>
                            )}
                        </button>
                        <button
                            className={s.formLink}
                            onClick={switchVisibleModals}
                        >
                            Авторизоваться
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};
