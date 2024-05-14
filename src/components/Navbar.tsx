"use client";

import APP_ROUTE from "@/data/AppRoute";
import Link from "./Link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/libs/utils";

export default function Navbar() {
    const pathname = usePathname();
    const isCurrentPath = (path: string) => pathname === path;

    return (
        <header className="flex justify-center items-center py-2 z-[100] fixed left-0 right-0 top-0 print:hidden">
            <nav className="flex gap-3 bg-primary-800/50 rounded-full backdrop-blur-xl border border-primary-700/80 px-4">
                {APP_ROUTE.map((item, i) => (
                    <Link key={i} href={item.path}>
                        <Button variant="link" className={cn(`text-primary-300 px-0 ${isCurrentPath(item.path) ? "text-primary-100 font-bold" : "text-primary-400"}`)}>
                            {item.name}
                        </Button>
                    </Link>
                ))}
            </nav>
        </header>
    );
}
