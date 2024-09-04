import { Link } from 'react-router-dom';
import { useUsersStore } from '../../store/UsersStore';
import s from './UserLogo.module.css';
import { useModalStore } from '../../store/ModalStore';

const UserLogo = () => {
    const { usernameState, setUsernameState } = useUsersStore();
    const { setIsVisibleModalAuth } = useModalStore();
    console.log(usernameState);

    const quitUser = (): void => {
        localStorage.setItem('access_token', '');
        setUsernameState();
    };

    const openModal = (): void => {
        setIsVisibleModalAuth();
    };

    return (
        <div className={s.userLogo}>
            <Link to="/auth" onClick={quitUser}>
                <div className={s.userLogoImg} />
            </Link>
            <div className={s.userLogoName}>
                {usernameState ? (
                    usernameState
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
