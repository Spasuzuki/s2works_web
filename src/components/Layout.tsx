import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring, useInView } from "motion/react";
import { Twitter, Facebook, Instagram, ArrowUpRight, X, Contact } from "lucide-react";
import { Project } from "../data";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#works", label: "Works" },
    { href: "#service", label: "Service" },
    { href: "#about", label: "About" },
    { href: "https://s2works.net/blog/", label: "Blog", external: true },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 py-6 md:px-12 bg-white/80 backdrop-blur-md border-b border-fg/5"
      >
        <a href="/" className="text-2xl font-display font-black tracking-tighter flex items-center gap-2 relative z-[110]">
          <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-white text-xs">s2</div>
          s2works
        </a>
        
        <div className="hidden md:flex gap-10 text-[13px] font-bold uppercase tracking-widest">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
        
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-8 h-8 flex flex-col justify-center gap-1.5 relative z-[110]"
          aria-label="Toggle Menu"
        >
          <motion.div 
            animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="w-full h-0.5 bg-fg origin-center" 
          />
          <motion.div 
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-2/3 h-0.5 bg-fg" 
          />
          <motion.div 
            animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="w-full h-0.5 bg-fg origin-center" 
          />
        </button>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-white z-[90] flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setIsOpen(false)}
                className="text-4xl font-bold tracking-tighter hover:text-accent transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export function Hero() {
  const titleWords = ["いつだって、", "仕掛け人", "であれ！"];
  
  return (
    <section className="relative h-[90vh] flex flex-col justify-center px-6 md:px-12 overflow-hidden bg-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/src/img/hero-bg.jpg" 
          alt="" 
          className="w-full h-full object-cover opacity-10"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
      </div>

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
        >
          <span className="text-accent font-bold uppercase tracking-[0.3em] text-xs mb-6 block">
            Shota Suzuki / s2works
          </span>
          
          <h1 className="text-[12vw] md:text-[9vw] leading-[1] font-bold mb-12 tracking-tighter">
            {titleWords.map((word, i) => (
              <span key={i} className="inline-block overflow-hidden align-bottom mr-[0.2em]">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.2 + i * 0.15, duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
                  className="inline-block"
                >
                  {word === "仕掛け人" ? <span className="text-accent">{word}</span> : word}
                </motion.span>
              </span>
            ))}
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="max-w-2xl text-xl md:text-2xl font-medium text-fg/60 leading-relaxed"
          >
            プランニング + デザイン/映像 + インタラクション <br />
            世の中を少しだけ面白くする仕掛けを、形にします。
          </motion.p>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 right-12 flex items-center gap-4"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] opacity-40">Scroll to explore</span>
        <div className="w-12 h-[1px] bg-fg/20 relative overflow-hidden">
          <motion.div 
            animate={{ x: [-48, 48] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="absolute top-0 left-0 h-full w-1/2 bg-accent"
          />
        </div>
      </motion.div>
    </section>
  );
}

interface WorkCardProps {
  project: Project;
  index: number;
}

export const WorkCard: React.FC<WorkCardProps> = ({ project, index }) => {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  // Detect if in view (especially for mobile)
  const isInView = useInView(cardRef, { 
    margin: "-45% 0px -45% 0px", // Trigger when in the middle 10% of the screen
    once: false 
  });

  // Active state: Hovered on desktop, or in center-view on mobile
  const isActive = isHovered || isInView;
  
  // Tilt Effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  
  // On mobile, we can add a slight automatic tilt when active
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
      style={{
        rotateX: isActive && !isHovered ? "2deg" : rotateX,
        rotateY: isActive && !isHovered ? "-2deg" : rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group cursor-none block relative"
    >
      <div className={`aspect-video overflow-hidden rounded-2xl mb-4 bg-[#1a1a1a] relative shadow-2xl transition-all duration-500 ${isActive ? 'shadow-accent/20' : ''}`}>
        {/* Image with Zoom & Pan */}
        <motion.div
          animate={{ 
            scale: isActive ? 1.1 : 1,
            x: isHovered ? x.get() * -20 : 0,
            y: isHovered ? y.get() * -20 : 0
          }}
          transition={{ type: "spring", stiffness: 150, damping: 20 }}
          className="w-full h-full"
        >
          <img 
            src={project.image} 
            alt={project.title}
            referrerPolicy="no-referrer"
            className={`w-full h-full object-cover transition-all duration-1000 ease-out ${isActive ? 'grayscale-0' : 'grayscale'}`}
          />
        </motion.div>

        {/* Overlay Gradient */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`} />

        {/* Custom Cursor / View Label (Only on hover) */}
        <motion.div
          animate={{ 
            x: isHovered ? x.get() * 400 : 0,
            y: isHovered ? y.get() * 300 : 0,
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1 : 0.5
          }}
          className="absolute inset-0 pointer-events-none z-20 flex items-center justify-center"
        >
          <div className="bg-accent text-white w-20 h-20 rounded-full flex items-center justify-center font-bold text-[10px] tracking-widest uppercase shadow-2xl border border-white/20">
            View
          </div>
        </motion.div>

        {/* Category Tag */}
        <div className="absolute top-6 left-6 z-10">
          <span className={`backdrop-blur-md text-white text-[10px] font-bold px-4 py-2 rounded-full uppercase tracking-[0.2em] border transition-all duration-500 ${isActive ? 'bg-accent border-accent' : 'bg-white/10 border-white/10'}`}>
            {project.category}
          </span>
        </div>

        {/* Year/Index Number */}
        <div className="absolute bottom-6 right-8 z-10 overflow-hidden">
          <motion.span 
            animate={{ y: isActive ? 0 : 40 }}
            className="block text-4xl font-display font-black text-white/20 italic"
          >
            {(index + 1).toString().padStart(2, '0')}
          </motion.span>
        </div>
      </div>

      {/* Text Content with Mask Reveal */}
      <div className="relative overflow-hidden">
        <motion.div
          animate={{ y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex items-start justify-between gap-2">
            <h3 className={`text-base md:text-xl font-bold leading-[1.1] tracking-tighter transition-colors duration-500 max-w-[85%] ${isActive ? 'text-accent' : ''}`}>
              {project.title}
            </h3>
            <div className={`mt-1 transition-opacity duration-500 shrink-0 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
              <ArrowUpRight className="w-5 h-5 text-accent" />
            </div>
          </div>
          <div className={`h-[1px] bg-accent/30 mt-1.5 transition-all duration-700 ${isActive ? 'w-full' : 'w-0'}`} />
        </motion.div>
      </div>
    </motion.a>
  );
};

export function Footer() {
  return (
    <footer 
      id="contact" 
      className="px-6 md:px-12 py-24 text-white relative overflow-hidden bg-[#1a2b3c]"
    >
      {/* Background Image with better mobile scaling and positioning */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/src/img/footer-bg.jpg" 
          alt="" 
          className="w-full h-full object-cover object-[80%_center] md:object-center opacity-20"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-[#1a2b3c]/80" />
      </div>
      
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="mb-12">
          <h2 className="text-5xl md:text-6xl font-script mb-4">Shota Suzuki</h2>
          <p className="text-lg md:text-xl font-medium tracking-widest opacity-90">
            いつだって、仕掛け人であれ！
          </p>
        </div>

        <div className="flex gap-6 mb-16">
          <a 
            href="https://x.com/spasuzuking" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full bg-[#f1b434] flex items-center justify-center text-[#1a2b3c] hover:scale-110 transition-transform"
            aria-label="X (Twitter)"
          >
            <X className="w-6 h-6" />
          </a>
          <a 
            href="https://www.facebook.com/spasuzuking" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full bg-[#f1b434] flex items-center justify-center text-[#1a2b3c] hover:scale-110 transition-transform"
            aria-label="Facebook"
          >
            <Facebook className="w-6 h-6 fill-current" />
          </a>
          <a 
            href="https://8card.net/virtual_cards/xoh52QtdsqQqdVBKqt_Kug" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full bg-[#f1b434] flex items-center justify-center text-[#1a2b3c] hover:scale-110 transition-transform"
            aria-label="Business Card"
          >
            <Contact className="w-6 h-6" />
          </a>
        </div>

        <div className="pt-8 border-t border-white/10 w-full max-w-2xl">
          <p className="text-sm md:text-base tracking-wide opacity-80">
            © Copyright <span className="font-bold">s2works</span>. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
