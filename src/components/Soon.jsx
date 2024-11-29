/* eslint-disable jsx-a11y/no-distracting-elements */
import TypewriterComponent from "typewriter-effect"

export default function Soon() {
    return (
        <div>
            <h3>
                <TypewriterComponent
                    options={{
                        strings: [
                            'Want to know more about Nelius?',
                            'Want to earn Nelius Tokens?',
                            'Want to advertise your events better?',
                        ],
                        autoStart: true,
                        loop: true,
                        typeSpeed: 500,
                        deleteSpeed: 20,
                    }}
                />
            </h3>
            <marquee behavior="scroll" direction="left" scrollamount="5">We Would Be Right Back To Bring You In 👌</marquee>
        </div>
    )
};
