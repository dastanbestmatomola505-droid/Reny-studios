import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useState } from 'react';

const images = [
  {
    url: 'https://i.im.ge/eGWutW/imagem_2026-04-24_170903848.png',
    title: 'Destaque Reny Studios',
    category: 'Maquiagem'
  },
  {
    url: 'https://i.im.ge/eGWIsy/627402708_1432817085060414_4411493270020131104_n.jpg',
    title: 'Design de Unhas',
    category: 'Unhas'
  },
  {
    url: 'https://i.im.ge/eGW74J/641343314_1451659256509530_8941581731746891009_n.jpg',
    title: 'Maquiagem Profissional',
    category: 'Maquiagem'
  },
  {
    url: 'https://i.im.ge/eGW2jc/600335158_1394787572196699_6376211598992056933_n.jpg',
    title: 'Unhas Personalizadas',
    category: 'Unhas'
  },
  {
    url: 'https://i.im.ge/eGW1OT/586591624_1377336967275093_3934891764943875463_n.jpg',
    title: 'Maquiagem de Luxo',
    category: 'Maquiagem'
  },
  {
    url: 'https://i.im.ge/eGWqTG/610734190_1407930057549117_8262855627853587791_n.jpg',
    title: 'Makeup Glamour',
    category: 'Maquiagem'
  },
  {
    url: 'https://i.im.ge/eGstlr/660145814_1480740873601368_2736969289413482873_n.jpg',
    title: 'Unhas Artísticas',
    category: 'Unhas'
  },
  {
    url: 'https://i.im.ge/eGsvSX/677184520_1493335015675287_6162904726868714488_n.jpg',
    title: 'Maquiagem Elegante',
    category: 'Maquiagem'
  },
  {
    url: 'https://i.im.ge/eGsCeT/611289649_1411457153863074_1784877318717296565_n.jpg',
    title: 'Nail Art Design',
    category: 'Unhas'
  },
  {
    url: 'https://i.im.ge/eGsJ68/486181522_1184712499870875_6587990917239296048_n.jpg',
    title: 'Maquiagem Noiva',
    category: 'Maquiagem'
  },
  {
    url: 'https://i.im.ge/eGaISG/484421213_1179002100441915_5775174070279409429_n.jpg',
    title: 'Brilho e Estilo',
    category: 'Unhas'
  },
  {
    url: 'https://i.im.ge/eGaUfa/492699511_1206421324366659_1592513396085249767_n.jpg',
    title: 'Maquiagem Premium',
    category: 'Maquiagem'
  },
  {
    url: 'https://i.im.ge/eGasIT/674222226_1493335035675285_4064313161357431461_n.jpg',
    title: 'Maquiagem Elegante',
    category: 'Maquiagem'
  },
  {
    url: 'https://i.im.ge/eGaaEc/647212505_1457966449212144_878397058647073715_n.jpg',
    title: 'Visual Makeup',
    category: 'Maquiagem'
  },
  {
    url: 'https://i.im.ge/eGa7JL/676290465_1494307755578013_6541006664551199875_n.jpg',
    title: 'Maquiagem Artística',
    category: 'Maquiagem'
  },
  {
    url: 'https://i.im.ge/eGaLNx/485741609_1183008923374566_1454175345575588681_n.jpg',
    title: 'Unhas Elegantes',
    category: 'Unhas'
  },
  {
    url: 'https://i.im.ge/eGa05y/493022889_1206424151033043_3679903897510220395_n.jpg',
    title: 'Sombra e Foco',
    category: 'Maquiagem'
  },
  {
    url: 'https://i.im.ge/eGa58S/550084467_1321255936216530_5302263014243364755_n.jpg',
    title: 'Nail Studio Art',
    category: 'Unhas'
  },
  {
    url: 'https://i.im.ge/eGamI6/584637143_1373013331040790_3715680473122184877_n.jpg',
    title: 'Makeup Noite',
    category: 'Maquiagem'
  },
  {
    url: 'https://i.im.ge/eGawxF/602337949_1397713508570772_4374212888308180858_n.jpg',
    title: 'Destaque Unhas',
    category: 'Unhas'
  },
  {
    url: 'https://i.im.ge/eGa6JK/602317382_1397713515237438_3568758299205993855_n.jpg',
    title: 'Maquiagem Marcante',
    category: 'Maquiagem'
  }
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<null | typeof images[0]>(null);

  const [loadedImages, setLoadedImages] = useState<{ [key: number]: boolean }>({});

  const handleImageLoad = (index: number) => {
    setLoadedImages(prev => ({ ...prev, [index]: true }));
  };

  return (
    <section id="galeria" className="py-24 bg-salon-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4 tracking-tight">
              NOSSA <span className="text-salon-pink">GALERIA</span>
            </h2>
            <div className="w-24 h-1 bg-salon-gold mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto uppercase text-xs tracking-widest font-bold">
              Trabalhos Reais, Resultados Extraordinários
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: (index % 3) * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
              viewport={{ once: true, margin: "-100px" }}
              onClick={() => setSelectedImage(img)}
              className="relative group h-48 sm:h-64 md:h-80 rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-salon-pink/20 transition-all bg-white/5"
            >
              <AnimatePresence>
                {!loadedImages[index] && (
                  <motion.div 
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-white/5 animate-pulse flex items-center justify-center z-10"
                  >
                    <div className="w-8 h-8 border-2 border-salon-pink/20 border-t-salon-pink rounded-full animate-spin"></div>
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.img
                animate={{ 
                  y: [0, -5, 0],
                  opacity: loadedImages[index] ? 1 : 0 
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: index * 0.2
                }}
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                onLoad={() => handleImageLoad(index)}
                initial={{ opacity: 0 }}
                style={{ transition: 'opacity 0.5s ease-in-out' }}
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4 text-center">
                <span className="text-salon-gold text-[8px] md:text-[10px] font-bold tracking-[0.3em] uppercase mb-1">
                  {img.category}
                </span>
                <h4 className="text-white font-playfair text-sm md:text-xl font-bold">{img.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-8 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 md:-right-12 text-white hover:text-salon-pink transition-colors p-2"
              >
                <X size={40} strokeWidth={1.5} />
              </button>
              
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-full h-full object-contain rounded-lg shadow-2xl shadow-salon-pink/10"
                referrerPolicy="no-referrer"
                decoding="async"
              />
              
              <div className="mt-6 text-center">
                <span className="text-salon-gold text-xs font-bold tracking-[0.4em] uppercase block mb-2">
                  {selectedImage.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-playfair text-white font-bold">{selectedImage.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
