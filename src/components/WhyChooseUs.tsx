import { motion } from 'framer-motion';
import React, { useState } from 'react';

export default function WhyChooseUs() {
  const [formData, setFormData] = useState({
    nome: '',
    numero: '',
    local: '',
    servico: 'Unhas Personalizadas'
  });
  const [isSimulated, setIsSimulated] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `Olá Reny Studios! 👋 Desejo transformar o meu visual com a vossa excelência.

*Dados para Agendamento:*
✨ *Nome:* ${formData.nome}
✨ *Contacto:* ${formData.numero}
✨ *Localidade:* ${formData.local}
✨ *Serviço:* ${formData.servico}

Gostaria de confirmar a disponibilidade para esta semana. Como podemos agendar?`;

    const whatsappUrl = `https://wa.me/258867858176?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
    
    setIsSimulated(true);
    setTimeout(() => setIsSimulated(false), 5000);
  };

  return (
    <section id="agendamento" className="py-24 bg-salon-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-salon-gold/5 -skew-x-12 transform origin-top pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-salon-gold text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Profissionalismo & Excelência</span>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-8 leading-tight">
              POR QUE ESCOLHER O <br />
              <span className="text-salon-pink italic">Reny Studios?</span>
            </h2>
            
            <ul className="space-y-6">
              {[
                { title: 'Experiência e Profissionais', desc: 'Nossa equipa é composta por profissionais altamente qualificados e em constante formação.' },
                { title: 'Localização Privilegiada', desc: 'Estamos na Machava Socimol - Paragem de Pinheiros, com fácil acesso e segurança.' },
                { title: 'Ambiente Moderno', desc: 'Um espaço pensado para o seu conforto, higiene e relaxamento absoluto.' },
                { title: 'Atendimento Personalizado', desc: 'Cada serviço é adaptado às suas necessidades e desejos únicos.' },
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-salon-gold/20 flex items-center justify-center text-salon-gold font-bold">
                    ✓
                  </span>
                  <div>
                    <h4 className="font-bold text-white tracking-wide mb-1 uppercase text-sm">{item.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right: Detailed Booking Form with Dazzling Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Dazzling Background Animation */}
            <motion.div 
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute -inset-4 bg-gradient-to-r from-salon-pink/20 via-salon-gold/20 to-salon-pink/20 blur-3xl z-0"
            ></motion.div>

            <motion.div
              animate={{ 
                y: [0, -15, 0],
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="relative z-10"
            >
              <div className="absolute inset-0 border-2 border-salon-gold/20 transform translate-x-4 translate-y-4 rounded-[3rem] pointer-events-none"></div>
              <div className="bg-salon-card p-8 md:p-12 rounded-[3rem] border border-white/10 relative shadow-3xl overflow-hidden">
                {/* Simulation Image Background Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10 pointer-events-none">
                  <img src="https://i.im.ge/eGsJ68/486181522_1184712499870875_6587990917239296048_n.jpg" alt="Simulation background" className="w-full h-full object-cover rounded-bl-full" />
                </div>

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-playfair font-bold mb-2 tracking-wider uppercase flex items-center justify-center gap-3">
                    <motion.span
                      animate={{ opacity: [1, 0.5, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="text-salon-gold"
                    >✨</motion.span>
                    Agendar sua Marcação
                    <motion.span
                      animate={{ opacity: [1, 0.5, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="text-salon-gold"
                    >✨</motion.span>
                  </h3>
                  <p className="text-salon-gold text-[10px] uppercase tracking-widest italic font-bold">Simulação de Agendamento Profissional 💎</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Simulation Visualization */}
                  <div className="flex flex-col gap-4 mb-4 md:mb-0">
                    <div className="relative h-48 md:h-full rounded-lg overflow-hidden border border-white/5">
                      <motion.img 
                        initial={{ scale: 1.1 }}
                        whileInView={{ scale: 1.5 }}
                        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
                        src="https://i.im.ge/eGsJ68/486181522_1184712499870875_6587990917239296048_n.jpg" 
                        alt="Simulação Visual" 
                        className="w-full h-full object-cover object-[center_30%]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                        <span className="text-[10px] font-bold text-salon-gold uppercase tracking-[0.2em]">Visualização Premium</span>
                      </div>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-[9px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">Seu Nome</label>
                      <input 
                        type="text" 
                        required
                        placeholder="Ex: Reny"
                        className="w-full bg-black/40 border border-white/10 rounded-sm px-4 py-2.5 text-xs focus:border-salon-pink outline-none transition-colors text-white placeholder:text-gray-700"
                        value={formData.nome}
                        onChange={(e) => setFormData({...formData, nome: e.target.value})}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-[9px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">Telefone</label>
                      <input 
                        type="tel" 
                        required
                        placeholder="+258..."
                        className="w-full bg-black/40 border border-white/10 rounded-sm px-4 py-2.5 text-xs focus:border-salon-pink outline-none transition-colors text-white placeholder:text-gray-700"
                        value={formData.numero}
                        onChange={(e) => setFormData({...formData, numero: e.target.value})}
                      />
                    </div>

                    <div>
                      <label className="block text-[9px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">Localidade</label>
                      <input 
                        type="text" 
                        required
                        placeholder="Ex: Matola"
                        className="w-full bg-black/40 border border-white/10 rounded-sm px-4 py-2.5 text-xs focus:border-salon-pink outline-none transition-colors text-white placeholder:text-gray-700"
                        value={formData.local}
                        onChange={(e) => setFormData({...formData, local: e.target.value})}
                      />
                    </div>

                    <div>
                      <label className="block text-[9px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">Serviço</label>
                      <select 
                        className="w-full bg-black/40 border border-white/10 rounded-sm px-4 py-2.5 text-xs focus:border-salon-pink outline-none transition-colors text-white appearance-none cursor-pointer"
                        value={formData.servico}
                        onChange={(e) => setFormData({...formData, servico: e.target.value})}
                      >
                        <option className="bg-salon-card" value="Unhas Personalizadas">Unhas Personalizadas</option>
                        <option className="bg-salon-card" value="Unhas com Design">Unhas com Design</option>
                        <option className="bg-salon-card" value="Unhas Simples">Unhas Simples</option>
                        <option className="bg-salon-card" value="Sobrancelhas & Pestanas">Sobrancelhas & Pestanas</option>
                        <option className="bg-salon-card" value="Maquiagem (Makeup)">Maquiagem (Makeup)</option>
                        <option className="bg-salon-card" value="Simulação de Visual">Simulação de Visual</option>
                      </select>
                    </div>
                    
                    <motion.button 
                      animate={{ y: [0, -3, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      type="submit"
                      className="w-full bg-salon-pink text-white py-3.5 rounded-sm font-bold tracking-[0.2em] transform hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-salon-pink/20 uppercase text-[10px] mt-2 group relative overflow-hidden"
                    >
                      <span className="relative z-10">Confirmar Agendamento</span>
                      <motion.div 
                        animate={{ x: ['-100%', '200%'] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent z-0"
                      />
                    </motion.button>

                    {isSimulated && (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="mt-4 p-4 bg-salon-gold/20 border border-salon-gold text-salon-gold text-[10px] font-bold text-center uppercase tracking-widest rounded-sm flex items-center justify-center gap-2"
                      >
                        <motion.span animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity }}>✨</motion.span>
                        Simulação Concluída! Entraremos em contacto.
                      </motion.div>
                    )}
                  </form>
                </div>
                
                <div className="mt-8 pt-8 border-t border-white/5 text-center flex items-center justify-center gap-4">
                  <div>
                    <span className="text-[10px] text-gray-600 uppercase tracking-[0.3em] block">Nossa Localização</span>
                    <p className="text-white text-xs font-bold mt-1">Machava Socimol - Paragem de Pinheiros</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

