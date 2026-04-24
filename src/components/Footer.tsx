import { Instagram, Facebook, Phone, MapPin, Clock, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contactos" className="bg-black py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
          {/* Brand */}
          <div className="space-y-6">
            <span className="text-2xl font-playfair font-bold text-white">
              Reny <span className="text-salon-pink">Studios</span>
            </span>
            <p className="text-gray-500 text-sm max-w-xs mx-auto md:mx-0">
              O seu destino premium para beleza e bem-estar. Profissionalismo e elegância em cada detalhe.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://instagram.com/renystudios" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-salon-pink hover:border-salon-pink transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://www.facebook.com/reny.jaime.33" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-salon-pink hover:border-salon-pink transition-colors">
                <Facebook size={18} />
              </a>
              <a href="https://wa.me/258867858176" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-salon-pink hover:border-salon-pink transition-colors" title="WhatsApp">
                <MessageCircle size={18} />
              </a>
              <a href="tel:+258867858176" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-salon-pink hover:border-salon-pink transition-colors" title="Ligar Agora">
                <Phone size={18} />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-salon-gold font-bold tracking-widest text-xs uppercase">Contactos</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-center justify-center md:justify-start gap-3">
                <Phone size={16} className="text-salon-pink" />
                <a href="tel:+258867858176" className="hover:text-salon-gold transition-colors font-semibold">+258 86 785 8176</a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                <MessageCircle size={16} className="text-salon-pink" />
                <a href="https://wa.me/258867858176" target="_blank" rel="noopener noreferrer" className="hover:text-salon-gold transition-colors font-semibold">WhatsApp</a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                <MapPin size={16} className="text-salon-pink" />
                <span>Machava Socimol - Paragem de Pinheiros</span>
              </li>
              <li className="flex items-start justify-center md:justify-start gap-3">
                <Clock size={16} className="text-salon-pink mt-1" />
                <div>
                  <p>Seg - Sáb: 10:00 - 18:30</p>
                  <p className="text-salon-gold font-bold mt-1">Quartas: 08:00 - 18:00</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div className="space-y-6">
             <h4 className="text-salon-gold font-bold tracking-widest text-xs uppercase">Menu</h4>
             <div className="grid grid-cols-2 gap-4 text-sm text-gray-400">
                <a href="#" className="hover:text-salon-pink">Início</a>
                <a href="#" className="hover:text-salon-pink">Serviços</a>
                <a href="#" className="hover:text-salon-pink">Sobre Nós</a>
                <a href="#" className="hover:text-salon-pink">Galeria</a>
                <a href="#" className="hover:text-salon-pink">Cursos</a>
                <a href="#" className="hover:text-salon-pink">Contactos</a>
             </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 text-center text-gray-600 text-[10px] tracking-widest uppercase">
          © 2024 RENY STUDIOS. TODOS OS DIREITOS RESERVADOS.
        </div>
      </div>
    </footer>
  );
}
