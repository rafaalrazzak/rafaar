import "../styles/globals.css";
import { Inter } from "next/font/google";
import Analytics from "@/components/Analytics";
import Container from "@/components/Container";
import { Toaster } from "@/components/ui/sonner";
import { getMetaPage } from "@/libs/metapage/metaPage";
import { cn } from "@/libs/utils";

const inter = Inter({
    subsets: ["latin"],
});

export const metadata = getMetaPage();

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html>
            <body className={cn(inter.className, "bg-primary-900 text-white overflow-x-hidden")}>
                <Analytics />
                <Toaster />
                <Container>
                    <main className={cn("min-h-screen py-12")}>{children}</main>
                </Container>
            </body>
        </html>
    );
}
