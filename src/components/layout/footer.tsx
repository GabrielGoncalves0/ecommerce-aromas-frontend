import Link from 'next/link'
import { Icon } from '@iconify/react'
import { Container, Grid, Heading } from '../ui'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-primary-800 to-primary-900 text-white">
      {/* Main Footer */}
      <div className="py-16 border-b border-primary-700/30">
        <Container>
          <Grid cols={4} gap="xl" responsive>
            {/* Brand Section */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-400 to-accent flex items-center justify-center shadow-lg">
                  <Icon icon="mdi:flower" width="28" height="28" className="text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-white to-primary-200 bg-clip-text text-transparent">
                  Aromas Noor
                </span>
              </div>
              <p className="text-primary-200 leading-relaxed">
                Transformando ambientes através de fragrâncias exclusivas e naturais,
                criadas com amor e dedicação artesanal.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 bg-primary-700/50 rounded-full flex items-center justify-center hover:bg-primary-500/30 hover:scale-120 transition-transform duration-300">
                  <Icon icon="mdi:instagram" width="24" height="24" className="text-primary-100" />
                </a>
                <a href="#" className="w-12 h-12 bg-primary-700/50 rounded-full flex items-center justify-center hover:bg-primary-500/30 hover:scale-120 transition-transform duration-300">
                  <Icon icon="mdi:facebook" width="24" height="24" className="text-primary-100" />
                </a>
                <a href="#" className="w-12 h-12 bg-primary-700/50 rounded-full flex items-center justify-center hover:bg-primary-500/30 hover:scale-120 transition-transform duration-300">
                  <Icon icon="mdi:whatsapp" width="24" height="24" className="text-primary-100" />
                </a>
              </div>
            </div>

            {/* Products */}
            <div className="space-y-6">
              <Heading level={4} color="primary" className="text-white">
                Produtos
              </Heading>
              <ul className="space-y-3">
                <li>
                  <Link href="/produtos/velas" className="text-primary-200 hover:text-white transition-colors flex items-center space-x-2">
                    <Icon icon="ri:candle-line" width="22" height="22" />
                    <span>Velas Aromáticas</span>
                  </Link>
                </li>
                <li>
                  <Link href="/produtos/difusores" className="text-primary-200 hover:text-white transition-colors flex items-center space-x-2">
                    <Icon icon="game-icons:soap" width="22" height="22" />
                    <span>Difusores</span>
                  </Link>
                </li>
                <li>
                  <Link href="/produtos/sabonetes" className="text-primary-200 hover:text-white transition-colors flex items-center space-x-2">
                    <Icon icon="hugeicons:potion" width="22" height="22" />
                    <span>Sabonetes</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-6">
              <Heading level={4} color="primary" className="text-white">
                Empresa
              </Heading>
              <ul className="space-y-3">
                <li>
                  <Link href="/sobre" className="text-primary-200 hover:text-white transition-colors">
                    Nossa História
                  </Link>
                </li>
                <li>
                  <Link href="/contato" className="text-primary-200 hover:text-white transition-colors">
                    Contato
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-primary-200 hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-primary-200 hover:text-white transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <Heading level={4} color="primary" className="text-white">
                Contato
              </Heading>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon icon="mdi:map-marker" width="20" height="20" className="text-primary-300 mt-1" />
                  <div className="text-primary-200">
                    <p>Rua das Fragrâncias, 123</p>
                    <p>São Paulo, SP - 01234-567</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon icon="mdi:phone" width="20" height="20" className="text-primary-300" />
                  <span className="text-primary-200">(11) 9999-9999</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon icon="mdi:email" width="20" height="20" className="text-primary-300" />
                  <span className="text-primary-200">contato@aromasnoor.com</span>
                </div>
              </div>
            </div>
          </Grid>
        </Container>
      </div>

      {/* Bottom Footer */}
      <div className="py-6">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-300 text-sm">
              © {currentYear} Aromas Noor. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/politica-privacidade" className="text-primary-300 hover:text-white transition-colors">
                Política de Privacidade
              </Link>
              <Link href="/termos-uso" className="text-primary-300 hover:text-white transition-colors">
                Termos de Uso
              </Link>
              <Link href="/cookies" className="text-primary-300 hover:text-white transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  )
}

export default Footer
