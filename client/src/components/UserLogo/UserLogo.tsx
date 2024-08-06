import s from './UserLogo.module.css';

const UserLogo = () => {
    return (
        <div className={s.userLogo}>
            <div className={s.userLogoImg} />
            <div className={s.userLogoName}>Username</div>
        </div>
    );
};

export default UserLogo;
