import { Link } from 'react-router-dom';
import NavBar from '../../../components/NavBar/NavBar';
import UserLogo from '../../../components/UserLogo/UserLogo';
import s from './Header.module.css';
import imgPath from '../../../../config';

const Header = () => {
    return (
        <div className="container">
            <div className={s.header}>
                <div className="header__logo">
                    <Link to="/">
                        <img
                            src={`${imgPath.imagePath}/image/appleheaderBlack.png`}
                            alt="apple-logo"
                        />
                    </Link>
                </div>
                <NavBar />
                <UserLogo />
            </div>
        </div>
    );
};

export default Header;
