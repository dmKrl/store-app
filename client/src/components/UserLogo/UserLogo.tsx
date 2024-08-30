import { useUsersStore } from '../../store/UsersStore';
import s from './UserLogo.module.css';

const UserLogo = () => {
    const { username } = useUsersStore();
    return (
        <div className={s.userLogo}>
            <div className={s.userLogoImg} />
            <div className={s.userLogoName}>{username}</div>
        </div>
    );
};

export default UserLogo;
