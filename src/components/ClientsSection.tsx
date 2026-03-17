import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Briefcase, Landmark, Building } from "lucide-react";

const segments = [
  { icon: Building2, title: "Pymes", desc: "Soluciones accesibles y escalables para empresas en crecimiento." },
  { icon: Briefcase, title: "Oficinas y Empresas Medianas", desc: "Soporte dedicado, infraestructura robusta y seguridad continua." },
  { icon: Landmark, title: "Organizaciones e Instituciones", desc: "Cumplimiento, protección de datos y continuidad operativa." },
  { icon: Building, title: "Empresas con Presencia Digital", desc: "Hosting, desarrollo web, correo corporativo y mantenimiento." },
];

const ClientsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 md:py-48 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <div className="label-micro mb-6">Clientes</div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Tecnología para <span className="text-gradient-cyan">cada tipo de empresa</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Adaptamos nuestros servicios a la realidad y necesidades de tu organización.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border/20 max-w-5xl mx-auto">
          {segments.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="bg-card/40 p-8 text-center group hover:bg-card/70 transition-all duration-300"
            >
              <s.icon className="w-8 h-8 text-primary mx-auto mb-5 group-hover:drop-shadow-[0_0_8px_hsl(190_95%_45%/0.4)] transition-all duration-300" strokeWidth={1.5} />
              <h3 className="text-foreground font-semibold mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
