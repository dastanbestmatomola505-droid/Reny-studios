import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Full Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://i.im.ge/eGs1GF/ChatGPT_Image_22_de_abr._de_2026_14_25_39.png"
          alt="Reny Studios Background"
          className="w-full h-full object-cover object-[85%_center] md:object-[90%_center] scale-110"
          referrerPolicy="no-referrer"
          fetchPriority="high"
          decoding="sync"
        />
        {/* Dark Overlays for Text Readability */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-salon-dark via-salon-dark/40 to-transparent z-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-20 text-left md:text-center mt-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          <motion.span 
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 }
            }}
            className="text-salon-gold text-[10px] md:text-sm font-black uppercase mb-8 block drop-shadow-[0_0_15px_rgba(212,175,55,0.5)] bg-black/20 backdrop-blur-sm inline-block px-4 md:px-6 py-2 rounded-full border border-salon-gold/30 tracking-[0.5em]"
          >
            Bem-vinda ao Luxo
          </motion.span>
          
          <motion.h1 
            className="text-6xl md:text-8xl lg:text-[10rem] font-playfair font-bold leading-[0.8] mb-8 text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)] flex flex-wrap md:justify-center items-center"
          >
            <div className="flex">
              {"Reny".split("").map((char, index) => (
                <motion.span
                  key={`reny-${index}`}
                  variants={{
                    hidden: { opacity: 0, scale: 0.5 },
                    visible: { opacity: 1, scale: 1 }
                  }}
                  transition={{ duration: 0.1 }}
                >
                  {char}
                </motion.span>
              ))}
            </div>
            <span className="mx-4 md:mx-8"></span>
            <div className="flex text-salon-pink italic">
              {"Studios".split("").map((char, index) => (
                <motion.span
                  key={`studios-${index}`}
                  variants={{
                    hidden: { opacity: 0, scale: 0.5 },
                    visible: { opacity: 1, scale: 1 }
                  }}
                  transition={{ duration: 0.1 }}
                >
                  {char}
                </motion.span>
              ))}
            </div>
          </motion.h1>
          
          <motion.p 
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            className="text-gray-200 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-light drop-shadow-md"
          >
            Onde a excelência encontra a sofisticação. Reny Studios — transformando beleza em arte todos os dias.
          </motion.p>
          
          <motion.div 
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 }
            }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{ 
                boxShadow: ["0px 0px 0px rgba(139, 92, 246, 0)", "0px 0px 30px rgba(139, 92, 246, 0.4)", "0px 0px 0px rgba(139, 92, 246, 0)"],
                y: [0, -5, 0]
              }}
              transition={{ 
                boxShadow: { duration: 2, repeat: Infinity },
                y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
              href={`https://wa.me/258867858176?text=${encodeURIComponent('Olá Reny Studios! ✨ Desejo realçar a minha beleza com um toque de perfeição. Vi o vosso site e fiquei encantada com o vosso trabalho de excelência. Gostaria de agendar um atendimento exclusivo. Quando podemos fazer a marcação? (Vim pelo site)')}`} 
              target="_blank"
              className="bg-salon-pink text-white px-12 py-5 font-bold tracking-widest hover:bg-white hover:text-salon-pink transition-all transform shadow-2xl uppercase text-xs block text-center min-w-[280px] relative overflow-hidden group border border-transparent hover:border-salon-pink"
            >
              <span className="relative z-10">AGENDAR AGORA</span>
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
            </motion.a>
            <motion.a 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              href="#servicos" 
              className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-12 py-5 font-bold tracking-widest hover:bg-white hover:text-salon-dark transition-all transform uppercase text-xs block text-center min-w-[250px]"
            >
              NOSSOS SERVIÇOS
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Dynamic Particles or Shimmer Background */}
      <motion.div 
        animate={{ 
          opacity: [0.1, 0.3, 0.1],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-1/2 -left-1/2 w-full h-full bg-salon-gold/5 rounded-full blur-[120px] pointer-events-none"
      />
    </section>
  );
}
