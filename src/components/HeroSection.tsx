import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Node grid background */}
      <div className="absolute inset-0 node-grid opacity-60" />
      
      {/* Pulse rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-96 h-96 rounded-full border border-primary/10 animate-pulse-ring" />
        <div className="absolute w-96 h-96 rounded-full border border-primary/5 animate-pulse-ring" style={{ animationDelay: "2.5s" }} />
      </div>

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(190_95%_45%/0.04)_0%,transparent_70%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="label-micro mb-8"
          >
            Infraestructura · Seguridad · Desarrollo
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.05] mb-8"
          >
            Soporte TI, Ciberseguridad, Desarrollo Web y Hosting{" "}
            <span className="text-gradient-cyan">para empresas</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            En Black Node ayudamos a empresas a proteger, optimizar y modernizar
            su operación tecnológica con soluciones confiables y profesionales.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#contacto"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-primary text-primary-foreground text-sm font-semibold uppercase tracking-[0.1em] hover:shadow-[0_0_30px_hsl(190_95%_45%/0.3)] transition-all duration-400"
            >
              Solicitar evaluación
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center px-8 py-3.5 border border-border text-foreground text-sm font-semibold uppercase tracking-[0.1em] hover:border-primary/50 hover:text-primary transition-all duration-300"
            >
              Ver servicios
            </a>
          </motion.div>
        </motion.div>

        {/* Bottom stat bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-24 max-w-3xl mx-auto grid grid-cols-3 gap-px bg-border/30"
        >
          {[
            { value: "99.9%", label: "Uptime garantizado" },
            { value: "24/7", label: "Monitoreo activo" },
            { value: "+100", label: "Empresas atendidas" },
          ].map((stat) => (
            <div key={stat.label} className="bg-card p-6 text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
