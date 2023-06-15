import Button from '../../Components/Button/Button';
import Input from '../../Components/Input/Input';
import Logo from '../../logo-blue.png';
import './Login.css';

function Login() {
    return (
        <div className='loginPanel'>
            <div className='loginContainer'>
                <div className='logo'>
                    <img src={Logo} width="100px" alt='Logo'></img>
                </div>
                <form>
                    <h3>Please, login to your account.</h3>
                    <Input type={"email"} name={"Email"} placeholder="Enter your e-mail"></Input>
                    <Input type={"password"} name={"Password"} placeholder="Enter your password"></Input>
                    <Button alias={"Login"}></Button>
                </form>
            </div>
        </div>
    )
}

export default Login;