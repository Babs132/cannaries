// src/components/Navbar.js
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center px-12 py-8 fixed w-full z-50 bg-[#020617]/80 backdrop-blur-md border-b border-white/5">
            <div className="text-xl font-black italic tracking-tighter text-white">
                CANARY<span className="text-orange-500">VIBE</span>
            </div>
            <div className="flex gap-8 text-[11px] font-bold uppercase tracking-widest text-slate-400">
                <Link href="/" className="hover:text-white transition-all">Accueil</Link>
                <Link href="/about" className="hover:text-white transition-all">About</Link>
                <Link href="/gallery" className="hover:text-white transition-all">Gallery</Link>
                <Link href="/contact" className="hover:text-white transition-all">Contact</Link>
            </div>
        </nav>
    );
}