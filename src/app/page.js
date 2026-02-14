import Heading from "@/components/Heading";
import IslandCard from "@/components/IslandCard";
import Webcams from "@/components/Webcams";

const islands = [
    { name: "Tenerife", slug: "tenerife", description: "Volcans & Teide", img: "https://images.pexels.com/photos/2712534/pexels-photo-2712534.jpeg" },
    { name: "Lanzarote", slug: "lanzarote", description: "Terres de Feu", img: "https://images.pexels.com/photos/3540375/pexels-photo-3540375.jpeg" },
    { name: "La Palma", slug: "la-palma", description: "La Isla Bonita", img: "https://images.pexels.com/photos/5614631/pexels-photo-5614631.jpeg" },
];

export default function HomePage() {
    return (
        <main className="pt-32 px-12 max-w-7xl mx-auto pb-20">
            <Heading title="EXPLORER<br/>LES <span class='text-orange-500'>CANARIES</span>" subtitle="Archipel volcanique éternel" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {islands.map(is => <IslandCard key={is.slug} {...is} />)}
            </div>
        </main>
    );
}