import { useTheme } from '@/context/theme-provider'
import { Moon, Sun } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

    const { theme, setTheme } = useTheme()
    const isDark = theme === 'dark' // If theme is dark, the value of isDark will be true.

    return (
        <header className='sticky top-0 z-50 w-full border-b background/95 backdrop-blur py-2 supports-[backdrop-filter]:bg-background/60'>

            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <div className="logo">
                    <Link to={'/'}>Weather Forecast</Link>
                </div>
                <div className=" flex items-center space-x-2">
                    <ul className="flex items-center gap-3">
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/about'}>About</Link></li>
                        <li><Link to={'/contact'}>Contact</Link></li>
                    </ul>
                    <div className={`cursor-pointer flex items-center transition-transform duration-500 ${isDark? "rotate-180": "rotate-0"}`} onClick={()=>setTheme(isDark ? "light": "dark")}>
                        {isDark ? (<Sun className='h-6 w-6 text-yellow-500 rotate-0 transition-all'/>):
                        (<Moon className='h-6 w-6 text-blue-500 rotate-0 transition-all'/>)
                        }
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header