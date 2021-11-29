import './NavBar.css'
import { Link } from "react-router-dom"
 
const NavBar = () => {
    return (
        <div className='navigation-bar'>
            <div className='app-name'><h1>Own Your Trail</h1></div>
            <span>
                {/* <Link></Link> are used to point to the Routes which point to page components  */}
            <Link className='text-link' to="/createTrailPage">Create Trail Page</Link>
            </span>
            <span>
            <Link className='text-link' to="/">Go Home</Link> 
            </span>
            <button>Log In</button>
            
        </div>
    )
}

export default NavBar