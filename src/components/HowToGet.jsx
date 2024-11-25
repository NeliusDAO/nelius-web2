import { useContext } from "react"
import { ToggleContext } from "./ToggleContext";
import { Link } from "react-router-dom";


export default function HowToGet() {
    const { isToggled } = useContext(ToggleContext);

    const dark = {
        color: "white",
        backgroundColor: "black",
    }

    const getting = [
        {
            words: "Original holders of Nelius nominates a group of events to be donated to.", dot: {
                backgroundColor: "red",
                width: "20px",
                height: "20px",
                borderRadius: "50%"
            }
        },
        {
            words: "Token holders decides which sets of events to donate to at a given time.", dot: {
                backgroundColor: "blue",
                width: "20px",
                height: "20px",
                borderRadius: "50%"
            }
        },
        {
            words: "For every transaction made with Nelius, 1/10th of the transferred token is staked for contribution.", dot: {
                backgroundColor: "yellow",
                width: "20px",
                height: "20px",
                borderRadius: "50%"
            }
        },
        {
            words: "All staked tokens would be donated to the address of selected addresses.", dot: {
                backgroundColor: "green",
                width: "20px",
                height: "20px",
                borderRadius: "50%"
            }
        },
        {
            words: "Token holders can still donate to events of their choosing at any time provided event addresses.", dot: {
                backgroundColor: "pink",
                width: "20px",
                height: "20px",
                borderRadius: "50%"
            }
        },
    ]

    return (
        <div className="print" style={!isToggled ? dark : {}}>
            <div className="printFrame">
                {getting.map((texts, index) => {
                    return (
                        <div className="card">
                            <div className="dot" style={texts.dot}></div>
                            <div>
                                <p key={index + 1} className="texts">{texts.words}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="acct">
                <Link to="/signup">
                    <button className='account-btn' style={!isToggled ? dark : {}}>Create Account</button>
                </Link>
            </div>
        </div>
    )
};
