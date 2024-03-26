import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import DynamicIcon from "@/components/DynamicIcon";
import Image from "@/components/Image";
import Link from "@/components/Link";
import Tooltip from "@/components/Tooltip";
import React from "react";

export interface PortfolioCardProps {
    title: string;
    description: string;
    cover: string;
    link: string;
    stacks: string[];
}

export default function PortfolioCard({ title, description, cover, link, stacks }: PortfolioCardProps) {
    return (
        <div className="sticky top-24">
            <div className="relative flex h-64 w-full flex-col justify-between overflow-clip rounded-xl bg-cover bg-center px-4  py-2 text-white ring-2 transition-all duration-300 ease-in-out after:absolute  after:inset-0 after:bg-gradient-to-t after:from-black after:to-transparent ring-primary-900">
                <Image
                    src={cover}
                    alt={title}
                    className="absolute inset-0 h-full w-full rounded-xl object-cover object-center after:absolute  after:inset-0 after:z-10 after:bg-gradient-to-t after:from-black after:via-black after:to-transparent"
                    fill
                    sizes="(max-width: 800px) 100vw, (max-width: 1200px) 50vw, 40vw"
                />

                <div className="z-10 flex items-center justify-between">
                    {stacks && (
                        <div className="inline-flex gap-3 rounded-full bg-black/40 px-2 py-1 backdrop-blur-xl">
                            {stacks.map((tool) => (
                                <Tooltip key={tool} title={tool} position="bottom">
                                    <DynamicIcon name={tool} transform="scale(0.7)" />
                                </Tooltip>
                            ))}
                        </div>
                    )}

                    <Link href={link} className="absolute right-3 top-2 inline-flex cursor-pointer rounded-full bg-black/40 p-2 backdrop-blur-xl">
                        <ArrowTopRightOnSquareIcon className="h-4 w-4 hover:text-teal-400" />
                    </Link>
                </div>
                <div className="absolute bottom-4 z-10 flex w-full flex-1 flex-col  px-2 pr-8">
                    <h4 className="font-bold text-white">{title}</h4>
                    <p className="line-clamp-2 text-xs leading-relaxed text-primary-400">{description}</p>
                </div>
            </div>
        </div>
    );
}
