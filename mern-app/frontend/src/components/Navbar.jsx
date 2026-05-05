import styled from 'styled-components'
import '../style/Navbar.css'

const Button = styled.button`
    max-width:60px;
    color: red;
    background-color: green;
`
const Navbar = () => {
    return (
        <div class="navbar_container">
            <div class="navbar_left">
                <img src="../public/waymate_standalone_icon.png"></img>
            </div>
            <div class="navbar_center">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>contact</li>
                </ul>
            </div>
            <div class="navbar_right">
                <Button>Login</Button>
                <Button>Sign Up</Button>
            </div>
        </div>
    )
}

export default Navbar