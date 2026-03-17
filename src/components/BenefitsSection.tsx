import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Zap, Lock, Layers, Clock, TrendingUp } from "lucide-react";

const benefits = [
  { icon: Users, title: "Atención cercana y profesional", desc: "Equipo técnico dedicado que entiende las necesidades reales de tu empresa." },
  { icon: Zap, title: "Soluciones modernas", desc: "Tecnología actualizada y herramientas de última generación para tu operación." },
  { icon: Lock, title: "Seguridad y continuidad", desc: "Protección constante y planes de contingencia para que nunca te detengas." },
  { icon: Layers, title: "Centralización tecnológica", desc: "Un solo proveedor para soporte, seguridad, desarrollo, hosting y más." },
  { icon: Clock, title: "Ahorro de tiempo", desc: "Automatización y soporte eficiente para que te enfoques en tu negocio." },
  { icon: TrendingUp, title: "Escalabilidad", desc: "Infraestructura que crece contigo, adaptándose a nuevas necesidades." },
];

const BenefitsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="soluciones" className="py-32 md:py-48 relative" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(190_95%_45%/0.03)_0%,transparent_60%)]" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <div className="label-micro mb-6">Beneficios</div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            ¿Por qué elegir <span className="text-gradient-cyan">Black Node?</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex gap-5 group"
            >
              <div className="flex-shrink-0 w-10 h-10 border border-border flex items-center justify-center group-hover:border-primary/40 transition-colors duration-300">
                <b.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-foreground font-semibold mb-1.5 tracking-tight">{b.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
