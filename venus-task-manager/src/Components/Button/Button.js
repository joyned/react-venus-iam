import './Button.css'

function Button({ alias, onClick, icon }) {
    return (
        <button onClick={onClick}>{icon}{alias}</button>
    )
}

export default Button;