import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, CheckCircle } from "lucide-react";

const CTASection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="py-32 md:py-48 relative" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(190_95%_45%/0.04)_0%,transparent_60%)]" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="label-micro mb-6">Contacto</div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-[1.1]">
              Haz crecer tu operación tecnológica{" "}
              <span className="text-gradient-cyan">con Black Node</span>
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              Conversemos sobre soporte TI, ciberseguridad, automatización,
              desarrollo web o hosting para tu empresa. Estamos listos para ayudarte.
            </p>

            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>contacto@blacknode.cl</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>blacknode.cl</span>
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {submitted ? (
              <div className="border border-primary/30 bg-card/40 p-12 text-center">
                <CheckCircle className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="text-foreground font-semibold text-lg mb-2">Mensaje enviado</h3>
                <p className="text-muted-foreground text-sm">
                  Nos pondremos en contacto contigo a la brevedad.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="border border-border/50 bg-card/30 p-8 space-y-5">
                <div>
                  <label className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold block mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-secondary/50 border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors"
                    placeholder="Tu nombre o empresa"
                  />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold block mb-2">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full bg-secondary/50 border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors"
                    placeholder="correo@empresa.cl"
                  />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold block mb-2">
                    Mensaje
                  </label>
                  <textarea
                    required
                    rows={4}
                    className="w-full bg-secondary/50 border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                    placeholder="Cuéntanos qué necesitas..."
                  />
                </div>
                <a
                  href="mailto:contacto@blacknode.cl?subject=Contacto%20desde%20web"
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground text-sm font-semibold uppercase tracking-[0.1em] hover:shadow-[0_0_30px_hsl(190_95%_45%/0.3)] transition-all duration-300"
                >
                  <Send className="w-4 h-4" /> Contactar por correo
                </a>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-border text-foreground text-sm font-semibold uppercase tracking-[0.1em] hover:border-primary/50 hover:text-primary transition-all duration-300"
                >
                  Enviar formulario
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
