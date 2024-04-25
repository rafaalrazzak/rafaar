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
            <Container>
                <main className={twclsx("min-h-screen py-6")}>{children}</main>
            </Container>
        </body>
    );
}
