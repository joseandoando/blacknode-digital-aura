import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Server, Code, Headphones } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const pillars = [
    { icon: Headphones, label: "Soporte" },
    { icon: Shield, label: "Seguridad" },
    { icon: Server, label: "Infraestructura" },
    { icon: Code, label: "Desarrollo" },
  ];

  return (
    <section id="nosotros" className="py-32 md:py-48 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto"
        >
          <div className="label-micro mb-6">Quiénes somos</div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8 leading-[1.1]">
            Soluciones tecnológicas integrales{" "}
            <span className="text-gradient-cyan">para empresas que necesitan resultados</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-12 max-w-3xl">
            Black Node SpA es una empresa de tecnología chilena enfocada en entregar
            soluciones confiables a empresas y organizaciones. Desde soporte TI hasta
            ciberseguridad, desarrollo web y hosting, centralizamos todo lo que tu
            empresa necesita para operar con seguridad y continuidad.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border/30">
            {pillars.map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="bg-card p-8 text-center group"
              >
                <p.icon className="w-7 h-7 text-primary mx-auto mb-4 group-hover:drop-shadow-[0_0_8px_hsl(190_95%_45%/0.5)] transition-all duration-300" strokeWidth={1.5} />
                <div className="text-[11px] uppercase tracking-[0.15em] font-medium text-foreground">{p.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
