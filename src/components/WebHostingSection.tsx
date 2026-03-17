import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Mail, HardDrive, Shield, MonitorSmartphone, ArrowUpRight } from "lucide-react";

const features = [
  { icon: Globe, label: "Sitios web corporativos" },
  { icon: MonitorSmartphone, label: "Landing pages profesionales" },
  { icon: HardDrive, label: "Hosting administrado" },
  { icon: Mail, label: "Correo corporativo" },
  { icon: Shield, label: "Certificados SSL" },
];

const WebHostingSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 md:py-48 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="label-micro mb-6">Presencia digital</div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-[1.1]">
              Tu ecosistema digital,{" "}
              <span className="text-gradient-cyan">completo y seguro</span>
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-10">
              En Black Node también ayudamos a empresas a crear páginas web modernas,
              levantar landing pages profesionales, administrar hosting e implementar
              correo corporativo. Todo para mantener una presencia digital estable,
              segura y profesional.
            </p>

            <div className="space-y-4 mb-10">
              {features.map((f) => (
                <div key={f.label} className="flex items-center gap-4 group">
                  <div className="w-8 h-8 border border-border flex items-center justify-center group-hover:border-primary/50 transition-colors">
                    <f.icon className="w-4 h-4 text-primary" strokeWidth={1.5} />
                  </div>
                  <span className="text-foreground text-sm font-medium">{f.label}</span>
                </div>
              ))}
            </div>

            <a
              href="#contacto"
              className="inline-flex items-center gap-2 text-primary text-sm font-semibold uppercase tracking-[0.1em] hover:gap-3 transition-all duration-300"
            >
              Solicitar cotización <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Right - Server rack visualization */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="border border-border/50 bg-card/30 p-1 relative overflow-hidden">
              {/* Scan line */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent animate-scan" />
              </div>

              {/* Server bars */}
              <div className="space-y-1">
                {[
                  { label: "Web Server", width: "95%", active: true },
                  { label: "SSL/TLS Layer", width: "100%", active: true },
                  { label: "Firewall", width: "100%", active: true },
                  { label: "Mail Server", width: "88%", active: true },
                  { label: "DNS Management", width: "92%", active: true },
                  { label: "Backup System", width: "100%", active: true },
                  { label: "CDN Layer", width: "85%", active: true },
                  { label: "Monitoring", width: "97%", active: true },
                ].map((bar) => (
                  <div key={bar.label} className="bg-secondary/50 p-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                      <span className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground font-medium">
                        {bar.label}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-24 h-1 bg-border/50 overflow-hidden">
                        <div className="h-full bg-primary/50" style={{ width: bar.width }} />
                      </div>
                      <span className="text-[9px] text-primary/60 font-mono">{bar.width}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WebHostingSection;
