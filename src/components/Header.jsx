import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className='sticky top-0 z-50 w-full border-b background/95 backdrop-blur py-2 supports-[backdrop-filter]:bg-background/60'>

            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <div className="logo">
                    <Link to={'/'}>Logo</Link>
                </div>
                <div className="">
                    <ul className="flex items-center gap-3">
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/about'}>About</Link></li>
                        <li><Link to={'/contact'}>Contact</Link></li>
                    </ul>
                </div>
            </div>

        </header>
    )
}

export default Header