import Link from "next/link";

const footerLinks = {
    navigation: [
        { label: "Accueil", href: "/" },
        { label: "A propos", href: "/about" },
        { label: "Galerie", href: "/gallery" },
        { label: "Contact", href: "/contact" },
    ],
    islands: [
        { label: "Tenerife", href: "/islands/tenerife" },
        { label: "Lanzarote", href: "/islands/lanzarote" },
        { label: "La Palma", href: "/islands/la-palma" },
        { label: "Gran Canaria", href: "/islands/gran-canaria" },
    ],
    social: [
        { label: "Instagram", href: "#" },
        { label: "Twitter", href: "#" },
        { label: "Facebook", href: "#" },
    ],
};

export default function Footer() {
    return (
        <footer className="bg-background border-t border-border">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="inline-block mb-4">
                            <span className="text-xl font-bold tracking-tight text-foreground">
                                CANARY<span className="text-accent">VIBE</span>
                            </span>
                        </Link>
                        <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                            Votre guide ultime pour explorer les iles Canaries. 
                            Decouvrez des paysages a couper le souffle.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="text-xs font-medium text-muted uppercase tracking-widest mb-4">
                            Navigation
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.navigation.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Islands */}
                    <div>
                        <h4 className="text-xs font-medium text-muted uppercase tracking-widest mb-4">
                            Iles
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.islands.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="text-xs font-medium text-muted uppercase tracking-widest mb-4">
                            Social
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.social.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-muted">
                        2026 CanaryVibe. Tous droits reserves.
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="text-xs text-muted hover:text-muted-foreground transition-colors">
                            Mentions legales
                        </a>
                        <a href="#" className="text-xs text-muted hover:text-muted-foreground transition-colors">
                            Confidentialite
                        </a>
                    </div>
                </div>
            </div>

            {/* Large Brand Text */}
            <div className="border-t border-border overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
                    <p className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-border/50 text-center select-none">
                        CANARIES
                    </p>
                </div>
            </div>
        </footer>
    );
}
