import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import myroIcon from "@/assets/myro-icon.png";

const PLAY_STORE_URL = "https://play.google.com/store"; // Replace with actual Myro link

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* Background */}
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-40"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        {/* Company */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-2 text-sm font-medium tracking-[0.3em] uppercase text-muted-foreground"
        >
          Teulek Ventures
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12 text-xs tracking-widest text-muted-foreground/70"
        >
          Building India's Best Consumer Apps
        </motion.p>

        {/* App Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-8 animate-float"
        >
          <img
            src={myroIcon}
            alt="Myro Astrology App"
            className="h-28 w-28 rounded-3xl shadow-2xl shadow-primary/30"
            width={512}
            height={512}
          />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mb-4 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl"
        >
          Myro
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-3 font-heading text-lg font-semibold text-accent sm:text-xl"
        >
          India's #1 Astrology App
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-10 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          Personalized tarot, astrology & cosmic insights — built for clarity, not confusion.
        </motion.p>

        {/* CTA */}
        <motion.a
          href={PLAY_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-3 rounded-xl bg-primary px-8 py-4 font-heading text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-shadow hover:shadow-xl hover:shadow-primary/40"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 0 1 0 1.38l-2.302 2.302L15.5 13.19l2.198-2.198v-.002zm-3.906-3.197l10.937 6.333-2.302 2.302-8.635-8.635z" />
          </svg>
          Download on Google Play
        </motion.a>

        {/* Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground/60"
        >
          <span className="flex items-center gap-1.5">
            🏆 A product by Teulek Ventures
          </span>
          <span className="flex items-center gap-1.5">
            🇮🇳 Among the best consumer apps in India
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
