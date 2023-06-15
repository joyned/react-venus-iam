import './Input.css';

function Input({ placeholder, value, type, onChange, width }) {
    return (
        <>
            <div className='inputContainer'>
                <input placeholder={placeholder} type={type} value={value} onChange={onChange} className='inputField' style={{width: width}}></input>
            </div>
        </>
    )
}

export default Input;