import Heading from "@/components/Heading";
import { fetchCanaryPhotos } from "../../lib/pixels";

export default async function GalleryPage() {
    const photos = await fetchCanaryPhotos("Canary Islands aerial");

    return (
        <main className="pt-32 px-12 max-w-7xl mx-auto pb-20">
            <Heading title="LA <span class='text-orange-500'>GALERIE</span>" subtitle="Tous les paysages en haute définition" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {photos.map(p => (
                    <img key={p.id} src={p.src.medium} className="aspect-square object-cover rounded-[1.5rem]" />
                ))}
            </div>
        </main>
    );
}