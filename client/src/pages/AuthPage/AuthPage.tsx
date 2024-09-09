import { useState } from 'react';
import { useForm } from 'react-hook-form';
import '../../App.css';
import s from './AuthPage.module.css';
import ValidateError from '../../components/UI/ValidateError/ValidateError';
import { useUsersStore } from '../../store/UsersStore';
import { useModalStore } from '../../store/ModalStore';

type Data = {
    email: string;
    password: string;
};

const AuthPage = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [responseError, setResponseError] = useState<string>('');
    const { authUser, isLoading, setIsLoading } = useUsersStore();
    const { switchVisibleModals, closeVisibleModals } = useModalStore();

    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm<Data>({ mode: 'onBlur' });

    const onSubmit = (data: Data) => {
        reset();
        setIsLoading();
        authUser(data.email, data.password)
            .then((response) => {
                if (response.message) {
                    throw new Error(response.message);
                }
                setIsLoading();
                closeVisibleModals();
                setResponseError('');
            })
            .catch((error: unknown) => {
                if (error instanceof Error) {
                    setIsLoading();
                    return setResponseError(error.message);
                }
                return setResponseError('Непредвиденная ошибка');
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
                        Авторизуйтесь в интернет-магазине
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
                        {responseError && (
                            <ValidateError errorsMessage={responseError} />
                        )}
                        <button
                            className={`${s.formSubmitButton} ${isLoading && s.formSubmitButtonDisabled}`}
                            type="submit"
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <span>Загрузка...</span>
                            ) : (
                                <span>Авторизоваться</span>
                            )}
                        </button>
                        <button
                            className={s.formLink}
                            onClick={switchVisibleModals}
                        >
                            Зарегистрироваться
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AuthPage;
