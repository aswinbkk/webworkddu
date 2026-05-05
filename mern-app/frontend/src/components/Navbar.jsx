import '../style/Navbar.css'

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
                <button>login</button>
            </div>
        </div>
    )
}

export default Navbar