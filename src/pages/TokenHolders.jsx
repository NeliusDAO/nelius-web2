import HowToGet from "../components/HowToGet";
import { useContext } from "react"
import { ToggleContext } from "../components/ToggleContext";

export default function TokenHolders() {
    const { isToggled } = useContext(ToggleContext);

    const dark = {
        backgroundColor : 'black',
    }

    return (
        <div className="getting" id="getting" style={!isToggled ? dark : {}}>
            <HowToGet />
        </div>
    )
};
