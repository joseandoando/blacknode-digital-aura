const footerLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Soluciones", href: "#soluciones" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 border border-primary/60 flex items-center justify-center">
                <div className="w-2.5 h-2.5 bg-primary" />
              </div>
              <span className="font-bold text-foreground tracking-tight">
                Black Node<span className="text-muted-foreground font-normal ml-1 text-sm">SpA</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Soluciones tecnológicas integrales para empresas chilenas. Soporte, seguridad,
              desarrollo y hosting.
            </p>
          </div>

          {/* Links */}
          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-4">
              Enlaces
            </div>
            <div className="space-y-2">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-4">
              Contacto
            </div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>contacto@blacknode.cl</p>
              <p>blacknode.cl</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border/30 mt-12 pt-8 text-center">
          <p className="text-[11px] text-muted-foreground/60 uppercase tracking-[0.15em]">
            © {new Date().getFullYear()} Black Node SpA. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
