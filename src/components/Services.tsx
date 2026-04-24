import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import React, { useState, useRef } from 'react';

const services = [
  {
    title: 'Unhas Personalizadas',
    description: 'Design exclusivo e artesanal adaptado ao seu estilo único.',
    price: 'Sob Consulta',
    image: 'https://i.im.ge/eGstlr/660145814_1480740873601368_2736969289413482873_n.jpg',
  },
  {
    title: 'Unhas com Design à sua escolha',
    description: 'Nail art criativa e personalizada com os designs que você mais ama.',
    price: '600 MT',
    image: 'https://i.im.ge/eGsCeT/611289649_1411457153863074_1784877318717296565_n.jpg',
  },
  {
    title: 'Unhas Simples',
    description: 'Elegância minimalista com acabamento profissional impecável.',
    price: '200 MT',
    image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=2574&auto=format&fit=crop',
  },
  {
    title: 'Sobrancelhas & Pestanas',
    description: 'O seu olhar merece o melhor cuidado profissional.',
    price: '450 MT cada',
    image: 'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?q=80&w=2576&auto=format&fit=crop',
  },
  {
    title: 'Maquiagem (Makeup)',
    description: 'Maquiagem profissional para eventos, casamentos e sessões fotográficas.',
    price: '850 MT',
    image: 'https://i.im.ge/eGsvSX/677184520_1493335015675287_6162904726868714488_n.jpg',
  },
  {
    title: 'Simulação Médica / Corretiva',
    description: 'Camuflagem de cicatrizes e imperfeições com visualização profissional.',
    price: '650 MT',
    image: 'https://i.im.ge/eGsJ68/486181522_1184712499870875_6587990917239296048_n.jpg',
  },
];

interface ServiceItemProps {
  service: {
    title: string;
    description: string;
    price: string;
    image: string;
  };
  index: number;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ service, index }) => {
  const itemRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start end", "end start"]
  });

  const scrollScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={itemRef}
      style={{ opacity }}
      className="bg-salon-card border border-white/5 group hover:border-salon-gold/50 transition-all duration-500 rounded-[2.5rem] overflow-hidden flex flex-col shadow-2xl"
    >
      <div className="relative h-72 sm:h-64 overflow-hidden">
        <motion.img
          style={{ scale: scrollScale }}
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transform group-hover:scale-125 transition-transform duration-700"
          referrerPolicy="no-referrer"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
           <a 
            href="#galeria"
            className="bg-salon-pink text-white px-6 py-2 text-xs font-bold tracking-widest rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform"
           >
            VER NA GALERIA
           </a>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow items-center text-center">
        <h3 className="text-xl font-playfair font-bold mb-3 tracking-wide">{service.title}</h3>
        <p className="text-gray-400 text-sm mb-6 flex-grow">{service.description}</p>
        <div className="flex flex-col items-center">
          <span className="text-gray-500 text-[10px] uppercase tracking-widest mb-1">A partir de</span>
          <span className="text-xl font-bold text-salon-gold mb-4">{service.price}</span>
          <motion.a 
            whileHover={{ scale: 1.05, backgroundColor: '#EC4899', color: 'white' }}
            whileTap={{ scale: 0.95 }}
            animate={{ 
              boxShadow: ["0px 0px 0px rgba(236, 72, 153, 0)", "0px 0px 15px rgba(236, 72, 153, 0.4)", "0px 0px 0px rgba(236, 72, 153, 0)"]
            }}
            transition={{ 
              boxShadow: { duration: 2, repeat: Infinity }
            }}
            href={`https://wa.me/258867858176?text=${encodeURIComponent(`Olá Reny Studios! 👋 Fiquei encantada com os vossos trabalhos e gostaria de agendar um serviço de *${service.title}* para realçar a minha beleza. Quais são os horários disponíveis?`)}`}
            target="_blank"
            className="bg-salon-pink/10 border border-salon-pink text-salon-pink px-8 py-2.5 rounded-sm text-xs font-bold tracking-widest transition-all w-full text-center block shadow-lg"
          >
            AGENDAR AGORA
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-salon-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4 tracking-tight">
              NOSSOS <span className="text-salon-pink">SERVIÇOS</span>
            </h2>
            <div className="w-24 h-1 bg-salon-gold mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto italic">
              "Excelência em cada detalhe, beleza em cada traço."
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceItem 
              key={service.title} 
              service={service} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
