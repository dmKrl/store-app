import { Link } from 'react-router-dom';
import { useUsersStore } from '../../store/UsersStore';
import s from './UserLogo.module.css';

const UserLogo = () => {
    const { usernameState, setUsernameState } = useUsersStore();
    console.log(usernameState);

    function quitUser(): void {
        localStorage.setItem('access_token', '');
        setUsernameState();
    }


    return (
        <div className={s.userLogo}>
            <Link to="/auth" onClick={quitUser}>
                <div className={s.userLogoImg} />
            </Link>
            <div className={s.userLogoName}>
                {usernameState ? (
                    usernameState
                ) : (
                    <Link to="/auth">Авторизуйтесь</Link>
                )}
            </div>
        </div>
    );
};

export default UserLogo;
