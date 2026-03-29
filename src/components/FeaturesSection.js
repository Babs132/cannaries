"use client";
import { motion } from "framer-motion";

const features = [
    {
        number: "01",
        title: "Paysages Volcaniques",
        description: "Des terrains lunaires aux calderas majestueuses, explorez des formations geologiques uniques au monde.",
        image: "https://images.pexels.com/photos/3540375/pexels-photo-3540375.jpeg"
    },
    {
        number: "02",
        title: "Biodiversite Unique",
        description: "Forets de lauriers millenaires, especes endemiques et reserves naturelles preservees.",
        image: "https://images.pexels.com/photos/5614631/pexels-photo-5614631.jpeg"
    },
    {
        number: "03",
        title: "Climat Eternel",
        description: "Plus de 300 jours de soleil par an, des temperatures ideales toute l'annee.",
        image: "https://images.pexels.com/photos/2712534/pexels-photo-2712534.jpeg"
    },
];

export default function FeaturesSection() {
    return (
        <section className="py-32 bg-card">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
                        Pourquoi les Canaries
                    </p>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                        Une approche unique
                        <br />
                        <span className="font-serif italic">du voyage</span>
                    </h2>
                </motion.div>

                {/* Features */}
                <div className="space-y-1">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.number}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12 py-8 border-t border-border hover:bg-background/50 transition-colors duration-300 cursor-pointer px-4 -mx-4 rounded-lg">
                                {/* Number */}
                                <span className="text-accent font-medium text-sm tracking-wider">
                                    {feature.number}
                                </span>

                                {/* Title */}
                                <h3 className="text-2xl md:text-3xl font-bold text-card-foreground group-hover:text-accent transition-colors duration-300 lg:w-80">
                                    {feature.title}
                                </h3>

                                {/* Description */}
                                <p className="text-muted-foreground leading-relaxed flex-1 max-w-md">
                                    {feature.description}
                                </p>

                                {/* Image Preview (on hover) */}
                                <div className="hidden lg:block w-32 h-20 rounded-lg overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <img
                                        src={feature.image}
                                        alt={feature.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Arrow */}
                                <svg 
                                    className="w-5 h-5 text-muted group-hover:text-accent transform group-hover:translate-x-1 transition-all duration-300" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-20 text-center"
                >
                    <p className="text-muted-foreground mb-6">
                        Pret a vivre une experience inoubliable ?
                    </p>
                    <a
                        href="/contact"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-medium rounded-full hover:bg-accent/90 transition-all duration-300"
                    >
                        <span>Nous contacter</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
