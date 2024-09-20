import { ToggleContext } from './ToggleContext';
import { useContext } from 'react';

export default function About() {
    const { isToggled } = useContext(ToggleContext);

    const dark = {
        backgroundColor: '#0c0c3f',
        color: 'white'
    }

        return (
            <main style={!isToggled ? dark : {}} className="about" id="about">
                <h3 className="aboutHead">About <span className="textOne">Nelius</span></h3>
                <p>Hosting events often requires financing and promotion. Nelius is a digital solution aiming to facilitate funding and efficient promotion of events.</p>
            </main>
        )
    };
