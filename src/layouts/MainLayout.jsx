import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/main/Header'
import Footer from '../components/main/Footer'

const MainLayout = () => {
    return (
        <main>
            <Header />
            <Outlet />
            <Footer />
        </main>
    )
}

export default MainLayout