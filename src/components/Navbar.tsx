import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Mail } from "lucide-react";
import logo from "@/assets/logo-blacknode.png";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Soluciones", href: "#soluciones" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 border-b border-border/50 glass-surface">
      <div className="container mx-auto h-full flex items-center justify-between px-6">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2">
          <img src={logo} alt="Black Node SpA" className="w-9 h-9 rounded-full object-cover" />
          <span className="font-bold text-foreground tracking-tight text-lg">
            Black Node<span className="text-muted-foreground font-normal ml-1 text-sm">SpA</span>
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[11px] uppercase tracking-[0.15em] font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="mailto:contacto@blacknode.cl?subject=Solicitud%20de%20evaluación"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-[0.1em] hover:shadow-[0_0_20px_hsl(190_95%_45%/0.3)] transition-all duration-300"
        >
          <Mail className="w-3.5 h-3.5" /> Solicitar evaluación
        </a>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-16 left-0 right-0 glass-surface border-b border-border/50 p-6 flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center px-5 py-2.5 bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-[0.1em] mt-2"
            >
              Solicitar evaluación
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
