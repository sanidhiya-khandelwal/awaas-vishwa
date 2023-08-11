import React from 'react'
// import '../../App.css'
import { UserContext } from '../../context/UserContext' //UC1
import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
const Header = () => {
    //   const { userInfo } = React.useContext(UserContext)//UC2
    const { userInfo, setUserInfo } = React.useContext(UserContext)//UC2

    const logoutUser = () => {
        fetch(`${import.meta.env.VITE_BASE_URL}/api/v1/auth/logout`, {
            credentials: 'include',
            method: 'POST',
        })
        setUserInfo(null);
    }

    return (
        <header>
            <div className="header-container">
                <div className="header-left">
                    <Link to="/" className="header-left-brand">
                        <img src={Logo} alt="" />
                        <h2>Awaas Vishwa</h2>
                    </Link>
                </div>
                <div className="header-right">
                    <div className="header-right-login">
                        {
                            userInfo ? (
                                <>
                                    <Link to='/login'>Create Post</Link>
                                    <Link onClick={logoutUser}>Logout</Link>
                                </>
                            ) : (
                                <>
                                    <Link to='/login'>Login</Link>
                                    <Link to='/register'>SignUp</Link>
                                </>
                            )
                        }

                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header