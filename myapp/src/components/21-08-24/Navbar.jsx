import { useNavigate } from "react-router-dom";
import '../styles/Navbar.css'

function Navbar (){

    const router = useNavigate();

    function redirectToHome (){
        router("/")
    }
    function redirectToLogin (){
        router("/login")
    }
    function redirectToRegister (){
        router("/register")
    }
    function redirectToCounter (){
        router("/counter")
    }

    return (
        <div className='parentDiv'>
            <h1 onClick={redirectToHome}>Home</h1>
            <h1 onClick={redirectToLogin}>Login</h1>
            <h1 onClick={redirectToRegister}>Register</h1>
            <h1 onClick={redirectToCounter}>Counter</h1>
        </div>
    )
}
export default Navbar;