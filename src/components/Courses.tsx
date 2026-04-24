import { motion } from 'framer-motion';
import { GraduationCap, CheckCircle2 } from 'lucide-react';
import React, { useState } from 'react';

export default function Courses() {
  const [formData, setFormData] = useState({
    nome: '',
    numero: '',
    curso: 'Curso de Designer de Unhas'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá Reny Studios! 👋 Estou muito interessada em investir no meu futuro profissional e gostaria de receber todos os detalhes sobre a vossa formação de elite.

Informações da Candidata:
✅ *Nome:* ${formData.nome}
✅ *Contacto:* ${formData.numero}
✅ *Curso de Interesse:* ${formData.curso}

Gostaria de saber sobre as próximas turmas, o material incluído e as facilidades de pagamento. Como posso garantir a minha vaga e começar esta jornada de sucesso?`;

    const whatsappUrl = `https://wa.me/258867858176?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="cursos" className="py-24 bg-salon-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-salon-card rounded-[3.5rem] border border-white/5 overflow-hidden shadow-2xl relative"
        >
          <div className="grid lg:grid-cols-2">
            {/* Image Section */}
            <div className="relative h-96 lg:h-auto overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2669&auto=format&fit=crop" 
                alt="Curso de Unhas Profissionais"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-salon-card via-transparent to-transparent hidden lg:block"></div>
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-salon-card to-transparent lg:hidden"></div>
            </div>

            {/* Content Section */}
            <div className="p-8 lg:p-16 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 text-salon-gold mb-6">
                  <GraduationCap size={24} />
                  <span className="text-xs font-bold tracking-[0.3em] uppercase">Formação Profissional</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 leading-tight">
                  Transforme o seu futuro com os nossos <span className="text-salon-pink">Cursos Profissionais</span>
                </h2>
                
                <p className="text-gray-400 mb-8 text-lg leading-relaxed italic border-l-4 border-salon-pink pl-6">
                  "Se você ainda não tem o seu negócio ou quer aprender a trabalhar com unhas sozinha, ou quer uma renda extra... Conheça o nosso curso de unhas e maquiagem."
                </p>

                <div className="space-y-4 mb-10">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-salon-gold mt-1 shrink-0" />
                    <p className="text-sm text-gray-300">Curso de Designer de Unhas: <span className="text-white font-bold">8.000 MT</span></p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-salon-gold mt-1 shrink-0" />
                    <p className="text-sm text-gray-300">Curso de Maquiagem (Makeup): <span className="text-white font-bold">5.000 MT</span></p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-salon-gold mt-1 shrink-0" />
                    <p className="text-sm text-gray-300 italic">Inscrição (Taxa única): <span className="text-white font-bold">500 MT</span></p>
                  </div>
                </div>

                {/* Combo Session */}
                <div className="mb-10 p-6 border border-salon-gold/30 rounded-2xl bg-salon-gold/5 relative group">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-salon-gold/10 rounded-bl-full transform translate-x-4 -translate-y-4"></div>
                  <div className="absolute -top-4 -right-4 bg-salon-pink text-white text-base md:text-xl font-black px-6 py-3 rounded-full uppercase tracking-tighter animate-bounce shadow-[0_10px_30px_rgba(236,72,153,0.6)] ring-4 ring-salon-pink/30 z-20 rotate-12">
                    15% OFF
                  </div>
                  <h4 className="text-salon-gold text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 bg-salon-gold rounded-full animate-pulse"></span>
                    Pacote Especial (Designer + Makeup)
                  </h4>
                  <p className="text-sm text-gray-300 mb-4">Domine as duas áreas mais lucrativas da beleza e impulsione a sua carreira com um desconto exclusivo.</p>
                  <div className="flex flex-col bg-white/5 p-4 rounded-xl border border-white/5">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-sm text-gray-500 line-through decoration-salon-pink decoration-2 underline-offset-2">13.500 MT</span>
                      <span className="text-[10px] bg-salon-gold text-black font-bold px-2 py-0.5 rounded-full uppercase">Economize 2.025 MT</span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-black text-white tracking-tighter drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">11.475 MT</span>
                      <span className="text-[10px] text-gray-400 uppercase tracking-widest font-medium">Preço Final (Com Inscrição)</span>
                    </div>
                  </div>
                </div>

                <div className="bg-black/30 p-6 rounded-xl border border-white/10 mb-8">
                  <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-4">Inscreva-se na Formação</h4>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input 
                      type="text" 
                      required
                      placeholder="Seu Nome" 
                      value={formData.nome}
                      onChange={(e) => setFormData({...formData, nome: e.target.value})}
                      className="w-full bg-salon-dark border border-white/10 rounded-sm px-4 py-2 text-xs text-white focus:border-salon-pink outline-none"
                    />
                    <input 
                      type="tel" 
                      required
                      placeholder="Seu Número" 
                      value={formData.numero}
                      onChange={(e) => setFormData({...formData, numero: e.target.value})}
                      className="w-full bg-salon-dark border border-white/10 rounded-sm px-4 py-2 text-xs text-white focus:border-salon-pink outline-none"
                    />
                    <select 
                      value={formData.curso}
                      onChange={(e) => setFormData({...formData, curso: e.target.value})}
                      className="w-full bg-salon-dark border border-white/10 rounded-sm px-4 py-2 text-xs text-white focus:border-salon-pink outline-none appearance-none cursor-pointer"
                    >
                      <option>Curso de Designer de Unhas</option>
                      <option>Curso de Maquiagem Profissional</option>
                      <option>Pacote Especial (Designer + Makeup)</option>
                    </select>
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      animate={{ 
                        boxShadow: ["0px 0px 0px rgba(236, 72, 153, 0)", "0px 0px 20px rgba(236, 72, 153, 0.4)", "0px 0px 0px rgba(236, 72, 153, 0)"]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      type="submit" 
                      className="w-full bg-salon-pink text-white py-3 rounded-sm font-bold tracking-widest text-[10px] uppercase hover:bg-salon-pink/90 transition-all font-sans"
                    >
                      Solicitar Informações via WhatsApp
                    </motion.button>
                  </form>
                </div>

              </motion.div>
            </div>
          </div>
          
          {/* Accent element */}
          <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-salon-gold/20 rounded-tr-3xl pointer-events-none"></div>
        </motion.div>
      </div>
    </section>
  );
}
