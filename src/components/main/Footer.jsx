import React, { useEffect } from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import '../../App.css'
import { Link } from 'react-router-dom';

const footerNavLinks = [
    {
        link: '/',
        icon: HomeOutlinedIcon,
    },
    {
        link: '/create-ad',
        icon: AddCircleOutlinedIcon,
    },
    {
        link: '/profile',
        icon: PermIdentityOutlinedIcon,
    }
]
const Footer = () => {
    const [activePath, setActivePath] = React.useState(window.location.pathname);

    return (
        <>
            <div className="footer-pad"></div>
            <footer>
                <div className="footer-container">
                    {
                        footerNavLinks.map(
                            (navLink, idx) =>
                                <FooterNavLink
                                    key={idx}
                                    Icon={navLink.icon}
                                    link={navLink.link}
                                    activePath={activePath}
                                    setActivePath={setActivePath}
                                />
                        )
                    }
                </div>
            </footer>
        </>
    )
}
const FooterNavLink = ({ Icon, link, activePath, setActivePath }) => {
    // console.log(Icon);
    return (
        <div className="footer-nav-link">
            <Link to={link} onClick={() => setActivePath(link)}>
                <Icon style={{ fontSize: '35px' }} color={activePath === link ? 'primary' : 'action'} /> {/**primary and action are color */}
            </Link>
        </div>
    )
}

export default Footer