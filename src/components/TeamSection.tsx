import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { User } from "lucide-react";
import josePhoto from "@/assets/jose-calfullan.png";

const teamMembers = [
  {
    name: "José Calfullan",
    role: "Team Leader de Ventas",
    photo: josePhoto,
  },
  {
    name: "Matías Millapan",
    role: "Team Leader de Soporte TI",
    photo: null,
  },
  {
    name: "Alex Villegas",
    role: "Team Leader de Ciberseguridad",
    photo: null,
  },
];

const TeamSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center", skipSnaps: false },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi, onSelect]);

  return (
    <section className="py-32 md:py-40 relative" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(190_95%_45%/0.03)_0%,transparent_60%)]" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <div className="label-micro mb-4">Nuestro Equipo</div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Los líderes detrás de{" "}
            <span className="text-gradient-cyan">Black Node</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto"
        >
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex">
              {teamMembers.map((member, i) => (
                <div
                  key={i}
                  className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-4"
                >
                  <div className="border border-border/50 bg-card/40 p-6 text-center group hover:border-primary/30 transition-all duration-500">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-2 border-border/50 group-hover:border-primary/40 transition-colors duration-500">
                      {member.photo ? (
                        <img
                          src={member.photo}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-secondary flex items-center justify-center">
                          <User className="w-12 h-12 text-muted-foreground/50" />
                        </div>
                      )}
                    </div>
                    <h3 className="text-foreground font-semibold text-lg mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary text-xs uppercase tracking-[0.15em] font-medium">
                      {member.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {teamMembers.map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === selectedIndex
                    ? "bg-primary w-6"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
