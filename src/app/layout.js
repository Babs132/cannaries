import Navbar from "@/components/Navbar";
import "./globals.css";

export default function RootLayout({ children }) {
    return (
        <html lang="fr" suppressHydrationWarning>
        <body className="antialiased">
        <Navbar />
        {children}
        </body>
        </html>
    );
}