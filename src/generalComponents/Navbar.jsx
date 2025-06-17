import '../stylesheets/NavbarStyles.css'
import { Link } from "react-router-dom"

export default function Navbar(){
    return(
        <div className="Navbar">
            <Link className='navItem' to="/">Home</Link>
            <Link className='navItem' to="/List">List</Link>
            <Link className='navItem' to="/Profile">Profile</Link>
        </div>
    )
}