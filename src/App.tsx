/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from "motion/react";
import { 
  Search, 
  MessageCircle, 
  ArrowRight,
  ChevronRight
} from "lucide-react";
import { useRef } from "react";

const ColorBar = ({ className = "" }: { className?: string }) => (
  <div className={`flex h-2 w-full overflow-hidden ${className}`}>
    <div className="flex-1 bg-go-blue" />
    <div className="flex-1 bg-go-red" />
    <div className="flex-1 bg-go-yellow" />
    <div className="flex-1 bg-go-black" />
  </div>
);

const Logo = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center justify-center ${className}`}>
    <img src="https://i.ibb.co/v6NzxfwW/LOGO-GO.png" alt="Go Print Logo" className="h-12 object-contain" referrerPolicy="no-referrer" />
  </div>
);

const Navbar = () => (
  <nav className="absolute top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 flex flex-col">
    <div className="px-6 py-3 flex items-center justify-between w-full relative">
      <div className="hidden lg:block w-1/3"></div>
      
      <div className="w-full lg:w-1/3 flex justify-center">
        <Logo className="" />
      </div>
      
      <div className="hidden lg:flex w-1/3 items-center justify-end gap-6 text-[13px] font-bold uppercase tracking-wider text-gray-700">
        <a href="#" className="hover:text-go-blue transition-colors">home</a>
        <a href="#" className="hover:text-go-blue transition-colors">quem somos</a>
        <a href="#" className="hover:text-go-blue transition-colors">serviços</a>
        <a href="#" className="hover:text-go-blue transition-colors">contato</a>
        <button className="p-2 hover:text-go-blue transition-colors">
          <Search size={20} />
        </button>
      </div>
    </div>
    <ColorBar className="h-1.5" />
  </nav>
);

const Hero = () => {
  return (
    <section className="relative h-[85vh] mt-16 overflow-hidden group">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=2070&auto=format&fit=crop" 
          alt="Go Print Rio" 
          className="w-full h-full object-cover brightness-75"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center">
        <motion.div 
          initial={{ clipPath: "inset(100% 0 0 0)" }}
          whileInView={{ clipPath: "inset(0% 0 0 0)" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-2xl text-white"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-12 w-1.5 bg-go-yellow shadow-[0_0_15px_rgba(255,242,0,0.5)]" />
            <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase drop-shadow-2xl">
              EVENTO NO RIO? <br />
              <span className="text-go-yellow">SÓ SE FOR COM A GO!</span>
            </h1>
          </div>
          <p className="text-lg md:text-xl font-medium leading-relaxed opacity-90 mb-8 border-l-4 border-go-blue pl-6 bg-black/20 backdrop-blur-sm py-4 pr-4">
            Sua marca merece o melhor destaque na Cidade Maravilhosa. Soluções gráficas de alta performance para eventos inesquecíveis.
          </p>
        </motion.div>
      </div>

      {/* Brand Color Accents */}
      <div className="absolute top-0 right-0 w-1/3 h-full pointer-events-none opacity-20">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-go-blue via-transparent to-transparent" />
      </div>
    </section>
  );
};

const ScrollGallery = ({ title, highlight, images, subtitle, topic, id }: { title: string, highlight: string, images: string[], subtitle: string, topic?: string, id?: string }) => {
  return (
    <section id={id} className="relative py-12 md:py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col gap-4 w-full">
        <motion.div
          initial={{ clipPath: "inset(100% 0 0 0)" }}
          whileInView={{ clipPath: "inset(0% 0 0 0)" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase leading-none">
            {title} <span className="text-go-blue">{highlight}</span>
          </h2>
          <ColorBar className="max-w-[300px] h-3 mt-4" />
        </motion.div>
      </div>

      <div className="w-full overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8">
        <div className="flex gap-6 px-6 w-max">
          {images.map((src, i) => (
            <div key={i} className="w-[85vw] md:w-[70vw] max-w-5xl h-[60vh] snap-center flex flex-col gap-4 shrink-0">
              {topic && (
                <div className="w-full flex items-center gap-3">
                  <div className="h-[1px] w-8 bg-go-blue" />
                  <span className="text-xs font-black uppercase tracking-[0.3em] text-go-blue">{topic}</span>
                </div>
              )}
              <motion.div 
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                whileInView={{ clipPath: "inset(0 0% 0 0)" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="relative w-full h-full rounded-sm overflow-hidden shadow-[0_20px_40px_-15px_rgba(0,0,0,0.2)] group"
              >
                <img 
                  src={src} 
                  alt={`${title} ${i}`} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8 md:p-12">
                  <div className="text-white">
                    <p className="text-go-yellow font-bold uppercase tracking-widest text-sm mb-2">Qualidade Go Print</p>
                    <h4 className="text-2xl md:text-3xl font-black italic uppercase">{subtitle}</h4>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-2 flex">
                  <div className="flex-1 bg-go-blue" />
                  <div className="flex-1 bg-go-red" />
                  <div className="flex-1 bg-go-yellow" />
                  <div className="flex-1 bg-go-black" />
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhatsAppButton = () => (
  <a 
    href="https://wa.me/5500000000000" 
    target="_blank" 
    rel="noreferrer"
    className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform group"
  >
    <MessageCircle size={32} fill="currentColor" />
    <span className="absolute right-full mr-4 bg-white text-black px-4 py-2 rounded-lg text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
      Fale Conosco agora!
    </span>
  </a>
);

const Footer = () => (
  <footer className="bg-go-black text-white pt-20 pb-10 px-6">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
      <div className="space-y-8">
        <Logo className="items-start scale-110 origin-left invert brightness-0" />
        <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
          Soluções gráficas inovadoras com tecnologia de ponta. Qualidade e compromisso com o seu sucesso em cada impressão.
        </p>
      </div>
      
      <div>
        <h4 className="font-bold uppercase mb-8 text-go-yellow tracking-widest text-sm">Links Rápidos</h4>
        <ul className="space-y-4 text-sm text-gray-400">
          <li><a href="#letra-caixa" className="hover:text-go-blue transition-colors">Letra Caixa</a></li>
          <li><a href="#stands" className="hover:text-go-blue transition-colors">Stands</a></li>
          <li><a href="#mobiliarios" className="hover:text-go-blue transition-colors">Mobiliários</a></li>
          <li><a href="#backdrops" className="hover:text-go-blue transition-colors">Backdrops</a></li>
          <li><a href="#palcos" className="hover:text-go-blue transition-colors">Palcos</a></li>
          <li><a href="#porticos" className="hover:text-go-blue transition-colors">Pórticos</a></li>
          <li><a href="#projetos-especiais" className="hover:text-go-blue transition-colors">Projetos Especiais</a></li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold uppercase mb-8 text-go-yellow tracking-widest text-sm">Contato</h4>
        <ul className="space-y-4 text-sm text-gray-400">
          <li className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 bg-go-red rounded-full" />
            contato@goprint.com.br
          </li>
          <li className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 bg-go-blue rounded-full" />
            +55 (11) 0000-0000
          </li>
        </ul>
      </div>
    </div>
    
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 pt-10 border-t border-zinc-800">
      <div className="flex gap-1 h-1 w-40">
        <div className="flex-1 bg-go-blue" />
        <div className="flex-1 bg-go-red" />
        <div className="flex-1 bg-go-yellow" />
        <div className="flex-1 bg-go-black" />
      </div>
      <div className="text-[10px] text-gray-500 uppercase tracking-[0.2em]">
        © 2026 Go Print. Excelência em Impressão.
      </div>
    </div>
  </footer>
);

export default function App() {
  const productionImages = [
    "https://i.ibb.co/tw0Cc1nf/Whats-App-Image-2026-04-10-at-15-01-26-1.jpg", // Stand Tanssi
    "https://i.ibb.co/4ZjDrBF8/Whats-App-Image-2026-04-10-at-15-01-26.jpg", // Stand Chiliz
    "https://i.ibb.co/Cpz4w6YS/Whats-App-Image-2026-04-10-at-15-01-25-1.jpg", // Stand Ripple
  ];

  const solutionImages = [
    "https://i.ibb.co/yn6MRPZM/letra-caixa-isce.jpg", // Letra Caixa 0
    "https://i.ibb.co/LdCpcJhG/Whats-App-Image-2026-04-10-at-14-53-30.jpg", // Letra Caixa 1
    "https://i.ibb.co/xSnHwFDd/Whats-App-Image-2026-04-10-at-14-53-27.jpg", // Letra Caixa 2
    "https://i.ibb.co/WWdfFYDW/Whats-App-Image-2026-04-10-at-14-53-26.jpg", // Letra Caixa 3
    "https://i.ibb.co/Y4BcBCRr/Whats-App-Image-2026-04-10-at-18-04-54.jpg", // Letra Caixa 4
  ];

  const standsImages = [
    "https://i.ibb.co/X66sRhr/stands-4.jpg", // Stand 5
    "https://i.ibb.co/qLsQk3Vp/bo2.jpg", // Stand 1
    "https://i.ibb.co/d4dF6yxZ/bo1.jpg", // Stand 2
    "https://i.ibb.co/1GdPZQWn/stands-2.jpg", // Stand 3
    "https://i.ibb.co/XrzHfSSG/stand-ripple-jpg.jpg", // Stand 4
    "https://i.ibb.co/4gKddcmP/stands1.jpg", // Stand 6
    "https://i.ibb.co/wrKymRTC/stand-block-chain.jpg", // Stand 7
  ];

  const mobiliariosImages = [
    "https://i.ibb.co/fVbr1Rds/Whats-App-Image-2026-04-10-at-17-14-19.jpg", // Mobiliario 1
    "https://i.ibb.co/FkDC3Hty/Whats-App-Image-2026-04-10-at-17-14-22.jpg", // Mobiliario 2
    "https://i.ibb.co/c5ykvhv/mob2.jpg", // Mobiliario 3
  ];

  const backdropImages = [
    "https://i.ibb.co/39T153wp/Whats-App-Image-2026-04-10-at-17-14-22-2.jpg", // Backdrop 1
    "https://i.ibb.co/hFFD4LjG/Whats-App-Image-2026-04-10-at-17-14-22-1.jpg", // Backdrop 2
    "https://i.ibb.co/932tM8k8/box-cristo-assador.jpg", // Backdrop 3
  ];

  const palcosImages = [
    "https://i.ibb.co/KBYDN9j/palco-com-ilha.jpg", // Palco 0
    "https://i.ibb.co/2Yk3VCSz/Whats-App-Image-2026-04-10-at-15-01-14.jpg", // Palco 1
    "https://i.ibb.co/Kzp3QzdD/Whats-App-Image-2026-04-10-at-15-01-22.jpg", // Palco 2
    "https://i.ibb.co/Gf6BWk00/palcop1.jpg", // Palco 3
    "https://i.ibb.co/F4MQPgf1/foto-palco-pulpito.jpg", // Palco 4
    "https://i.ibb.co/zHRWG2nG/ilha-palco.jpg", // Palco 5
  ];

  const porticosImages = [
    "https://i.ibb.co/xSyDqXNb/Whats-App-Image-2026-04-10-at-14-53-29.jpg", // Portico 1
    "https://i.ibb.co/FbXwt4sc/Whats-App-Image-2026-04-10-at-14-53-27-1.jpg", // Portico 2
    "https://i.ibb.co/5x9Q1W4x/Whats-App-Image-2026-04-10-at-17-14-22-1.jpg", // Portico 3
  ];

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-go-blue selection:text-white">
      <Navbar />
      <Hero />
      
      <ScrollGallery 
        id="palcos"
        title="Nossos" 
        highlight="Palcos" 
        images={palcosImages} 
        subtitle="Palcos" 
        topic="Palcos"
      />

      <ScrollGallery 
        id="letra-caixa"
        title="Letra" 
        highlight="Caixa" 
        images={solutionImages} 
        subtitle="Letra Caixa" 
        topic="Letra Caixa"
      />

      <ScrollGallery 
        id="stands"
        title="Projetos" 
        highlight="Stands" 
        images={standsImages} 
        subtitle="Stands" 
        topic="Stands"
      />

      <ScrollGallery 
        id="mobiliarios"
        title="Nossos" 
        highlight="Mobiliários" 
        images={mobiliariosImages} 
        subtitle="Mobiliários" 
        topic="Mobiliários"
      />

      <ScrollGallery 
        id="backdrops"
        title="Nossos" 
        highlight="Backdrops" 
        images={backdropImages} 
        subtitle="Backdrops" 
        topic="Backdrops"
      />

      <ScrollGallery 
        id="porticos"
        title="Nossos" 
        highlight="Pórticos" 
        images={porticosImages} 
        subtitle="Pórticos" 
        topic="Pórticos"
      />

      <ScrollGallery 
        id="projetos-especiais"
        title="Projetos" 
        highlight="Especiais" 
        images={productionImages} 
        subtitle="Projetos Especiais" 
        topic="Projetos Especiais"
      />

      <Footer />
    </div>
  );
}


