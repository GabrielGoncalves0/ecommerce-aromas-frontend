'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Flower, ChevronDown, Search, ShoppingCart, User, Menu, X, Flame, Leaf, Bath, Phone, Truck, Shield, Heart, Star } from 'lucide-react'
import { Icon } from '@iconify/react'
import { IconButton } from '@/components/ui/icon-button'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Container } from '@/components/ui/container'
import { DropdownMenuItem } from '@/components/navigation'

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false)
    const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')
    const accountDropdownRef = useRef<HTMLDivElement>(null)

    // Fechar dropdown da conta quando clicar fora
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (accountDropdownRef.current && !accountDropdownRef.current.contains(event.target as Node)) {
                setIsAccountDropdownOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    const toggleMobileDropdown = () => {
        setIsMobileDropdownOpen(!isMobileDropdownOpen)
    }

    const toggleAccountDropdown = () => {
        setIsAccountDropdownOpen(!isAccountDropdownOpen)
    }

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault()
        if (searchQuery.trim()) {
            // Aqui você implementaria a lógica de busca
            console.log('Buscar por:', searchQuery)
        }
    }

    return (
        <div>
        <header className="bg-background/80 backdrop-blur-md border-b border-border sticky top-0 z-50 shadow-sm">
            <Container size="xl">
                {/* Primeira linha - Logo, Busca, Ações */}
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center space-x-3 group logo-link">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
                                <Flower className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-xl font-bold bg-gradient-to-r from-blue-700 to-purple-600 bg-clip-text text-transparent">
                                Aromas Noor
                            </span>
                        </Link>
                    </div>

                    {/* Barra de Busca - Desktop */}
                    <div className="hidden md:flex flex-1 max-w-2xl mx-8">
                        <form onSubmit={handleSearch} className="w-full relative">
                            <Input
                                type="text"
                                placeholder="Buscar velas, sabonetes, difusores..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="h-12 pl-4 pr-12 rounded-xl bg-background/50 backdrop-blur-sm"
                            />
                            <Button
                                type="submit"
                                variant="ghost"
                                size="icon"
                                className="absolute right-1 top-1/2 -translate-y-1/2 h-10 w-10"
                            >
                                <Search className="w-5 h-5" />
                            </Button>
                        </form>
                    </div>

                    {/* Desktop Actions */}
                    <div className="hidden md:flex items-center space-x-4">
                        {/* Favoritos */}
                        <div className="relative">
                            <IconButton variant="ghost" className="hover:bg-muted">
                                <Heart className="size-6" />
                            </IconButton>
                            <Badge className="absolute -top-1 -right-1 min-w-[18px] h-[18px] text-xs" variant="secondary">
                                2
                            </Badge>
                        </div>

                        {/* Carrinho */}
                        <div className="relative">
                            <IconButton variant="ghost" className="hover:bg-muted">
                                <ShoppingCart className="size-6" />
                            </IconButton>
                            <Badge className="absolute -top-1 -right-1 min-w-[18px] h-[18px] text-xs" variant="default">
                                3
                            </Badge>
                        </div>

                        {/* Conta com Dropdown */}
                        <div className="relative" ref={accountDropdownRef}>
                            <IconButton 
                                variant="ghost" 
                                className="hover:bg-muted"
                                onClick={toggleAccountDropdown}
                            >
                                <User className="size-6" />
                            </IconButton>
                            
                            {isAccountDropdownOpen && (
                                <div className="absolute right-0 top-full mt-2 w-64 bg-background rounded-2xl shadow-xl border border-border z-50">
                                    <div className="p-4">
                                        <div className="mb-4">
                                            <p className="font-medium text-foreground">Olá, visitante!</p>
                                            <p className="text-sm text-muted-foreground">Faça login para ver seus pedidos</p>
                                        </div>
                                        <div className="space-y-2">
                                            <Link href="/login" className="block w-full">
                                                <Button className="w-full" size="sm">
                                                    Entrar
                                                </Button>
                                            </Link>
                                            <Link href="/cadastro" className="block w-full">
                                                <Button variant="outline" className="w-full" size="sm">
                                                    Criar conta
                                                </Button>
                                            </Link>
                                        </div>
                                        <hr className="my-3 border-border" />
                                        <div className="space-y-1">
                                            <Link href="/meus-pedidos" className="block py-2 px-3 text-sm text-muted-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors">
                                                Meus Pedidos
                                            </Link>
                                            <Link href="/favoritos" className="block py-2 px-3 text-sm text-muted-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors">
                                                Lista de Desejos
                                            </Link>
                                            <Link href="/perfil" className="block py-2 px-3 text-sm text-muted-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors">
                                                Meu Perfil
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Mobile Menu Button and Actions */}
                    <div className="md:hidden flex items-center space-x-2">
                        {/* Busca Mobile */}
                        <IconButton size="sm" variant="ghost">
                            <Search className="w-5 h-5" />
                        </IconButton>

                        {/* Mobile Actions */}
                        <div className="relative">
                            <IconButton size="sm" variant="ghost">
                                <ShoppingCart className="w-5 h-5" />
                            </IconButton>
                            <Badge className="absolute -top-1 -right-1 text-xs" variant="default">
                                3
                            </Badge>
                        </div>

                        <IconButton size="sm" variant="ghost">
                            <User className="w-5 h-5" />
                        </IconButton>

                        {/* Mobile Menu Button */}
                        <IconButton size="sm" onClick={toggleMobileMenu} variant="ghost">
                            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </IconButton>
                    </div>
                </div>

                {/* Segunda linha - Navegação Desktop */}
                <div className="hidden md:flex items-center justify-center py-3 border-t border-border">
                    <nav className="flex items-center space-x-8">
                        <Link href="/ofertas" className="flex items-center space-x-1 font-medium text-orange-600 hover:text-orange-700 transition-colors relative group">
                            <Star className="w-4 h-4" />
                            <span>Ofertas</span>
                        </Link>

                        <Link href="/lancamentos" className="font-medium text-foreground hover:text-primary transition-colors relative group">
                            Lançamentos
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                        </Link>

                        <div className="relative group">
                            <button className="flex items-center space-x-1 font-medium text-foreground hover:text-primary transition-colors group">
                                <span>Produtos</span>
                                <ChevronDown className="w-5 h-5 transition-transform group-hover:rotate-180 duration-300" />
                            </button>

                            <div className="absolute top-full left-0 mt-2 w-80 bg-background rounded-2xl shadow-xl border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 overflow-hidden">
                                <div className="p-3 space-y-2">
                                    <DropdownMenuItem
                                        href="/produtos/velas"
                                        icon={<Flame className="w-8 h-8 text-orange-400" />}
                                        title="Velas Aromáticas"
                                        description="Fragrâncias exclusivas e duradouras"
                                    />
                                    <DropdownMenuItem
                                        href="/produtos/sabonetes"
                                        icon={<Bath className="w-8 h-8 text-blue-400" />}
                                        title="Sabonetes Artesanais"
                                        description="Aromaterapia natural para o corpo"
                                    />
                                    <DropdownMenuItem
                                        href="/produtos/difusores"
                                        icon={<Leaf className="w-8 h-8 text-green-400" />}
                                        title="Difusores de Ambiente"
                                        description="Transforme qualquer espaço"
                                    />
                                </div>
                            </div>
                        </div>

                        <Link href="/mais-vendidos" className="font-medium text-foreground hover:text-primary transition-colors relative group">
                            Mais Vendidos
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                        </Link>

                        <Link href="/sobre" className="font-medium text-foreground hover:text-primary transition-colors relative group">
                            Sobre
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                        </Link>
                        
                        <Link href="/contato" className="font-medium text-foreground hover:text-primary transition-colors relative group">
                            Contato
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                        </Link>
                    </nav>
                </div>

                {/* Mobile Menu */}
                <div className={`md:hidden border-t border-border bg-background/95 backdrop-blur-md ${!isMobileMenuOpen ? 'hidden' : ''}`}>
                    {/* Busca Mobile */}
                    <div className="p-4 border-b border-border">
                        <form onSubmit={handleSearch} className="relative">
                            <Input
                                type="text"
                                placeholder="Buscar produtos..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="h-10 pl-4 pr-10"
                            />
                            <Button
                                type="submit"
                                variant="ghost"
                                size="icon"
                                className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8"
                            >
                                <Search className="w-4 h-4" />
                            </Button>
                        </form>
                    </div>

                    <div className="py-4 space-y-1">
                        <Link href="/" className="block py-3 px-4 font-medium text-foreground hover:bg-muted rounded-lg mx-2 transition-colors">
                            Home
                        </Link>

                        <Link href="/ofertas" className="flex items-center space-x-2 py-3 px-4 font-medium text-orange-600 hover:bg-muted rounded-lg mx-2 transition-colors">
                            <Star className="w-4 h-4" />
                            <span>Ofertas</span>
                        </Link>

                        <div className="mx-2">
                            <button
                                onClick={toggleMobileDropdown}
                                className="w-full flex items-center justify-between py-3 px-4 font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
                            >
                                <span>Produtos</span>
                                <ChevronDown
                                    className={`w-5 h-5 transition-transform duration-300 ${isMobileDropdownOpen ? 'rotate-180' : ''}`}
                                />
                            </button>

                            <div className={`overflow-hidden transition-all duration-300 ${!isMobileDropdownOpen ? 'max-h-0' : 'max-h-96'}`}>
                                <div className="pl-4 py-2 space-y-1">
                                    <Link href="/produtos/velas" className="block py-2 px-4 text-muted-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors">
                                        Velas Aromáticas
                                    </Link>
                                    <Link href="/produtos/sabonetes" className="block py-2 px-4 text-muted-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors">
                                        Sabonetes Artesanais
                                    </Link>
                                    <Link href="/produtos/difusores" className="block py-2 px-4 text-muted-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors">
                                        Difusores de Ambiente
                                    </Link>
                                    <Link href="/produtos/oleos" className="block py-2 px-4 text-muted-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors">
                                        Óleos Essenciais
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <Link href="/mais-vendidos" className="block py-3 px-4 font-medium text-foreground hover:bg-muted rounded-lg mx-2 transition-colors">
                            Mais Vendidos
                        </Link>

                        <Link href="/sobre" className="block py-3 px-4 font-medium text-foreground hover:bg-muted rounded-lg mx-2 transition-colors">
                            Sobre
                        </Link>
                        <Link href="/contato" className="block py-3 px-4 font-medium text-foreground hover:bg-muted rounded-lg mx-2 transition-colors">
                            Contato
                        </Link>
                    </div>
                </div>
            </Container>
        </header>
        </div>
    )
}

export default Header
