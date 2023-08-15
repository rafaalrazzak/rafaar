import "../styles/globals.css";
import { Inter } from "next/font/google";
import { twclsx } from "@/libs/twclsx";
import Container from "@/components/Container";
import { getMetaPage } from "@/libs/metapage/metaPage";

const inter = Inter({
    subsets: ["latin"],
});

export const metadata = getMetaPage();

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <body className={twclsx(inter.className, "bg-black text-white overflow-x-hidden")}>
            {/* <Header /> */}
            <Container className="group/bg relative mt-12 md:mt-0">
                <main className="absolute inset-0 animate-tilt rounded-lg bg-gradient-to-r from-teal-600 to-sky-600 opacity-30 blur-xl transition duration-1000 group-hover/bg:opacity-100 group-hover/bg:duration-200" />
                <main className={twclsx("relative -mx-6 rounded-t-xl border-x border-t  px-6 py-4 border-secondary-500/80 bg-primary-900 sm:rounded-none sm:border-t-0 min-h-screen")}>{children}</main>
            </Container>
        </body>
    );
}
