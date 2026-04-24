import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const navLinks = [
  { name: 'INÍCIO', href: '#inicio' },
  { name: 'SERVIÇOS', href: '#servicos' },
  { name: 'CURSOS', href: '#cursos' },
  { name: 'GALERIA', href: '#galeria' },
  { name: 'AGENDAMENTO', href: '#agendamento' },
  { name: 'CONTACTOS', href: '#contactos' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-salon-dark/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-playfair font-bold text-white">
              Reny <span className="text-salon-pink underline decoration-salon-gold/50">Studios</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-semibold tracking-widest text-gray-300 hover:text-salon-pink transition-colors"
              >
                {link.name}
              </a>
            ))}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{ 
                boxShadow: ["0px 0px 0px rgba(236, 72, 153, 0)", "0px 0px 15px rgba(236, 72, 153, 0.4)", "0px 0px 0px rgba(236, 72, 153, 0)"]
              }}
              transition={{ boxShadow: { duration: 2, repeat: Infinity } }}
              href={`https://wa.me/258867858176?text=${encodeURIComponent('Olá Reny Studios! ✨ Desejo realçar a minha beleza com um toque de perfeição. Vi o vosso site e fiquei encantada com o vosso trabalho de excelência. Gostaria de agendar um atendimento exclusivo. Quando podemos fazer a marcação? (Vim pelo site)')}`}
              target="_blank"
              className="bg-salon-pink text-white px-6 py-2.5 rounded-sm text-xs font-bold tracking-widest hover:bg-white hover:text-salon-pink transition-all shadow-lg"
            >
              AGENDAR AGORA
            </motion.a>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-salon-dark border-b border-white/10 px-4 pt-2 pb-6 space-y-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-sm font-semibold tracking-widest text-gray-300 hover:text-salon-pink"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <motion.a 
            whileTap={{ scale: 0.95 }}
            href={`https://wa.me/258867858176?text=${encodeURIComponent('Olá Reny Studios! ✨ Desejo realçar a minha beleza com um toque de perfeição. Vi o vosso site e fiquei encantada com o vosso trabalho de excelência. Gostaria de agendar um atendimento exclusivo. Quando podemos fazer a marcação? (Vim pelo site)')}`}
            target="_blank"
            className="block w-full bg-salon-pink text-white px-6 py-3 rounded-sm text-xs font-bold tracking-widest text-center"
          >
            AGENDAR AGORA
          </motion.a>
        </motion.div>
      )}
    </nav>
  );
}
