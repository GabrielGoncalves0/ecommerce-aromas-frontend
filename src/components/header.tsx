'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { IconButton, Badge, ProductCard } from './ui'

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
                                    <ProductCard 
                                        href="/produtos/velas"
                                        icon="mdi:candle"
                                        title="Velas"
                                        description="Fragrâncias exclusivas"
                                    />
                                    <ProductCard 
                                        href="/produtos/sabonetes"
                                        icon="mdi:soap"
                                        title="Sabonetes"
                                        description="Aromaterapia natural"
                                    />
                                    <ProductCard 
                                        href="/produtos/difusores"
                                        icon="mdi:air-humidifier"
                                        title="Difusores"
                                        description="Para ambientes"
                                    />
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
                        <IconButton>
                            <Icon icon="mdi:magnify" width="25" height="25" />
                        </IconButton>
                        <div className="relative">
                            <IconButton>
                                <Icon icon="mdi:cart-outline" width="25" height="25" />
                            </IconButton>
                            <Badge className="absolute -top-2 -right-2" variant="primary">
                                99+
                            </Badge>
                        </div>
                        <IconButton>
                            <Icon icon="ri:user-line" width="25" height="25" />
                        </IconButton>
                    </div>

                    {/* Mobile Menu Button and Actions */}
                    <div className="md:hidden flex items-center space-x-3">
                        {/* Mobile Actions */}
                        <div className="relative">
                            <IconButton size="sm">
                                <Icon icon="mdi:cart-outline" width="24" height="24" />
                            </IconButton>
                            <Badge size="sm" className="absolute -top-2 -right-2" variant="primary">
                                2
                            </Badge>
                        </div>
                        <IconButton size="sm">
                            <Icon icon="ri:user-line" width="24" height="24" />
                        </IconButton>
                        {/* Mobile Menu Button */}
                        <IconButton size="sm" onClick={toggleMobileMenu}>
                            <Icon icon={isMobileMenuOpen ? 'mdi:close' : 'mdi:menu'} width="24" height="24" />
                        </IconButton>
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
                                <Link href="/produtos/velas" className="block py-1">
                                    Velas
                                </Link>
                                <Link href="/produtos/sabonetes" className="block py-1">
                                    Sabonetes
                                </Link>
                                <Link href="/produtos/difusores" className="block py-1">
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
