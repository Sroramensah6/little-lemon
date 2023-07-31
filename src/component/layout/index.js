import React from 'react'

import Main from './main'
import NavBar from './nav-bar'
import Footer from './footer'

function Layout({children}) {
    return (
        <>
            <NavBar />
            <Main>{children}</Main>
            <Footer />
        </>
    )
}

export default Layout
