import { Link } from 'react-router-dom';
import s from './Header.module.css';
import imgPath from '../../../../config';
import NavBar from '../NavBar/NavBar';
import UserLogo from 'src/shared/ui/UserLogo/UserLogo';

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
