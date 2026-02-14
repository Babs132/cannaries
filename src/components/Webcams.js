"use client";
import { motion } from "framer-motion";
import { Video, ExternalLink, MapPin } from "lucide-react";

const webcamList = [
    {
        id: 1,
        location: "Tenerife - Playa de Los Cristianos",
        url: "https://www.skylinewebcams.com/fr/webcam/espana/canarias/santa-cruz-de-tenerife/playa-los-cristianos.html",
        type: "Plage",
    },
    {
        id: 2,
        location: "Lanzarote - Playa Blanca",
        url: "https://www.skylinewebcams.com/fr/webcam/espana/canarias/las-palmas/playa-blanca.html",
        type: "Port",
    },
    {
        id: 3,
        location: "La Palma - Santa Cruz",
        url: "https://www.skylinewebcams.com/fr/webcam/espana/canarias/santa-cruz-de-tenerife/santa-cruz-de-la-palma.html",
        type: "Ville",
    },
    {
        id: 4,
        location: "Fuerteventura - Corralejo",
        url: "https://www.skylinewebcams.com/fr/webcam/espana/canarias/las-palmas/corralejo-grandes-playas.html",
        type: "Surf",
    }
];

export default function Webcams() {
    return (
        <section className="py-20">
            <div className="flex items-center gap-4 mb-10">
                <div className="bg-orange-500 p-3 rounded-2xl text-black">
                    <Video size={24} />
                </div>
                <div>
                    <h2 className="text-3xl font-black italic uppercase tracking-tighter">Live <span className="text-orange-500">Streams</span></h2>
                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest">Météo en temps réel via SkylineWebcams</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {webcamList.map((cam) => (
                    <motion.a
                        key={cam.id}
                        href={cam.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        className="group bg-[#0a0c1a] border border-white/5 rounded-[2rem] p-6 flex items-center justify-between transition-all hover:border-orange-500/30"
                    >
                        <div className="flex items-center gap-5">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-black transition-colors">
                                <MapPin size={20} />
                            </div>
                            <div>
                                <h3 className="font-bold text-white uppercase italic tracking-tight">{cam.location}</h3>
                                <span className="text-[9px] font-black text-slate-500 uppercase tracking-[0.2em]">{cam.type}</span>
                            </div>
                        </div>
                        <ExternalLink size={18} className="text-slate-600 group-hover:text-orange-500 transition-colors" />
                    </motion.a>
                ))}
            </div>

            <p className="mt-8 text-center text-slate-600 text-[9px] uppercase font-bold tracking-[0.3em]">
                Flux officiels fournis par salutilescanaries.com
            </p>
        </section>
    );
}