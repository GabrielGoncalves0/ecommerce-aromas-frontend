import Link from 'next/link'
import { Icon } from '@iconify/react'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { Grid } from '@/components/ui/grid'
import { Heading } from '@/components/ui/heading'
import { Bath, Flame, Leaf, Mail, MapPin, Phone } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-slate-800 to-slate-900 text-white">
      {/* Main Footer */}
      <Section padding="lg" className="border-b border-slate-700/30 bg-transparent">
        <Container>
          <Grid cols={4} gap="xl" className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand Section */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center shadow-lg">
                  <Icon icon="lucide:flower" className="w-7 h-7 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  Aromas Noor
                </span>
              </div>
              <p className="text-blue-200 leading-relaxed">
                Transformando ambientes através de fragrâncias exclusivas e naturais,
                criadas com amor e dedicação artesanal.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 bg-slate-700/50 rounded-full flex items-center justify-center hover:bg-blue-500/30 hover:scale-110 transition-all duration-300">
                  <Icon icon="mdi:instagram" className="w-6 h-6 text-blue-100" />
                </a>
                <a href="#" className="w-12 h-12 bg-slate-700/50 rounded-full flex items-center justify-center hover:bg-blue-500/30 hover:scale-110 transition-all duration-300">
                  <Icon icon="mdi:facebook" className="w-6 h-6 text-blue-100" />
                </a>
                <a href="#" className="w-12 h-12 bg-slate-700/50 rounded-full flex items-center justify-center hover:bg-blue-500/30 hover:scale-110 transition-all duration-300">
                  <Icon icon="mdi:whatsapp" className="w-6 h-6 text-blue-100" />
                </a>
              </div>
            </div>

            {/* Products */}
            <div className="space-y-6">
              <Heading level={4} className="text-white">
                Produtos
              </Heading>
              <ul className="space-y-3">
                <li>
                  <Link href="/produtos/velas" className="text-blue-200 hover:text-white transition-colors flex items-center space-x-2">
                    <Flame className="w-6 h-6 text-orange-400" />
                    <span>Velas Aromáticas</span>
                  </Link>
                </li>
                <li>
                  <Link href="/produtos/sabonetes" className="text-blue-200 hover:text-white transition-colors flex items-center space-x-2">
                    <Bath className="w-6 h-6 text-blue-400" />
                    <span>Sabonetes</span>
                  </Link>
                </li>
                <li>
                  <Link href="/produtos/difusores" className="text-blue-200 hover:text-white transition-colors flex items-center space-x-2">
                    <Leaf className="w-6 h-6 text-green-400" />
                    <span>Difusores</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-6">
              <Heading level={4} className="text-white">
                Empresa
              </Heading>
              <ul className="space-y-3">
                <li>
                  <Link href="/sobre" className="text-blue-200 hover:text-white transition-colors">
                    Nossa História
                  </Link>
                </li>
                <li>
                  <Link href="/contato" className="text-blue-200 hover:text-white transition-colors">
                    Contato
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-blue-200 hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-blue-200 hover:text-white transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <Heading level={4} className="text-white">
                Contato
              </Heading>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon icon="mdi:map-marker" className="w-6 h-6 text-blue-400" />
                  <div className="text-blue-200">
                    <p>Rua das Fragrâncias, 123</p>
                    <p>São Paulo, SP - 01234-567</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon icon="mdi:phone" className="w-6 h-6 text-blue-400" />
                  <span className="text-blue-200">(11) 9999-9999</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon icon="mdi:email" className="w-6 h-6 text-blue-400" />
                  <span className="text-blue-200">contato@aromasnoor.com</span>
                </div>
              </div>
            </div>
          </Grid>
        </Container>
      </Section>

      {/* Bottom Footer */}
      <Section padding="sm" className="bg-transparent">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-blue-300 text-sm">
              © {currentYear} Aromas Noor. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/politica-privacidade" className="text-blue-300 hover:text-white transition-colors">
                Política de Privacidade
              </Link>
              <Link href="/termos-uso" className="text-blue-300 hover:text-white transition-colors">
                Termos de Uso
              </Link>
              <Link href="/cookies" className="text-blue-300 hover:text-white transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </footer>
  )
}

export default Footer
