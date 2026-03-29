import { Inter, Playfair_Display } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata = {
    title: "CanaryVibe - Explorez les Iles Canaries",
    description: "Decouvrez les iles Canaries, un archipel volcanique aux paysages spectaculaires et aux experiences uniques.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="fr" suppressHydrationWarning className={`${inter.variable} ${playfair.variable}`}>
        <body className="antialiased font-sans bg-background text-foreground">
        <Navbar />
        {children}
        <Footer />
        </body>
        </html>
    );
}
