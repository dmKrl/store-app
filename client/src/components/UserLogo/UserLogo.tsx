import { Link } from 'react-router-dom';
import { useUsersStore } from '../../store/UsersStore';
import s from './UserLogo.module.css';
import { useModalStore } from '../../store/ModalStore';
import { useMemo } from 'react';
//Разобраться, почему происходит ререндер компонента несколько раз
//это касается изменения usernameState
const UserLogo = () => {
    const { usernameState, setUsernameState } = useUsersStore();
    const { setIsVisibleModalAuth } = useModalStore();
    console.log(usernameState);

    const memoizedUsername = useMemo(() => {
        return usernameState;
    }, [usernameState]);

    const quitUser = (): void => {
        localStorage.setItem('access_token', '');
        setUsernameState();
    };

    const openModal = (): void => {
        setIsVisibleModalAuth();
    };

    return (
        <div className={s.userLogo}>
            <button className={s.userLogoButton} onClick={quitUser}>
                <div className={s.userLogoImg} />
            </button>
            <div className={s.userLogoName}>
                {memoizedUsername ? (
                    memoizedUsername
                ) : (
                    <Link
                        to=""
                        onClick={(event) => {
                            event.preventDefault();
                            openModal();
                        }}
                    >
                        Авторизуйтесь
                    </Link>
                )}
            </div>
        </div>
    );
};

export default UserLogo;
