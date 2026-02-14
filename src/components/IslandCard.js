"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function IslandCard({ name, slug, img, description }) {
    return (
        // Le href pointe vers le dossier [[slug]] créé plus haut
        <Link href={`/islands/${slug}`}>
            <motion.div whileHover={{ y: -10 }} className="cursor-pointer group bg-[#0a0c1a] border border-white/5 rounded-[2.5rem] p-5">
                <div className="relative aspect-square rounded-[2rem] overflow-hidden mb-6">
                    <img src={img} className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="bg-orange-500 text-black font-black px-6 py-2 rounded-full text-xs uppercase shadow-xl">
                            Explorer
                        </div>
                    </div>
                </div>
                <h3 className="text-xl font-black italic uppercase">{name}</h3>
                <p className="text-orange-500 text-[10px] font-black uppercase tracking-widest">{description}</p>
            </motion.div>
        </Link>
    );
}