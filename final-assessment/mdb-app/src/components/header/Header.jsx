import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import SearchBar from '../search-bar/SearchBar';
import { resetSearchData } from '../../redux/moviesSlice';
import { logout } from '../../redux/authSlice';

const Header = () => {
    const dispatch = useDispatch();

    const handleLogoClick = () => {
        dispatch(resetSearchData());
    };

    const navigate = useNavigate()

    const handleLogoutClick = () => {
        dispatch(logout());
        navigate('/');
    }

    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    console.log(isAuthenticated);

    const authButton = () => {
        if (!isAuthenticated) {
            return (
                <span>
                    <li><Link to="/login">LOGIN</Link></li>
                    <li><Link to="/signup">SIGNUP</Link></li>
                </span>
            )

        } else {
            return (
                <span>
                    <li><a onClick={handleLogoutClick}>LOGOUT</a></li>
                </span>
            )
        }
    }

    const scrollToNews = () => {
        const aboutSection = document.getElementById('news');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToComingSoon = () => {
        const aboutSection = document.getElementById('coming');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div id="header">
            <Link to={"/"} onClick={handleLogoClick} ><h1 id='logo'>TTN MDb</h1></Link>
            <div className="social"> <span>FOLLOW US ON:</span>
                <ul>
                    <li><a className="twitter" href="/">twitter</a></li>
                    <li><a className="facebook" href="/">facebook</a></li>
                </ul>
            </div>
            <div id="navigation">
                <ul>
                    <li><Link to={"/"} onClick={handleLogoClick} >HOME</Link></li>
                    {authButton()}
                </ul>
            </div>
            <div id="sub-navigation">
                <ul>
                    <li><a onClick={scrollToNews}>NEWS</a></li>
                    <li><a onClick={scrollToComingSoon}>COMING SOON</a></li>
                </ul>
                <SearchBar></SearchBar>
            </div>
        </div>
    );
};

export default Header;