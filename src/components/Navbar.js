"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { href: "/", label: "Accueil" },
        { href: "/about", label: "A propos" },
        { href: "/gallery", label: "Galerie" },
        { href: "/contact", label: "Contact" },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-500 ${
            scrolled 
                ? "glass-nav py-4" 
                : "bg-transparent py-6"
        }`}>
            <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="group flex items-center gap-2">
                    <span className="text-xl font-bold tracking-tight text-foreground">
                        CANARY<span className="text-accent">VIBE</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 relative group"
                        >
                            {link.label}
                            <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
                        </Link>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="hidden md:flex items-center gap-4">
                    <Link
                        href="/contact"
                        className="px-5 py-2.5 bg-accent text-accent-foreground text-sm font-medium rounded-full hover:bg-accent/90 transition-all duration-300"
                    >
                        Planifier
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden flex flex-col gap-1.5 p-2"
                    aria-label="Toggle menu"
                >
                    <span className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
                    <span className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
                    <span className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-lg border-b border-border transition-all duration-500 ${
                menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}>
                <div className="px-6 py-8 flex flex-col gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className="text-lg text-muted-foreground hover:text-foreground transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        onClick={() => setMenuOpen(false)}
                        className="mt-4 px-5 py-3 bg-accent text-accent-foreground text-center font-medium rounded-full"
                    >
                        Planifier votre voyage
                    </Link>
                </div>
            </div>
        </nav>
    );
}
