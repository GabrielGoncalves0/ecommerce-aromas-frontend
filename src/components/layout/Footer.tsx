import Link from 'next/link'
import { Icon } from '@iconify/react'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { Heading } from '@/components/ui/heading'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Bath, Flame, Leaf, Mail, MapPin, Phone } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-slate-800 to-slate-900 text-white">
      {/* Main Footer */}
      <Section padding="sm" className="border-b border-slate-700/30 bg-transparent">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Brand Section */}
            <div className="space-y-4 lg:space-y-6 sm:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-2 lg:space-x-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-xl bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center shadow-lg flex-shrink-0">
                  <Icon icon="lucide:flower" className="w-4 h-4 sm:w-5 sm:h-5 lg:w-7 lg:h-7 text-white" />
                </div>
                <span className="text-base sm:text-lg lg:text-2xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  Aromas Noor
                </span>
              </div>
              <p className="text-blue-200 leading-relaxed text-xs sm:text-sm lg:text-base">
                Transformando ambientes através de fragrâncias exclusivas e naturais,
                criadas com amor e dedicação artesanal.
              </p>
              
              {/* Newsletter */}
              <div className="space-y-2 lg:space-y-3">
                <h4 className="font-semibold text-white text-xs sm:text-sm lg:text-base">Newsletter</h4>
                <p className="text-xs text-blue-200">Receba ofertas exclusivas</p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <Input
                    type="email"
                    placeholder="Seu e-mail"
                    className="flex-1 bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 h-9 sm:h-10 text-xs sm:text-sm"
                  />
                  <Button size="sm" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 w-full sm:w-auto text-xs sm:text-sm">
                    Enviar
                  </Button>
                </div>
              </div>
              
              {/* Redes Sociais */}
              <div className="space-y-2 lg:space-y-3">
                <h4 className="font-semibold text-white text-xs sm:text-sm lg:text-base">Redes Sociais</h4>
                <div className="flex space-x-2">
                  <a href="#" className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-slate-700/50 rounded-lg flex items-center justify-center hover:bg-blue-500/30 hover:scale-110 transition-all duration-300">
                    <Icon icon="mdi:instagram" className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-blue-100" />
                  </a>
                  <a href="#" className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-slate-700/50 rounded-lg flex items-center justify-center hover:bg-blue-500/30 hover:scale-110 transition-all duration-300">
                    <Icon icon="mdi:facebook" className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-blue-100" />
                  </a>
                  <a href="#" className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-slate-700/50 rounded-lg flex items-center justify-center hover:bg-blue-500/30 hover:scale-110 transition-all duration-300">
                    <Icon icon="mdi:whatsapp" className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-blue-100" />
                  </a>
                  <a href="#" className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-slate-700/50 rounded-lg flex items-center justify-center hover:bg-blue-500/30 hover:scale-110 transition-all duration-300">
                    <Icon icon="mdi:youtube" className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-blue-100" />
                  </a>
                </div>
              </div>
            </div>

            {/* Produtos */}
            <div className="space-y-6">
              <Heading level={4} className="text-white">
                Produtos
              </Heading>
              <ul className="space-y-3">
                <li>
                  <Link href="/produtos/velas" className="text-blue-200 hover:text-white transition-colors flex items-center space-x-2 group">
                    <Flame className="w-4 h-4 text-orange-400 group-hover:scale-110 transition-transform" />
                    <span>Velas Aromáticas</span>
                  </Link>
                </li>
                <li>
                  <Link href="/produtos/sabonetes" className="text-blue-200 hover:text-white transition-colors flex items-center space-x-2 group">
                    <Bath className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
                    <span>Sabonetes Artesanais</span>
                  </Link>
                </li>
                <li>
                  <Link href="/produtos/difusores" className="text-blue-200 hover:text-white transition-colors flex items-center space-x-2 group">
                    <Leaf className="w-4 h-4 text-green-400 group-hover:scale-110 transition-transform" />
                    <span>Difusores de Ambiente</span>
                  </Link>
                </li>
                <li>
                  <Link href="/ofertas" className="text-orange-400 hover:text-orange-300 transition-colors font-medium">
                    ⭐ Ofertas Especiais
                  </Link>
                </li>
              </ul>
            </div>

            {/* Atendimento */}
            <div className="space-y-6">
              <Heading level={4} className="text-white">
                Atendimento
              </Heading>
              <ul className="space-y-3">
                <li>
                  <Link href="/minha-conta" className="text-blue-200 hover:text-white transition-colors">
                    Minha Conta
                  </Link>
                </li>
                <li>
                  <Link href="/meus-pedidos" className="text-blue-200 hover:text-white transition-colors">
                    Meus Pedidos
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-blue-200 hover:text-white transition-colors">
                    Perguntas Frequentes
                  </Link>
                </li>
                <li>
                  <Link href="/contato" className="text-blue-200 hover:text-white transition-colors">
                    Fale Conosco
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contato */}
            <div className="space-y-6">
              <Heading level={4} className="text-white">
                Contato
              </Heading>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span className="text-blue-200">(11) 99999-9999</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span className="text-blue-200">contato@aromasnoor.com</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-blue-400 mt-1" />
                  <div className="text-blue-200">
                    <p>São Paulo, SP</p>
                    <p>CEP: 01234-567</p>
                  </div>
                </div>
              </div>

              {/* Formas de Pagamento */}
              <div className="space-y-3">
                <h4 className="font-semibold text-white">Formas de Pagamento</h4>
                <div className="flex flex-wrap gap-2">
                  <div className="w-10 h-7 bg-white rounded flex items-center justify-center">
                    <Icon icon="logos:visa" className="w-7 h-4" />
                  </div>
                  <div className="w-10 h-7 bg-white rounded flex items-center justify-center">
                    <Icon icon="logos:mastercard" className="w-7 h-4" />
                  </div>
                  <div className="w-10 h-7 bg-white rounded flex items-center justify-center">
                    <Icon icon="simple-icons:pix" className="w-5 h-5 text-green-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Bottom Footer */}
      <Section padding="xs" className="bg-slate-900/80">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-blue-300 text-sm">
                © {currentYear} Aromas Noor. Todos os direitos reservados.
              </p>
              <div className="flex items-center space-x-1 text-xs text-blue-300">
                <span>CNPJ: 12.345.678/0001-90</span>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end items-center gap-4 text-sm">
              <Link href="/politica-privacidade" className="text-blue-300 hover:text-white transition-colors">
                Privacidade
              </Link>
              <span className="text-slate-600">|</span>
              <Link href="/termos-uso" className="text-blue-300 hover:text-white transition-colors">
                Termos de Uso
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </footer>
  )
}

export default Footer
