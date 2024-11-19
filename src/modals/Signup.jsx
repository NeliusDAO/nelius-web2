import { useState, useEffect } from "react"
import Popup from "./Popup.jsx"
import CopyToClipboard from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from "@fortawesome/free-solid-svg-icons";

export default function Signup() {
    const [generateId, setGenerateId] = useState(false);
    const [generateKeyword, setGenerateKeyword] = useState(false);
    const [createPassword, setCreatePassword] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isDisabled, setIsDisabled] = useState(false);
    const [alert, setAlert] = useState(false);
    const socialId = 232544553
    const passPhrase = ["monkey", "dove", "rat", "axis", "dinosaur", "rhythm", "horse", "wood", "fatigue", "row", "multiple", "care"];
    const keywords = "#2TF44553TY"
    const balance = 450

    useEffect(() => {
        setIsDisabled(createPassword || generateKeyword);
    }, [createPassword, generateKeyword]);

    useEffect(() => {
        setIsDisabled(password !== confirmPassword);
    }, [password, confirmPassword]);

    const handleCopyClick = () => {
        setAlert(true);
        setTimeout(() => {
            setAlert(false);
        }, 3000);
    };

    return (
        <div className="modal-content">
            <button onClick={() => {
                return (
                    setGenerateId(true)
                )
            }} disabled={isDisabled}>Sign Up</button>
            <div className="generateId">
                <Link to="/">Back to Homepage</Link>
                <Popup trigger={generateId}>
                    <div>
                        <h3>Generate ID</h3>
                        <h4>Make Sure To Copy Your PassPhrase As It Would Be Needed To Retrieve Your Account</h4>
                        <div className="keywords">
                            {passPhrase.map((words, index) => {
                                return (
                                    <CopyToClipboard key={index} text={words}>
                                        <p>{words} <FontAwesomeIcon icon={faCopy} /></p>
                                    </CopyToClipboard>
                                )
                            })}
                        </div>
                        {alert && <div className="alert">Copied PassPhrase To Clipboard</div>}
                        <CopyToClipboard text={passPhrase}>
                            <button onClick={() => {
                                return (
                                    handleCopyClick()
                                )
                            }}>Copy PassPhrase</button>
                        </CopyToClipboard>
                        <button onClick={() => {
                            return (
                                setGenerateId(false),
                                setCreatePassword(true)
                            )
                        }}>Create Password</button>
                    </div>
                </Popup>
                <Popup trigger={createPassword}>
                    <h3>Generate ID</h3>
                    <p>Are You Sure You Have Copied Your PassPhrase If Not</p>
                    <button onClick={() => {
                        return (
                            setCreatePassword(false),
                            setGenerateId(true)
                        )
                    }}>Previous Option</button>
                    <p>Click on the numbers to copy it.</p>
                    <CopyToClipboard text={socialId}>
                        <h4 onClick={handleCopyClick}>{socialId} <FontAwesomeIcon icon={faCopy} /></h4>
                    </CopyToClipboard>

                    {/* Conditionally render the alert */}
                    {alert && <div className="alert">Copied Social Id To Clipboard</div>}
                    <form>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} />
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input type="password" id="confirmPassword" onChange={(e) => setConfirmPassword(e.target.value)} />
                        {password !== confirmPassword ? <p className="passError">ⓘ please confirm password!!!</p> : ''}
                        <button onClick={() => {
                            return (
                                setGenerateKeyword(true),
                                setCreatePassword(false)
                            )
                        }} disabled={isDisabled}>Generate Keyword</button>
                    </form>
                </Popup>
                <Popup trigger={generateKeyword}>
                    <h3>Generate Keywords</h3>
                    <div>
                        <h4>Nelius Balance / Publicity Score</h4>
                        <h4>{balance}</h4>
                    </div>
                    <p>Keywords</p>
                    <p>{keywords}</p>
                    {alert && <div className="alert">Copied Keywords To Clipboard</div>}
                    <CopyToClipboard text={keywords}>
                        <button onClick={handleCopyClick}>Copy To Clipboard</button>
                    </CopyToClipboard>

                    <button onClick={() => {
                        return (
                            setCreatePassword(true),
                            setGenerateKeyword(false)
                        )
                    }}>Previous</button>
                </Popup>
            </div>
        </div>
    )
};