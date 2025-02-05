import React from 'react'
import Header from './Header'

const Layout = ({ children }) => {
    return (
        <div className='bg-gradient-to-br from-background to-muted'>

            <Header></Header>
            <main className='min-h-screen container mx-auto px-4 py-8'>
                {children}
            </main>
            <footer className='bg-red-100 text-center py-8 text-red-800 text-xl font-bold supports-[backdrop-filter]:bg-background/60'>
                Made with ❤️ by Mubashar Nouman
            </footer>

        </div>
    )
}

export default Layout