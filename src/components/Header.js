import React from 'react';
import { CgMenuRight } from 'react-icons/cg'
import { FaSun, FaMoon } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'
import useDarkMode from '../hooks/useDarkMode';
import { Link } from "react-scroll";

const Header = () => {
    const [navbar, setNavbar] = React.useState(false)
    const [colorTheme, setTheme] = useDarkMode()
    const [fixedNav, setFixedNav] = React.useState(false)
    const scrolledStyle = 'w-screen border-b py-2 fixed z-10 bg-gray-100 dark:border-zinc-800 dark:bg-zinc-900 shadow-lg'

    React.useEffect(() => {
        window.addEventListener('scroll', () => {
        window.pageYOffset > 100 ? setFixedNav(true) : setFixedNav(false)
        })
      })

    return (
        <nav className={fixedNav ? scrolledStyle :'w-screen bg-gray-100 dark:bg-zinc-900 py-2 fixed z-50'}>
            <div className='flex justify-between px-5 items-center text-xl dark:text-white'>
                <a href="/" className='logo--typography text-[20px] p-2 cursor-pointer'>KR</a>
                <div className='hidden md:flex justify-center gap-2 text-[16px] font-sans'>
                    <Link
                        activeClass="active"
                        to='home--section'
                        smooth={true}
                        delay={200}
                        spy={true}
                        className='item-menu--medium px-4 py-1 rounded-lg'
                    >
                        Home
                    </Link>
                    <Link
                        activeClass="active"
                        to='about--section'
                        smooth={true}
                        delay={200}
                        spy={true}
                        className='item-menu--medium px-4 py-1 rounded-lg'
                    >
                        About
                    </Link>
                    <Link
                        activeClass="active"
                        to='project--section' 
                        smooth={true}
                        delay={200}
                        spy={true}
                        className='item-menu--medium px-4 py-1 rounded-lg'
                    >
                        Project
                    </Link>  
                </div>
                <div className={navbar ? 'md:hidden cursor-pointer p-2 rounded-lg dark:bg-zinc-800 bg-zinc-300 border dark:border-zinc-800 dark:hover:border-zinc-700 hover:border-zinc-400' : 'md:hidden cursor-pointer p-2 rounded-lg dark:hover:bg-zinc-800 hover:bg-zinc-300 border dark:border-zinc-800'} onClick={() => setNavbar(nav => !nav)}>
                    {navbar ? (<IoMdClose/>) : (<CgMenuRight/>)}
                </div>
                <div className="hidden md:flex p-2 dark:text-white rounded-full hover:bg-zinc-300 dark:hover:bg-zinc-800 cursor-pointer" onClick={() => setTheme(colorTheme)}>
                    {colorTheme === 'dark' ? (<FaMoon/>) : (<FaSun/>)}
                </div>
            </div>
            {navbar && (
                <div className='absolute md:hidden border-2 border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-900 top-20 right-4 rounded-lg'>
                    <div className="flex flex-col items-center gap-2 py-3">
                        <Link 
                            activeClass="active"
                            to="home--section" 
                            className="item-menu--mobile"
                            smooth={true}
                            delay={200}
                            spy={true}
                        >
                            Home
                        </Link>
                        <Link 
                            activeClass="active"
                            to="about--section" 
                            className="item-menu--mobile"
                            smooth={true}
                            delay={200}
                            spy={true}
                        >
                            About
                        </Link>
                        <Link 
                            activeClass="active"
                            to="project--section" 
                            className="item-menu--mobile"
                            smooth={true}
                            delay={200}
                            spy={true}
                        >
                            Project
                        </Link>
                        <div className="item-menu--mobile p-2 rounded-full" onClick={() => setTheme(colorTheme)}>
                            {colorTheme === 'dark' ? (<FaMoon/>) : (<FaSun/>)}
                        </div>
                    </div>
                </div>
            )}
        </nav> 
    )
};

export default Header;
