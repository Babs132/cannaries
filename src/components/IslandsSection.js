"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const islands = [
    {
        name: "Tenerife",
        slug: "tenerife",
        description: "Volcans & Teide",
        tagline: "La plus grande ile des Canaries, dominee par le majestueux Teide",
        img: "https://images.pexels.com/photos/2712534/pexels-photo-2712534.jpeg",
        stats: { altitude: "3718m", surface: "2034 km²" }
    },
    {
        name: "Lanzarote",
        slug: "lanzarote",
        description: "Terres de Feu",
        tagline: "Paysages lunaires et vignobles volcaniques uniques au monde",
        img: "https://images.pexels.com/photos/3540375/pexels-photo-3540375.jpeg",
        stats: { altitude: "671m", surface: "846 km²" }
    },
    {
        name: "La Palma",
        slug: "la-palma",
        description: "La Isla Bonita",
        tagline: "Forets luxuriantes et ciels etoiles classes UNESCO",
        img: "https://images.pexels.com/photos/5614631/pexels-photo-5614631.jpeg",
        stats: { altitude: "2426m", surface: "708 km²" }
    },
];

export default function IslandsSection() {
    return (
        <section id="islands" className="py-32 bg-background">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-20"
                >
                    <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
                        Destinations
                    </p>
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                            Nos iles
                            <br />
                            <span className="font-serif italic">a explorer</span>
                        </h2>
                        <p className="text-muted-foreground max-w-md leading-relaxed">
                            Chaque ile des Canaries offre une experience unique, 
                            des paysages volcaniques aux plages paradisiaques.
                        </p>
                    </div>
                </motion.div>

                {/* Islands Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {islands.map((island, index) => (
                        <motion.div
                            key={island.slug}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <Link href={`/islands/${island.slug}`} className="group block">
                                <div className="relative bg-card rounded-2xl overflow-hidden border border-border hover:border-accent/30 transition-all duration-500 hover-lift">
                                    {/* Image */}
                                    <div className="relative aspect-[4/5] overflow-hidden">
                                        <img
                                            src={island.img}
                                            alt={island.name}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                                        
                                        {/* Hover Overlay */}
                                        <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        
                                        {/* Explore Button */}
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                                            <span className="px-6 py-3 bg-foreground text-background text-sm font-medium rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                                Explorer
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <div className="flex items-start justify-between mb-3">
                                            <div>
                                                <h3 className="text-xl font-bold text-card-foreground group-hover:text-accent transition-colors duration-300">
                                                    {island.name}
                                                </h3>
                                                <p className="text-accent text-xs font-medium tracking-wider uppercase mt-1">
                                                    {island.description}
                                                </p>
                                            </div>
                                            <svg 
                                                className="w-5 h-5 text-muted group-hover:text-accent transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" 
                                                fill="none" 
                                                stroke="currentColor" 
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                                            </svg>
                                        </div>
                                        
                                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                                            {island.tagline}
                                        </p>

                                        {/* Stats */}
                                        <div className="flex gap-6 pt-4 border-t border-border">
                                            <div>
                                                <p className="text-xs text-muted uppercase tracking-wider">Altitude</p>
                                                <p className="text-sm font-medium text-card-foreground">{island.stats.altitude}</p>
                                            </div>
                                            <div>
                                                <p className="text-xs text-muted uppercase tracking-wider">Surface</p>
                                                <p className="text-sm font-medium text-card-foreground">{island.stats.surface}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* View All Link */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-16 text-center"
                >
                    <Link
                        href="/gallery"
                        className="inline-flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                    >
                        <span className="text-sm font-medium">Voir toutes les iles</span>
                        <svg 
                            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
