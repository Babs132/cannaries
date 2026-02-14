import { fetchCanaryPhotos } from "@/lib/pixels";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, AlertCircle } from "lucide-react";

export default async function IslandPage({ params }) {
    // 1. Extraction du slug
    const { slug } = await params;
    const islandName = slug.replace("-", " ");

    // 2. Récupération des données (Server-side)
    const photos = await fetchCanaryPhotos(islandName);

    // 3. Sécurité contre le TypeError (vérifie que c'est bien un tableau)
    const hasPhotos = Array.isArray(photos) && photos.length > 0;

    return (
        <main className="min-h-screen bg-black text-white p-8">
            <Link href="/" className="inline-flex items-center gap-2 text-zinc-500 hover:text-orange-500 mb-10 text-[10px] font-bold uppercase tracking-widest transition-colors">
                <ArrowLeft size={14} /> Retour à l'archipel
            </Link>

            <header className="mb-12">
                <h1 className="text-7xl font-black uppercase tracking-tighter italic">
                    {islandName}<span className="text-orange-500">.</span>
                </h1>
            </header>

            {!hasPhotos ? (
                <div className="flex flex-col items-center justify-center py-24 border border-dashed border-zinc-800 rounded-[3rem]">
                    <AlertCircle className="text-orange-500 mb-4" size={32} />
                    <p className="text-zinc-500 uppercase text-[10px] font-bold tracking-widest text-center">
                        Connexion interrompue ou clé invalide.<br/>Vérifiez votre console de terminal.
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {photos.map((photo) => (
                        <div key={photo.id} className="relative h-96 group rounded-[2rem] overflow-hidden bg-zinc-900 border border-white/5">
                            <Image
                                src={photo.src.large2x}
                                alt={photo.alt || islandName}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-8 flex items-end opacity-0 group-hover:opacity-100 transition-opacity">
                                <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                                    Shot by {photo.photographer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </main>
    );
}