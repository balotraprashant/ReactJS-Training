import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './Header.css';
import SearchBar from '../search-bar/SearchBar';
import { resetSearchData } from '../../redux/moviesSlice';

const Header = () => {

    // const cartItemsCount = useSelector((state) => state.cart.items.length);
    const dispatch = useDispatch();

    const handleLogoClick = () => {
        dispatch(resetSearchData());
    };

    return (
        <div id="header">
            <Link to={"/"} onClick={handleLogoClick} ><h1 id='logo'>TTN MDb</h1></Link>
            <div className="social"> <span>FOLLOW US ON:</span>
                <ul>
                    <li><a className="twitter" href="#">twitter</a></li>
                    <li><a className="facebook" href="#">facebook</a></li>
                    <li><a className="vimeo" href="#">vimeo</a></li>
                    <li><a className="rss" href="#">rss</a></li>
                </ul>
            </div>
            <div id="navigation">
                <ul>
                    <li><a className="active" href="#">HOME</a></li>
                    <li><a href="#">NEWS</a></li>
                    <li><a href="#">IN THEATERS</a></li>
                    <li><a href="#">COMING SOON</a></li>
                    <li><a href="#">CONTACT</a></li>
                    <li><a href="#">ADVERTISE</a></li>
                </ul>
            </div>
            <div id="sub-navigation">
                <ul>
                    <li><a href="#">SHOW ALL</a></li>
                    <li><a href="#">LATEST TRAILERS</a></li>
                    <li><a href="#">TOP RATED</a></li>
                    <li><a href="#">MOST COMMENTED</a></li>
                </ul>
                <SearchBar></SearchBar>
            </div>
        </div>
    );
};

export default Header;