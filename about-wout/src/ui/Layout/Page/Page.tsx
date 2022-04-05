import React from 'react'
import Footer from '../Footer';
import Header from '../Header';

const Page = ({ children }) => {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Page