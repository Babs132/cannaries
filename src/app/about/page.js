import Heading from "@/components/Heading";

export default function AboutPage() {
    return (
        <main className="pt-32 px-12 max-w-4xl mx-auto pb-20">
            <Heading title="HISTOIRE & <span class='text-orange-500'>CLIMAT</span>" subtitle="Un printemps éternel" />
            <div className="space-y-8 text-slate-300 leading-relaxed font-light">
                <p>Les îles Canaries sont un archipel de l'océan Atlantique situé au large des côtes du Maroc...</p>
                <div className="bg-[#0a0c1a] p-10 rounded-[2.5rem] border border-white/5">
                    <h2 className="text-orange-500 font-black italic text-2xl uppercase mb-4">Le climat</h2>
                    <p>Profitez d'une température moyenne de 24°C toute l'année, idéale pour le télétravail ou les vacances.</p>
                </div>
            </div>
        </main>
    );
}