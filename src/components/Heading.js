export default function Heading({ title, subtitle }) {
    return (
        <header className="mb-16">
            <h1 className="text-7xl font-black italic uppercase tracking-tighter leading-none"
                dangerouslySetInnerHTML={{ __html: title }} />
            <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.4em] mt-4">
                {subtitle}
            </p>
        </header>
    );
}