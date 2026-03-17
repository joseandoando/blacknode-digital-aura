import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import dimasurLogo from "@/assets/clients/dimasur.png";
import inacapLogo from "@/assets/clients/inacap.png";
import itauLogo from "@/assets/clients/itau.png";
import lundinLogo from "@/assets/clients/lundin.png";

const clients = [
  { name: "Dimasur", logo: dimasurLogo },
  { name: "Inacap", logo: inacapLogo },
  { name: "Itaú", logo: itauLogo },
  { name: "Lundin Mining", logo: lundinLogo },
];

// Duplicate for seamless infinite scroll
const duplicated = [...clients, ...clients];

const PartnersCarousel = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 border-t border-border/30" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <div className="label-micro mb-4">Confían en nosotros</div>
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
            Empresas que <span className="text-gradient-cyan">trabajan con Black Node</span>
          </h2>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative overflow-hidden"
      >
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex animate-scroll-x">
          {duplicated.map((client, i) => (
            <div
              key={`${client.name}-${i}`}
              className="flex-shrink-0 w-56 mx-8 flex items-center justify-center h-28 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-500"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-20 max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default PartnersCarousel;
