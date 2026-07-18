"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav className='bg-purple-600 text-white shadow-lg relative z-50'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-between items-center h-16 md:h-20'>
                    
                    {/* Logo */}
                    <div className="logo font-bold text-xl sm:text-2xl md:text-3xl flex-shrink-0">
                        <Link href="/shorten" className="hover:text-purple-200 transition-colors duration-200">
                            BitLinks
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <ul className='hidden md:flex justify-center items-center gap-6 lg:gap-8 xl:gap-10'>
                        <li>
                            <Link href="/" className="hover:text-purple-200 transition-colors duration-200 text-base lg:text-lg">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="hover:text-purple-200 transition-colors duration-200 text-base lg:text-lg">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/contect" className="hover:text-purple-200 transition-colors duration-200 text-base lg:text-lg">
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link href="/shorten" className="hover:text-purple-200 transition-colors duration-200 text-base lg:text-lg">
                                Shorten
                            </Link>
                        </li>
                        <li className='flex gap-3 lg:gap-4 ml-2'>
                            <Link href="/shorten">
                                <button className='text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-2xl text-sm lg:text-base px-4 lg:px-6 py-2 lg:py-2.5 text-center leading-5 transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 whitespace-nowrap'>
                                    Try Now
                                </button>
                            </Link>
                            <Link href="/github">
                                <button className='text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-2xl text-sm lg:text-base px-4 lg:px-6 py-2 lg:py-2.5 text-center leading-5 transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 whitespace-nowrap'>
                                    GitHub
                                </button>
                            </Link>
                        </li>
                    </ul>

                    {/* Mobile Menu Button */}
                    <button 
                        onClick={toggleMenu}
                        className='md:hidden p-2 rounded-lg hover:bg-purple-700 transition-colors duration-200'
                        aria-label="Toggle menu"
                    >
                        {isOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu Dropdown */}
                <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-screen opacity-100 pb-4' : 'max-h-0 opacity-0'
                }`}>
                    <ul className='flex flex-col items-center gap-3 py-4 border-t border-purple-500'>
                        <li className='w-full text-center'>
                            <Link 
                                href="/" 
                                className="block py-2 hover:bg-purple-700 rounded-lg transition-colors duration-200 text-base"
                                onClick={() => setIsOpen(false)}
                            >
                                Home
                            </Link>
                        </li>
                        <li className='w-full text-center'>
                            <Link 
                                href="/about" 
                                className="block py-2 hover:bg-purple-700 rounded-lg transition-colors duration-200 text-base"
                                onClick={() => setIsOpen(false)}
                            >
                                About
                            </Link>
                        </li>
                        <li className='w-full text-center'>
                            <Link 
                                href="/contect" 
                                className="block py-2 hover:bg-purple-700 rounded-lg transition-colors duration-200 text-base"
                                onClick={() => setIsOpen(false)}
                            >
                                Contact
                            </Link>
                        </li>
                        <li className='w-full text-center'>
                            <Link 
                                href="/shorten" 
                                className="block py-2 hover:bg-purple-700 rounded-lg transition-colors duration-200 text-base"
                                onClick={() => setIsOpen(false)}
                            >
                                Shorten
                            </Link>
                        </li>
                        <li className='flex gap-3 w-full justify-center mt-2'>
                            <Link href="/shorten" onClick={() => setIsOpen(false)}>
                                <button className='text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-2xl text-sm px-6 py-2.5 text-center leading-5 transition-all duration-300 hover:scale-105 active:scale-95'>
                                    Try Now
                                </button>
                            </Link>
                            <Link href="/github" onClick={() => setIsOpen(false)}>
                                <button className='text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-2xl text-sm px-6 py-2.5 text-center leading-5 transition-all duration-300 hover:scale-105 active:scale-95'>
                                    GitHub
                                </button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar