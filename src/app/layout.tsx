import "../styles/globals.css";
import { Inter } from "next/font/google";
import { twclsx } from "@/libs/twclsx";
import Analytics from "@/components/Analytics";
import Container from "@/components/Container";
import { getMetaPage } from "@/libs/metapage/metaPage";

const inter = Inter({
    subsets: ["latin"],
});

export const metadata = getMetaPage();

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <body className={twclsx(inter.className, "bg-primary-900 text-white overflow-x-hidden")}>
            <Analytics />
            {/* <Header /> */}
            <Container className="group/bg relative">
                {/* <main className="absolute inset-0 animate-tilt rounded-lg bg-gradient-to-r from-teal-600 to-sky-600 opacity-30 blur-xl transition duration-1000 group-hover/bg:opacity-100 group-hover/bg:duration-200" /> */}
                <main className={twclsx("min-h-screen")}>{children}</main>
            </Container>
        </body>
    );
}
