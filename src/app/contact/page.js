import Heading from "@/components/Heading";

export default function ContactPage() {
    return (
        <main className="pt-32 px-12 max-w-4xl mx-auto pb-20">
            <Heading title="PRENDRE <span class='text-orange-500'>CONTACT</span>" subtitle="Besoin d'aide pour votre voyage ?" />
            <form className="space-y-6">
                <input type="text" placeholder="Nom complet" className="w-full bg-[#0a0c1a] border border-white/10 rounded-2xl p-5 text-white outline-none focus:border-orange-500" />
                <textarea placeholder="Votre message" rows="5" className="w-full bg-[#0a0c1a] border border-white/10 rounded-2xl p-5 text-white outline-none focus:border-orange-500"></textarea>
                <button className="bg-orange-500 text-black font-black uppercase tracking-widest py-4 px-10 rounded-full hover:scale-105 transition-transform">Envoyer</button>
            </form>
        </main>
    );
}