import React, { useState, useEffect } from 'react'
import { UserContext } from '../context/UserContext'
import LoginPage from '../pages/LoginPage'
import LogoutIcon from '@mui/icons-material/Logout'
import { Switch } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const ProfilePage = () => {
    const { userInfo, setUserInfo } = React.useContext(UserContext)
    return (
        <div className='profile'>
            {
                userInfo ? <Profile /> : <LoginPage />
            }
        </div>
    )
}

const Profile = () => {
    const [toggleAdList, setToogleAdList] = useState(false)
    useEffect(() => {
        fetch(`${import.meta.env.VITE_BASE_URL}/api/v1/profile-settings`, {
            credentials: 'include'
        })
    }, []);

    return (
        <div className='profile-container'>
            <div className="profile-header">
                <div className="profile-img">
                    S
                </div>
                <div className="profile-email">
                    Sanidhya@gmail.com
                </div>
                <div className="profile-phone">
                    9124667899
                </div>
            </div>
            <div className="settings">
                <div className="settings-header">Settings</div>
                <div className="settings-item">
                    <span>Dark Mode</span><Switch defaultChecked />
                </div>
                <div className="settings-item">
                    <span>Logout</span><LogoutIcon style={{ fontSize: '28px' }} />
                </div>
            </div>
            <div className="profile-ad-listing">
                <div className="profile-ad-header" onClick={() => setToogleAdList(!toggleAdList)}>
                    <span>Your Listings</span>
                    {
                        toggleAdList ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />
                    }

                </div>
                {
                    toggleAdList && (
                        <div className="profile-ad-list">
                            <ProfileAdItem />
                            <ProfileAdItem />
                            <ProfileAdItem />
                            <ProfileAdItem />
                            <ProfileAdItem />
                            <ProfileAdItem />
                            <ProfileAdItem />
                            <ProfileAdItem />
                        </div>
                    )
                }

            </div>
        </div>
    )
}
const ProfileAdItem = ({ }) => {
    return (
        <div className="profile-ad-item">
            <div className="profile-ad-item-left">
                <div className="profile-ad-item-img">
                    <img src="https://firebasestorage.googleapis.com/v0/b/awaas-vishwa-35e28.appspot.com/o/ad-imgs%2Fbf1ecdd5-11f2-41c0-be46-ae94336cb726.avif?alt=media&token=dba604fb-6363-4066-aef8-4eb833384749" alt="" />
                </div>
            </div>
            <div className="profile-ad-item-right">
                <div className="profile-ad-item-header">Newly Constructed building in gurgaon</div>
                <div className="profile-ad-item-location">Gurgaon,Haryana,NCR</div>
                <div className="profile-ad-item-price-type">
                    <div className="profile-ad-item-price">1,80,00,000</div>
                    <div className="profile-ad-item-type">SELL</div>
                </div>
            </div>
        </div>
    )
}
export default ProfilePage