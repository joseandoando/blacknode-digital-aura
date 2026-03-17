import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Headphones,
  ShieldCheck,
  Activity,
  Workflow,
  BrainCircuit,
  Globe,
  Server,
  HardDrive,
} from "lucide-react";

const services = [
  {
    icon: Headphones,
    title: "Soporte TI y Mesa de Ayuda",
    desc: "Atención técnica profesional para resolver incidentes, administrar equipos y mantener la operación de tu empresa sin interrupciones.",
    status: "Operativo",
  },
  {
    icon: ShieldCheck,
    title: "Ciberseguridad y Protección",
    desc: "Protección integral contra amenazas digitales, auditorías de seguridad y estrategias para resguardar la información crítica de tu organización.",
    status: "Activo",
  },
  {
    icon: Activity,
    title: "Monitoreo y Mantención",
    desc: "Supervisión continua de sistemas, servidores y redes para prevenir fallas y garantizar la disponibilidad de tus servicios tecnológicos.",
    status: "24/7",
  },
  {
    icon: Workflow,
    title: "Automatización de Procesos",
    desc: "Diseño e implementación de flujos automatizados para optimizar tareas repetitivas y mejorar la eficiencia operativa de tu empresa.",
    status: "Activo",
  },
  {
    icon: BrainCircuit,
    title: "Integraciones con IA y n8n",
    desc: "Conectamos herramientas, plataformas y servicios de inteligencia artificial para potenciar la productividad y toma de decisiones.",
    status: "Operativo",
  },
  {
    icon: Globe,
    title: "Desarrollo Web Profesional",
    desc: "Creación de sitios web corporativos, landing pages y aplicaciones web modernas, responsivas y optimizadas para tu negocio.",
    status: "Activo",
  },
  {
    icon: Server,
    title: "Hosting y Correo Corporativo",
    desc: "Infraestructura de hosting confiable y correo corporativo profesional con tu dominio, garantizando estabilidad y seguridad.",
    status: "99.9%",
  },
  {
    icon: HardDrive,
    title: "Infraestructura y Servicios Base",
    desc: "Planificación, implementación y gestión de la infraestructura tecnológica que sostiene la operación diaria de tu empresa.",
    status: "Operativo",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="servicios" className="py-32 md:py-48 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <div className="label-micro mb-6">Servicios</div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Infraestructura que no duerme.{" "}
            <span className="text-gradient-cyan">Seguridad que no falla.</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Soluciones integrales diseñadas para empresas que necesitan soporte real,
            confiable y profesional.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border/20">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="bg-card/40 border border-border/30 p-8 relative overflow-hidden group hover:border-primary/30 transition-all duration-400"
            >
              {/* Rim light */}
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <s.icon
                className="text-primary mb-6 w-7 h-7 group-hover:drop-shadow-[0_0_10px_hsl(190_95%_45%/0.4)] transition-all duration-300"
                strokeWidth={1.5}
              />
              <h3 className="text-foreground text-lg font-semibold mb-3 tracking-tight">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">{s.desc}</p>

              {/* Status micro-label */}
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                <span className="text-[9px] uppercase tracking-[0.2em] text-primary/70 font-medium">
                  {s.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
