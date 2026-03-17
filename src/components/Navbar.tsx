import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { cn } from "../utils";
import Logo from "./Logo";

const links = [
  { name: "Accueil", href: "/#home" },
  { name: "Services", href: "/#services" },
  { name: "Réalisations", href: "/#portfolio" },
  { name: "Témoignages", href: "/#testimonials" },
  { name: "À propos", href: "/#about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled 
          ? "py-3 bg-white/90 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.05)] border-b border-gray-100" 
          : "py-6 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/#home" 
          className={cn(
            "transition-colors relative z-[60]", 
            scrolled || mobileMenuOpen ? "text-[var(--color-text-primary)]" : "text-white"
          )}
        >
          <Logo iconClassName="w-8 h-8 md:w-10 md:h-10" textClassName="text-xl md:text-2xl" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 hover:bg-white/10",
                scrolled 
                  ? "text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] hover:bg-blue-50/50" 
                  : "text-white/90 hover:text-white"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Link
            to="/#contact"
            className={cn(
              "px-6 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 inline-flex items-center gap-2",
              scrolled 
                ? "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] shadow-[0_8px_20px_-6px_rgba(0,102,255,0.4)] hover:-translate-y-0.5" 
                : "bg-white text-[var(--color-primary)] hover:bg-gray-50 shadow-lg hover:-translate-y-0.5"
            )}
          >
            Contactez-nous
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={cn(
            "lg:hidden p-2 -mr-2 relative z-[60] rounded-full transition-colors",
            scrolled || mobileMenuOpen ? "text-[var(--color-text-primary)] hover:bg-gray-100" : "text-white hover:bg-white/10"
          )}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center gap-1.5">
            <span className={cn("block w-5 h-0.5 rounded-full transition-all duration-300", scrolled || mobileMenuOpen ? "bg-current" : "bg-white", mobileMenuOpen && "rotate-45 translate-y-2")} />
            <span className={cn("block w-5 h-0.5 rounded-full transition-all duration-300", scrolled || mobileMenuOpen ? "bg-current" : "bg-white", mobileMenuOpen && "opacity-0")} />
            <span className={cn("block w-5 h-0.5 rounded-full transition-all duration-300", scrolled || mobileMenuOpen ? "bg-current" : "bg-white", mobileMenuOpen && "-rotate-45 -translate-y-2")} />
          </div>
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute top-full left-4 right-4 mt-2 bg-white rounded-2xl p-6 flex flex-col gap-2 lg:hidden shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-100 z-50 overflow-hidden"
            >
              {/* Decorative background element */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-50 rounded-full blur-3xl opacity-50 pointer-events-none" />
              
              <div className="flex flex-col gap-1 relative z-10">
                {links.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.1 }}
                  >
                    <Link
                      to={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-lg font-semibold text-[var(--color-text-primary)] hover:text-[var(--color-primary)] py-3 px-4 rounded-xl hover:bg-blue-50/50 transition-colors flex items-center justify-between group"
                    >
                      {link.name}
                      <svg className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-4 pt-4 border-t border-gray-100 relative z-10"
              >
                <Link
                  to="/#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3.5 bg-[var(--color-primary)] text-white text-center font-semibold rounded-xl flex items-center justify-center gap-2 hover:bg-[var(--color-primary-hover)] transition-colors shadow-[0_8px_20px_-6px_rgba(0,102,255,0.4)]"
                >
                  Contactez-nous
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
