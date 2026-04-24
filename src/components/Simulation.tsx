import { motion } from 'framer-motion';
import { Eye, Sparkles } from 'lucide-react';

export default function Simulation() {
  return (
    <section id="simulacao" className="py-24 bg-salon-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Pane - Simulation View */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[600px] rounded-[3rem] overflow-hidden group shadow-3xl border border-white/10"
          >
            <img 
              src="https://i.im.ge/eGsJ68/486181522_1184712499870875_6587990917239296048_n.jpg"
              alt="Simulação Maquiagem Noiva"
              className="w-full h-full object-cover object-[center_30%] scale-125 transform group-hover:scale-135 transition-transform duration-1000"
              referrerPolicy="no-referrer"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-salon-dark via-transparent to-transparent opacity-60"></div>
            
            <div className="absolute bottom-8 left-8 right-8 p-6 bg-black/40 backdrop-blur-md rounded-xl border border-white/10">
              <span className="text-salon-gold text-[10px] font-bold tracking-[0.3em] uppercase mb-2 block">Exemplo Real</span>
              <h4 className="text-white font-playfair text-xl font-bold uppercase tracking-wider">Visualização de Resultado Profissional</h4>
            </div>
          </motion.div>

          {/* Content Pane */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4 text-salon-gold">
              <Eye size={32} />
              <span className="text-xs font-bold tracking-[0.4em] uppercase">Simulação Corretiva & Médica</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-playfair font-bold leading-tight">
              Recupere a sua <span className="text-salon-pink">Autoestima</span> com Camuflagem Profissional
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed">
              Especializamo-nos em simulações para camuflagem de cicatrizes e imperfeições fisionómicas. Visualize como a maquiagem corretiva e técnicas de design podem transformar o seu visual, trazendo harmonia e confiança.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4 p-6 bg-salon-card rounded-xl border border-white/5 hover:border-salon-pink/30 transition-all">
                <Sparkles className="text-salon-pink shrink-0" />
                <div>
                  <h4 className="text-white font-bold uppercase text-sm mb-1">Precisão Estética</h4>
                  <p className="text-gray-500 text-sm">Cada traço é planeado para harmonizar com a sua fisionomia e estilo pessoal.</p>
                </div>
              </div>
              <div className="flex gap-4 p-6 bg-salon-card rounded-xl border border-white/5 hover:border-salon-gold/30 transition-all">
                <Sparkles className="text-salon-gold shrink-0" />
                <div>
                  <h4 className="text-white font-bold uppercase text-sm mb-1">Consultoria Personalizada</h4>
                  <p className="text-gray-500 text-sm">Nossos especialistas ajudam-na a escolher a paleta perfeita para o seu evento.</p>
                </div>
              </div>
            </div>

            <motion.div 
               animate={{ y: [0, -5, 0] }}
               transition={{ duration: 2, repeat: Infinity }}
               className="inline-flex flex-col items-start gap-1"
            >
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div>
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest block mb-1">Apenas</span>
                  <span className="text-3xl font-bold text-white">750 MT</span>
                </div>
                <motion.a
                   whileHover={{ scale: 1.05 }}
                   whileTap={{ scale: 0.95 }}
                   animate={{ 
                     boxShadow: ["0px 0px 0px rgba(236, 72, 153, 0)", "0px 0px 25px rgba(236, 72, 153, 0.5)", "0px 0px 0px rgba(236, 72, 153, 0)"]
                   }}
                   transition={{ 
                     boxShadow: { duration: 2, repeat: Infinity }
                   }}
                   href={`https://wa.me/258867858176?text=${encodeURIComponent('Olá Reny Studios! ✨ Tenho muito interesse na vossa Consultoria de Simulação Médica/Corretiva. Gostaria de agendar uma avaliação para recuperar a minha autoestima. Quando podemos fazer a marcação? (Vim pelo site)')}`}
                   target="_blank"
                   className="inline-block bg-salon-pink text-white px-12 py-5 font-bold tracking-widest uppercase text-xs rounded-sm shadow-xl shadow-salon-pink/20 relative overflow-hidden group"
                >
                  <span className="relative z-10">SOLICITAR CONSULTA AGORA</span>
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Accents */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-salon-pink/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-salon-gold/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
    </section>
  );
}
