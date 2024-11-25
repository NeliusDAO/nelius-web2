import './Popup.css';

export default function Popup(props) {
    return (props.trigger) ? (
        <div className="modal">
            {props.children}
        </div>
    ) : "";
}