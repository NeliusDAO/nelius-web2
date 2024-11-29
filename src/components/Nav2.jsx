import React, { useContext, useState } from 'react';
import { ToggleContext } from './ToggleContext';
import Logo from '../assets/img/logo/nelius_logo_nav.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedinIn, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link, useLocation } from 'react-router-dom';

export default function Nav2({ about, home }) {
    const { isToggled, setIsToggled } = useContext(ToggleContext);
    const [isOpen, setIsOpen] = useState(false);

    const location = useLocation();
    const currentPath = location.pathname

    const toggleHamburger = () => {
        setIsOpen(!isOpen);
    };

    // const styles = {
    //     borderRadius: '20px',
    //     border: 'none',
    //     background: 'linear-gradient(180deg, rgb(233, 241, 243), rgb(233, 241, 243), rgb(233, 241, 243), rgb(94, 110, 234))',
    // };

    const stylesActive = {
        borderRadius: '20px',
        border: 'none',
        background: 'linear-gradient(180deg, rgb(233, 241, 243), rgb(233, 241, 243), rgb(94, 110, 234))',
        color: 'black',
    };

    const stylesInactive = (isToggled) => ({
        borderRadius: '20px',
        border: 'none',
        background: 'transparent',
        color: isToggled ? 'black' : 'white',
    });

    // const styles1 = {
    //     borderRadius: '20px',
    //     border: 'none',
    //     color: 'white',
    //     background: 'linear-gradient(180deg, rgb(10, 30, 80), rgb(20, 10, 130), rgb(10, 30, 80))'
    // }

    const colorSwitch = {
        backgroundColor: 'black',
        color: 'white',
    };
    return (
        <nav style={!isToggled ? colorSwitch : {}}>
            <div className="logo">
                <img src={Logo} alt="logo" className="logo-img" id='logo-img' />
            </div>
            <div className={`nav-list ${isOpen ? 'open' : ''}`}>
                <ul className="lists">
                    <Link to="/">
                        <li className="list-items" style={{ backgroundColor: isToggled ? 'white' : 'black' }}>
                            <button
                                className="buttons"
                                style={
                                    currentPath === '/'
                                        ? stylesActive
                                        : stylesInactive(isToggled)
                                }
                            >
                                {home}
                            </button>
                        </li>
                    </Link>
                    <Link to="token-holders">
                        <li className="list-items" style={{ backgroundColor: isToggled ? 'white' : 'black' }}>
                            <button
                                className="buttons"
                                style={
                                    currentPath === '/token-holders'
                                        ? stylesActive
                                        : stylesInactive(isToggled)
                                }
                            >
                                {about}
                            </button>
                        </li>
                    </Link>
                    <li className="toggle-list" style={{ backgroundColor: isToggled ? 'white' : 'black' }}>
                        <ToggleSwitch setIsToggled={setIsToggled} />
                    </li>
                </ul>
            </div>
            <div className="nav-socials">
                <ul className="social-items">
                    <li>
                        <Link
                            to="https://t.me/neliusdao"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={isToggled ? "https://img.icons8.com/?size=100&id=TCnKnYZFoOzM&format=png&color=000000" : "https://img.icons8.com/?size=100&id=TCnKnYZFoOzM&format=png&color=FFFFFF"}
                                alt="telegram"
                                className="social-icon"
                            />

                        </Link>
                    </li>
                    <li>
                        <Link
                            to="https://www.instagram.com/neliusdao"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon
                                icon={faInstagram}
                                size="lg"
                                color={!isToggled ? 'white' : 'black'}
                                className="social-icon"
                            />
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="https://x.com/neliusDAO"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon
                                icon={faXTwitter}
                                size="lg"
                                color={!isToggled ? 'white' : 'black'}
                                className="social-icon"
                            />
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="https://linkedin.com/company/nelius"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon
                                icon={faLinkedinIn}
                                size="lg"
                                color={!isToggled ? 'white' : 'black'}
                                className="social-icon"
                            />
                        </Link>
                    </li>
                    {/* <li>
                        <Link to="/signup">
                            <button className='sign-btn' style={!isToggled ? styles1 : styles}>Sign Up</button>
                        </Link>
                    </li> */}
                </ul>
            </div>
            <div
                className={`hamburger ${isOpen ? 'open' : ''}`}
                onClick={toggleHamburger}
            >
                <div className="line" style={{ backgroundColor: !isToggled ? 'white' : 'black' }}></div>
                <div className="line" style={{ backgroundColor: !isToggled ? 'white' : 'black' }}></div>
                <div className="line" style={{ backgroundColor: !isToggled ? 'white' : 'black' }}></div>
                <div className="line" style={{ backgroundColor: !isToggled ? 'white' : 'black' }}></div>
            </div>
        </nav>
    );
}
function ToggleSwitch({ setIsToggled }) {
    const [isToggledLocal, setIsToggledLocal] = useState(false);

    const toggleSwitch = () => {
        setIsToggledLocal(!isToggledLocal);
        setIsToggled(isToggledLocal);
    };

    return (
        <label className="toggle-switch">
            <input
                type="checkbox"
                checked={isToggledLocal}
                onChange={toggleSwitch}
            />
            <span className="slider"></span>
        </label>
    );
}
