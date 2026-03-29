"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="https://images.pexels.com/photos/2712534/pexels-photo-2712534.jpeg"
                    alt="Canary Islands volcanic landscape"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
                <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" />
            </div>

            {/* Animated Marquee */}
            <div className="absolute bottom-0 left-0 right-0 py-4 border-t border-border/30 bg-background/50 backdrop-blur-sm overflow-hidden">
                <motion.div
                    animate={{ x: [0, -1000] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="flex gap-8 whitespace-nowrap text-xs tracking-widest text-muted uppercase"
                >
                    {[...Array(3)].map((_, i) => (
                        <span key={i} className="flex gap-8">
                            <span>Tenerife</span>
                            <span className="text-accent">•</span>
                            <span>Lanzarote</span>
                            <span className="text-accent">•</span>
                            <span>La Palma</span>
                            <span className="text-accent">•</span>
                            <span>Gran Canaria</span>
                            <span className="text-accent">•</span>
                            <span>Fuerteventura</span>
                            <span className="text-accent">•</span>
                            <span>La Gomera</span>
                            <span className="text-accent">•</span>
                            <span>El Hierro</span>
                            <span className="text-accent">•</span>
                        </span>
                    ))}
                </motion.div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-3xl"
                >
                    <p className="text-accent text-sm font-medium tracking-widest uppercase mb-6">
                        Archipel Volcanique
                    </p>
                    
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9] mb-8">
                        <span className="text-foreground">Explorez les</span>
                        <br />
                        <span className="font-serif italic text-foreground">Canaries</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed">
                        Sept iles volcaniques aux paysages lunaires, plages de sable noir 
                        et forets primaires. Une aventure entre terre et mer.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            href="#islands"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-medium rounded-full hover:bg-accent/90 transition-all duration-300"
                        >
                            <span>Decouvrir les iles</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                        <Link
                            href="/about"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border text-foreground font-medium rounded-full hover:bg-foreground/5 transition-all duration-300"
                        >
                            En savoir plus
                        </Link>
                    </div>
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    className="mt-20 grid grid-cols-3 gap-8 max-w-lg"
                >
                    {[
                        { value: "7", label: "Iles" },
                        { value: "3718m", label: "Altitude max" },
                        { value: "300+", label: "Jours de soleil" },
                    ].map((stat, i) => (
                        <div key={i} className="text-center">
                            <p className="text-3xl md:text-4xl font-bold text-foreground">{stat.value}</p>
                            <p className="text-xs text-muted uppercase tracking-wider mt-1">{stat.label}</p>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-24 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
            >
                <span className="text-xs text-muted uppercase tracking-widest">Scroll</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-px h-12 bg-gradient-to-b from-accent to-transparent"
                />
            </motion.div>
        </section>
    );
}
