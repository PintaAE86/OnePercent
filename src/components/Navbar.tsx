import React from 'react'

//const Navbar = ({isLoggedIn}) => //for later use
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbar__container'>
            <div className='navbar__container__logo'>
                <img src="" alt="Logo" />
            </div>
            <div className='navbar_container__links'>
                <a href='#' className='navbar__container__link'>My Profile</a>
                <a href='#' className='navbar__container__link'>Goals</a>
                <a href='#' className='navbar__container__link'>History/Overview</a>
                <a href='#' className='navbar__container__link'>Login/Logout/SignUp</a>
            </div>
        </div>
    </div>
    )
}

export default Navbar   