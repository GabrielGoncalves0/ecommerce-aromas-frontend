'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react'

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false)

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    const toggleMobileDropdown = () => {
        setIsMobileDropdownOpen(!isMobileDropdownOpen)
    }

    return (
        <header className="bg-layout border-b border-primary sticky top-0 z-50 backdrop-blur-sm">
            <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center space-x-2 group logo-link">
                            <div className="w-18 h-18 flex items-center justify-center">
                                <img src="/logo.png" alt="Aromas Noor Logo" className="object-contain" />
                            </div>
                            <span className="text-xl font-bold">
                                Aromas Noor
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/" className="font-medium">
                            Home
                        </Link>
                        <div className="relative group">
                            <button className="flex items-center space-x-1 font-medium transition-colors">
                                <span>Produtos</span>
                                <Icon icon="mdi:chevron-down" width="20" height="20"
                                    className="transition-transform group-hover:rotate-180" />
                            </button>

                            {/* Área invisível para manter hover */}
                            <div className="absolute top-full left-0 w-64 h-2 bg-transparent"></div>

                            {/* Dropdown Menu */}
                            <div
                                className="bg-layout absolute top-full left-0 mt-2 w-72 rounded-xl shadow-lg border border-primary opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2">
                                <div className="p-3">
                                    <Link href="#" className="flex items-center p-3 rounded-lg hover:bg-gray-400/80 transition-colors duration-200 group/item">
                                        <div className="bg-primary-500 text-text-primary w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                                            <Icon icon="mdi:candle" width="24" height="24"
                                                className="text-text-secondary" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="font-semibold text-text-primary transition-colors">
                                                Velas
                                            </div>
                                            <div className="text-sm text-text-secondary group-hover/item:text-text-primary transition-colors">
                                                Fragrâncias exclusivas
                                            </div>
                                        </div>
                                    </Link>
                                    <Link href="#" className="flex items-center p-3 rounded-lg hover:bg-gray-400/80 transition-colors duration-200 group/item">
                                        <div className="bg-primary-500 text-text-primary w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                                            <Icon icon="mdi:soap" width="24" height="24"
                                                className="text-text-secondary" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="font-semibold text-text-primary transition-colors">
                                                Sabonetes
                                            </div>
                                            <div className="text-sm text-text-secondary group-hover/item:text-text-primary transition-colors">
                                                Aromaterapia natural
                                            </div>
                                        </div>
                                    </Link>
                                    <Link href="#" className="flex items-center p-3 rounded-lg hover:bg-gray-300/20 transition-colors duration-200 group/item">
                                        <div className="bg-primary-500 text-text-primary w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                                            <Icon icon="mdi:air-humidifier" width="24" height="24"
                                                className="text-text-secondary" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="font-semibold text-text-primary transition-colors">
                                                Difusores
                                            </div>
                                            <div className="text-sm text-text-secondary group-hover/item:text-text-primary transition-colors">
                                                Para ambientes
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <Link href="/sobre" className="font-medium">
                            Sobre
                        </Link>
                        <Link href="/contato" className="font-medium">
                            Contato
                        </Link>
                    </div>

                    {/* Desktop Actions */}
                    <div className="hidden md:flex items-center space-x-7">
                        <button className="cursor-pointer icon">
                            <Icon icon="mdi:magnify" width="25" height="25" />
                        </button>
                        <button className="relative cursor-pointer icon">
                            <Icon icon="mdi:cart-outline" width="25" height="25" />
                            <span
                                className="absolute -top-3 -right-4 bg-primary-400 text-primary-900 font-bold text-xs rounded-full w-8 h-5 flex items-center justify-center transition-colors duration-150 ease-in-out">99+</span>
                        </button>
                        <button className="cursor-pointer icon">
                            <Icon icon="ri:user-line" width="25" height="25" />
                        </button>
                    </div>

                    {/* Mobile Menu Button and Actions */}
                    <div className="md:hidden flex items-center space-x-3">
                        {/* Mobile Actions */}
                        <button className="cursor-pointer relative icon">
                            <Icon icon="mdi:cart-outline" width="24" height="24" />
                            <span
                                className="absolute -top-2 -right-1 bg-primary-500 text-white font-extralight rounded-full w-6 h-6 flex items-center justify-center transition-colors duration-150 ease-in-out">2</span>
                        </button>
                        <button className="cursor-pointer icon">
                            <Icon icon="ri:user-line" width="24" height="24" />
                        </button>
                        {/* Mobile Menu Button */}
                        <button id="mobile-menu-button" onClick={toggleMobileMenu}
                            className="p-2">
                            <Icon icon={isMobileMenuOpen ? 'mdi:close' : 'mdi:menu'} width="24" height="24"
                            />
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div id="mobile-menu" className={`md:hidden border-t border-primary ${!isMobileMenuOpen ? 'hidden' : ''}`}>
                    <div className="py-4 space-y-2">
                        <Link href="/" className="block py-2 font-medium">
                            Home
                        </Link>
                        <div>
                            <button onClick={toggleMobileDropdown}
                                className="w-full flex items-center justify-between py-2 font-medium">
                                <span>Produtos</span>
                                <Icon icon={isMobileDropdownOpen ? 'mdi:chevron-up' : 'mdi:chevron-down'}
                                    width="20" height="20" className=" transition-transform" />
                            </button>
                            <div className={`pl-4 py-2 space-y-2 ${!isMobileDropdownOpen ? 'hidden' : ''}`}>
                                <Link href="#" className="block py-1">
                                    Velas
                                </Link>
                                <Link href="#" className="block py-1">
                                    Sabonetes
                                </Link>
                                <Link href="#" className="block py-1">
                                    Difusores
                                </Link>
                            </div>
                        </div>
                        <Link href="/sobre" className="block py-2 font-medium">
                            Sobre
                        </Link>
                        <Link href="/contato" className="block py-2 font-medium">
                            Contato
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
