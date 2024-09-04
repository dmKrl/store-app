import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
// import { authorizationUser } from '../../api/api';
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
    const navigate = useNavigate();
    const { authUser, isLoading } = useUsersStore();
    const { switchVisibleModals, closeVisibleModals } = useModalStore();

    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm<Data>({ mode: 'onBlur' });

    const onSubmit = (data: Data) => {
        reset();
        authUser(data.email, data.password);
        navigate('/');
        //Начинаем с этого места: нужно сделать правильную последовательность
        //выполнения функций авторизации и навигации на основную страницу сайта
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
                        <button className={s.formSubmitButton} type="submit">
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
