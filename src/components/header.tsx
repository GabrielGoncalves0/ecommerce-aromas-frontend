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
        <header className="bg-layout/80 backdrop-blur-md border-b border-primary-200/30 sticky top-0 z-50 shadow-sm">
            <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center space-x-3 group logo-link">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
                                <Icon icon="mdi:flower" width="24" height="24" className="text-white" />
                            </div>
                            <span className="text-xl font-bold bg-gradient-to-r from-primary-700 to-accent bg-clip-text text-transparent">
                                Aromas Noor
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/" className="font-medium text-text-primary hover:text-primary-600 transition-colors relative group">
                            Home
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300"></span>
                        </Link>

                        <div className="relative group">
                            <button className="flex items-center space-x-1 font-medium text-text-primary hover:text-primary-600 transition-colors group">
                                <span>Produtos</span>
                                <Icon icon="mdi:chevron-down" width="20" height="20"
                                    className="transition-transform group-hover:rotate-180 duration-300" />
                            </button>

                            {/* Área invisível para manter hover */}
                            <div className="absolute top-full left-0 w-80 h-2 bg-transparent"></div>

                            {/* Dropdown Menu Melhorado */}
                            <div className="absolute top-full left-0 mt-2 w-80 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-primary-200/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 overflow-hidden">
                                <div className="p-4 space-y-1">
                                    <ProductCard
                                        href="/produtos/velas"
                                        icon="ri:candle-line"
                                        iconWidth={30}
                                        iconHeight={30}
                                        title="Velas Aromáticas"
                                        description="Fragrâncias exclusivas e duradouras"
                                        variant="default"
                                    />
                                    <ProductCard
                                        href="/produtos/sabonetes"
                                        icon="game-icons:soap"
                                        iconWidth={30}
                                        iconHeight={30}
                                        title="Sabonetes Artesanais"
                                        description="Aromaterapia natural para o corpo"
                                        variant="default"
                                    />
                                    <ProductCard
                                        href="/produtos/difusores"
                                        icon="hugeicons:potion"
                                        iconWidth={30}
                                        iconHeight={30}
                                        title="Difusores de Ambiente"
                                        description="Transforme qualquer espaço"
                                        variant="default"
                                    />
                                </div>
                            </div>
                        </div>

                        <Link href="/sobre" className="font-medium text-text-primary hover:text-primary-600 transition-colors relative group">
                            Sobre
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300"></span>
                        </Link>
                        <Link href="/contato" className="font-medium text-text-primary hover:text-primary-600 transition-colors relative group">
                            Contato
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300"></span>
                        </Link>
                    </div>

                    {/* Desktop Actions */}
                    <div className="hidden md:flex items-center space-x-4">
                        <IconButton variant="ghost" className="hover:bg-primary-100/50">
                            <Icon icon="mdi:magnify" width="22" height="22" />
                        </IconButton>

                        <div className="relative">
                            <IconButton variant="ghost" className="hover:bg-primary-100/50">
                                <Icon icon="mdi:cart-outline" width="22" height="22" />
                            </IconButton>
                            <Badge className="absolute -top-1 -right-1 min-w-[18px] h-[18px]" variant="primary" size="sm">
                                3
                            </Badge>
                        </div>

                        <IconButton variant="ghost" className="hover:bg-primary-100/50">
                            <Icon icon="mdi:account-outline" width="22" height="22" />
                        </IconButton>
                    </div>

                    {/* Mobile Menu Button and Actions */}
                    <div className="md:hidden flex items-center space-x-2">
                        {/* Mobile Actions */}
                        <div className="relative">
                            <IconButton size="sm" variant="ghost">
                                <Icon icon="mdi:cart-outline" width="20" height="20" />
                            </IconButton>
                            <Badge size="sm" className="absolute -top-1 -right-1" variant="primary">
                                3
                            </Badge>
                        </div>

                        <IconButton size="sm" variant="ghost">
                            <Icon icon="mdi:account-outline" width="20" height="20" />
                        </IconButton>

                        {/* Mobile Menu Button */}
                        <IconButton size="sm" onClick={toggleMobileMenu} variant="ghost">
                            <Icon icon={isMobileMenuOpen ? 'mdi:close' : 'mdi:menu'} width="20" height="20" />
                        </IconButton>
                    </div>
                </div>

                {/* Mobile Menu Melhorado */}
                <div className={`md:hidden border-t border-primary-200/30 bg-white/95 backdrop-blur-md ${!isMobileMenuOpen ? 'hidden' : ''}`}>
                    <div className="py-4 space-y-1">
                        <Link href="/" className="block py-3 px-4 font-medium text-text-primary hover:bg-primary-100/50 rounded-lg mx-2 transition-colors">
                            Home
                        </Link>

                        <div className="mx-2">
                            <button
                                onClick={toggleMobileDropdown}
                                className="w-full flex items-center justify-between py-3 px-4 font-medium text-text-primary hover:bg-primary-100/50 rounded-lg transition-colors"
                            >
                                <span>Produtos</span>
                                <Icon
                                    icon={isMobileDropdownOpen ? 'mdi:chevron-up' : 'mdi:chevron-down'}
                                    width="20"
                                    height="20"
                                    className="transition-transform duration-300"
                                />
                            </button>

                            <div className={`overflow-hidden transition-all duration-300 ${!isMobileDropdownOpen ? 'max-h-0' : 'max-h-96'}`}>
                                <div className="pl-4 py-2 space-y-1">
                                    <Link href="/produtos/velas" className="block py-2 px-4 text-text-secondary hover:text-primary-600 hover:bg-primary-50/50 rounded-lg transition-colors">
                                        Velas Aromáticas
                                    </Link>
                                    <Link href="/produtos/sabonetes" className="block py-2 px-4 text-text-secondary hover:text-primary-600 hover:bg-primary-50/50 rounded-lg transition-colors">
                                        Sabonetes Artesanais
                                    </Link>
                                    <Link href="/produtos/difusores" className="block py-2 px-4 text-text-secondary hover:text-primary-600 hover:bg-primary-50/50 rounded-lg transition-colors">
                                        Difusores de Ambiente
                                    </Link>
                                    <Link href="/produtos/oleos" className="block py-2 px-4 text-text-secondary hover:text-primary-600 hover:bg-primary-50/50 rounded-lg transition-colors">
                                        Óleos Essenciais
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <Link href="/sobre" className="block py-3 px-4 font-medium text-text-primary hover:bg-primary-100/50 rounded-lg mx-2 transition-colors">
                            Sobre
                        </Link>
                        <Link href="/contato" className="block py-3 px-4 font-medium text-text-primary hover:bg-primary-100/50 rounded-lg mx-2 transition-colors">
                            Contato
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
