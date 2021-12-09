import React from "react"
import { Link, useHistory } from "react-router-dom"
import "./Navbar.css"

export const Navbar = () => {
    const history = useHistory()

    return (
        <ul className="navbar">
            {/* <li className="navbar__item">
                <img className="navbar__logo" src={Logo} />
            </li> */}
            <li className="navbar__item">
                <Link className="navbar__link" to="/community_resources">Home</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/my_reviews">Your Reviews</Link>
            </li>
            {/* <li className="navbar__item">
                <Link className="navbar__link" to="/posts">Posts</Link>
            </li> */}
            {/* <li className="navbar__item">
                <Link className="navbar__link" to="/tags">Tag Management</Link>
            </li> */}
            {/* <li className="navbar__item">
                <Link className="navbar__link" to="/categories">Category Manager</Link>
            </li> */}
            {
                (localStorage.getItem("halp_user_id") !== null) ?
                    <li className="nav-item">
                        <button className="nav-link fakeLink"
                            onClick={() => {
                                localStorage.removeItem("halp_user_id")
                                history.push({ pathname: "/" })
                            }}
                        >Logout</button>
                    </li> :
                    <>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                    </>
            }        </ul>
    )
}