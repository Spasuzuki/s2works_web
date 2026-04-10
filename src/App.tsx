/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Navbar, Footer, WorkCard } from "./components/Layout";
import { projects, services } from "./data";

const Marquee = ({ text, speed = 40 }: { text: string; speed?: number }) => {
  return (
    <div className="overflow-hidden whitespace-nowrap py-8 border-y border-fg/5 bg-white text-fg font-display font-bold uppercase tracking-[0.2em] text-xl md:text-2xl">
      <motion.div
        animate={{ x: [0, -1000] }}
        transition={{ repeat: Infinity, duration: speed, ease: "linear" }}
        className="inline-block"
      >
        {Array(10).fill(text).join(" \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 ")} \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 
      </motion.div>
    </div>
  );
};

export default function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeCategory, setActiveCategory] = useState("ALL");
  const containerRef = useRef<HTMLDivElement>(null);

  const categories = ["ALL", "記事・掲載", "アトラクション", "テーマパーク", "その他"];

  const filteredProjects = projects.filter(project => {
    if (activeCategory === "ALL") return true;
    if (activeCategory === "その他") {
      return !["記事・掲載", "アトラクション", "テーマパーク"].includes(project.category);
    }
    return project.category === activeCategory;
  });

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-[#f8f8f8] selection:bg-accent selection:text-white font-sans text-fg">
      {/* Fixed Background Image - Prevents excessive zooming on mobile */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-[position:80%_center] md:bg-center bg-no-repeat pointer-events-none opacity-60"
        style={{ backgroundImage: 'url("/src/img/hero-bg.jpg")' }}
      />
      {/* Custom Cursor - Playful Dot */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-accent rounded-full pointer-events-none z-[9999] mix-blend-multiply hidden md:block"
        animate={{
          x: mousePos.x - 8,
          y: mousePos.y - 8,
        }}
        transition={{ type: "spring", stiffness: 1000, damping: 28, mass: 0.2 }}
      />

      <Navbar />
      
      {/* Subtle Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-accent origin-left z-[101]"
        style={{ scaleX }}
      />
      
      <main className="relative z-10 pt-32">
        {/* Hero Section - Playful & Bold */}
        <section className="px-6 md:px-12 min-h-[80vh] flex flex-col justify-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl"
          >
            <h1 className="text-[10vw] md:text-[7vw] leading-[1.1] font-bold tracking-tight">
              いつだって、 <br />
              <span className="text-accent">仕掛け人</span>で <br />
              あれ！
              <span className="block text-xl md:text-2xl font-medium mt-6 opacity-80 tracking-normal">
                I'm a Creative Producer In Tokyo
              </span>
            </h1>
          </motion.div>
        </section>

        <Marquee text="PLANNING + DESIGN + INTERACTION + VIDEO + s2works" />

        {/* Works Grid - Card Style */}
        <section id="works" className="px-6 md:px-12 py-24 bg-white relative overflow-hidden">
          {/* Background Marquee */}
          <div className="absolute top-20 left-0 w-full overflow-hidden pointer-events-none opacity-[0.03] select-none">
            <motion.div 
              animate={{ x: [0, -1000] }}
              transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
              className="text-[20vw] font-black uppercase whitespace-nowrap leading-none"
            >
              SELECTED WORKS SELECTED WORKS SELECTED WORKS
            </motion.div>
          </div>

          <div className="mb-16 relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-sm uppercase tracking-[0.4em] font-bold text-accent mb-4 flex items-center gap-4">
                <span className="w-12 h-[1px] bg-accent"></span>
                Works
              </h2>
              <div className="overflow-hidden">
                <motion.p 
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
                  className="text-[10vw] md:text-[7vw] font-bold tracking-tight leading-[1.1]"
                >
                  どんなコトを<br />してきた？
                </motion.p>
              </div>

              {/* Category Filter Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-12 flex flex-wrap gap-3"
              >
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 border ${
                      activeCategory === cat 
                        ? "bg-accent border-accent text-white shadow-lg shadow-accent/20" 
                        : "bg-transparent border-fg/10 text-fg/60 hover:border-accent hover:text-accent"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </motion.div>
            </motion.div>
          </div>
          
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, i) => (
                <WorkCard key={project.id} project={project} index={i} />
              ))}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* Service Section */}
        <section id="service" className="px-6 md:px-12 py-32 bg-white">
          <div className="max-w-6xl mx-auto mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-sm uppercase tracking-[0.4em] font-bold text-accent mb-4 flex items-center gap-4">
                <span className="w-12 h-[1px] bg-accent"></span>
                Service
              </h2>
              <div className="overflow-hidden">
                <motion.p 
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
                  className="text-[10vw] md:text-[7vw] font-bold tracking-tight leading-[1.1]"
                >
                  カタチに<br />したもの
                </motion.p>
              </div>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
            {services.map((service, i) => (
              <WorkCard key={service.id} project={service} index={i} />
            ))}
          </div>
        </section>

        {/* Philosophy Section */}
        <section id="about" className="px-6 md:px-12 py-32 bg-[#111] text-white overflow-hidden relative">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="absolute -right-24 -top-24 w-96 h-96 border border-white/10 rounded-full flex items-center justify-center"
          >
            <div className="w-64 h-64 border border-white/5 rounded-full" />
          </motion.div>

          <div className="relative z-10 max-w-6xl">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
              className="text-accent font-bold uppercase tracking-widest text-sm mb-8"
            >
              About
            </motion.h2>

            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="w-full lg:w-1/3 shrink-0"
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl">
                  <img 
                    src="/src/img/me.jpg" 
                    alt="Shota Suzuki" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none" />
                </div>
              </motion.div>

              <div className="flex-1">
                <motion.p 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: [0.19, 1, 0.22, 1], delay: 0.2 }}
                  className="text-3xl md:text-5xl font-bold leading-[1.2] mb-12"
                >
                  面白いことをやる！
                </motion.p>
                <div className="grid md:grid-cols-1 xl:grid-cols-2 gap-8 text-lg opacity-70 leading-relaxed mb-16">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.4 }}
                  >
                    1984年東京都生まれ。ポストプロダクションにてTVCMや映画のオンライン編集、その後、FlashをつかったWEB制作、2009年 <a href="https://pokelabo.co.jp/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline transition-all">株式会社ポケラボ</a>入社。ゲームにおける表現・演出に特化したクリエイティブチームを結成し、部長に就任。2011年クリエイティブ事業部本部長を経て取締役に就任。ポケラボ退職後、<a href="https://jp.mercari.com/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline transition-all">株式会社メルカリ</a>入社。革命・USプロジェクト担当。2016年株式会社プレースホルダ（現 <a href="https://corp.litpla.com/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline transition-all">株式会社リトプラ</a>）創業株主。取締役に就任。
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.6 }}
                  >
                    ソーシャルゲーム黎明期にモバイル勝手サイトで「侍キングダム」の開発を行う。(PHP+Flash Lite1.1) その後、mixiモバイル、モバゲーのサードパーティオープンに携わる。自称モバイルソーシャルゲームで初ガチャシステムを導入した「やきゅとも!」にてモバゲーSAP内でのTOP10以内にランクイン。現在はリトルプラネットのプロデュースとファミリー軸で「デジタル×アナログ」の新しいあり方を考えることをしています。スマートフォンで好きなアプリが落とせる時代が来たように、空間でもデジタルを活用して好きな空間に変えられるような世界が訪れるのではないかと妄想し活動してます。目標は自分の老後をワクワクさせることです。<br />
                    <span className="block mt-4 font-bold">趣味は、企画立案・ランニング・株式取引・温泉ソムリエ</span>
                  </motion.p>
                </div>

                <motion.a
                  href="https://s2works.net/blog/about"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="inline-flex items-center gap-6 group"
                >
                  <span className="text-2xl md:text-3xl font-bold border-b-2 border-accent/30 group-hover:border-accent transition-all duration-500">
                    詳しくはこちら
                  </span>
                  <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-500">
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}


