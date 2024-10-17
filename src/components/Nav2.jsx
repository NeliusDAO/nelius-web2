import React, { useContext, useState } from 'react';
import { ToggleContext } from './ToggleContext';
// import Logo from '../assets/img/logo/logo.svg';
import Logo from '../assets/img/logo/logo_nelius.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram, faInstagram, faLinkedinIn, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

export default function Nav2(props) {
    const { isToggled, setIsToggled } = useContext(ToggleContext);
    const [activeButton, setActiveButton] = useState(props.home);
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = (event) => {
        setActiveButton(event.target.textContent);
    };

    const toggleHamburger = () => {
        setIsOpen(!isOpen);
    };

    const styles = {
        borderRadius: '20px',
        border: 'none',
        background: 'linear-gradient(180deg, rgb(233, 241, 243), rgb(233, 241, 243), rgb(233, 241, 243), rgb(94, 110, 234))',
    };

    const inactiveStyles = {
        color: 'black'
    }

    const inactiveStyles1 = {
        color: 'white'
    }

    const styles1 = {
        borderRadius: '20px',
        border: 'none',
        color: 'white',
        background: 'linear-gradient(180deg, rgb(10, 30, 80), rgb(20, 10, 130), rgb(10, 30, 80))'
    }

    const colorSwitch = {
        // backgroundColor: 'rgb(19, 55, 128)',
        backgroundColor: 'black',
        color: 'white',
    };
    return (
        <nav style={!isToggled ? colorSwitch : {}}>
            <div className="logo">
                <img src={Logo} alt="logo" className="logo-img" />
                <p>Nelius</p>
            </div>
            <div className={`nav-list ${isOpen ? 'open' : ''}`}>
                <ul className="lists">
                    <li className="list-items" style={{backgroundColor : isToggled ? 'white' : 'black'}}>
                        <button
                            className="buttons"
                            style={
                                !isToggled
                                    ? activeButton === props.home
                                        ? styles1
                                        : inactiveStyles1
                                    : activeButton === props.home
                                        ? styles
                                        : inactiveStyles
                            }
                            onClick={handleClick}
                        >
                            {props.home}
                        </button>

                    </li>
                    <li className="list-items" style={{backgroundColor : isToggled ? 'white' : 'black'}}>
                        <button
                            className="buttons"
                            style={
                                !isToggled
                                    ? activeButton === props.about
                                        ? styles1
                                        : inactiveStyles1
                                    : activeButton === props.about
                                        ? styles
                                        : inactiveStyles
                            }
                            onClick={handleClick}
                        >
                            {props.about}
                        </button>
                    </li>
                    <li className="toggle-list" style={{backgroundColor : isToggled ? 'white' : 'black'}}>
                        <ToggleSwitch setIsToggled={setIsToggled} />
                    </li>
                </ul>

            </div>
            <div className="nav-socials">
                <ul className="social-items">
                    <li>
                        <Link
                            to="https://t.me/+AYM-0yp8od4yMGI0"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon
                                icon={faTelegram}
                                size="lg"
                                color={!isToggled ? 'white' : 'black'}
                                className="social-icon"
                            />
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="https://instagram.com/nelius_token"
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
                            to="https://x.com/neliustoken"
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
                            to="https://www.linkedin.com/company/nelius/"
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
                </ul>
            </div>
            <div
                className={`hamburger ${isOpen ? 'open' : ''}`}
                onClick={toggleHamburger}
            >
                <div className="line" style={{backgroundColor : !isToggled ? 'white' : 'black'}}></div>
                <div className="line" style={{backgroundColor : !isToggled ? 'white' : 'black'}}></div>
                <div className="line" style={{backgroundColor : !isToggled ? 'white' : 'black'}}></div>
                <div className="line" style={{backgroundColor : !isToggled ? 'white' : 'black'}}></div>
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
