"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

import { SEO } from "@/components/SEO";
import AddSong from "@/components/Spotify/AddSong";
import { DefaultLayout } from "@/layout";

export default function Playlist() {
    const [songSearch, setSongSearch] = useState("");
    const [results, setResults] = useState([]);

    const handleSearch = async (e) => {
        e.preventDefault();
        setResults(await fetch(`${process.env.NEXT_PUBLIC_API_URL}search?q=${songSearch}`).then((res) => res.json()));
    };

    const handleChange = (e) => {
        setSongSearch(e.target.value);
    };

    return (
        <DefaultLayout className="flex min-h-screen flex-col gap-4">
            <SEO title="Playlist" />
            <div className="flex flex-col  gap-4 md:my-24">
                <h1>Made for Me</h1>
                <iframe
                    title="Made for Me"
                    src="https://open.spotify.com/embed/playlist/5R5IdlSxHI3a5aTRTSYyUr?&theme=white"
                    width="100%"
                    height={500}
                    frameBorder={0}
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    className="rounded-2xl"
                />
            </div>
            <div className="flex flex-col gap-4">
                <h3>Add song to the playlist</h3>
                <form>
                    <div className="flex items-center gap-2">
                        <input
                            onChange={handleChange}
                            type="search"
                            placeholder="Search song"
                            className="flex w-48 flex-1 rounded-full bg-transparent px-3 py-2 ring-1 ring-green-500 transition-colors duration-300 ease-linear hover:bg-green-500 hover:text-white focus:bg-green-500 focus:text-white focus:outline-none focus:placeholder:text-white md:w-auto"
                        />
                        <button
                            type={"submit"}
                            onClick={handleSearch}
                            className="flex rounded-full p-3  ring-1 ring-green-500 transition-colors duration-300 ease-linear hover:bg-green-500 focus:bg-green-500 dark:ring-green-500"
                        >
                            <MagnifyingGlassIcon className="h-4 text-primary-800 dark:text-white" />
                        </button>
                    </div>
                </form>

                {results?.length > 0 && (
                    <div className="flex flex-col gap-2 rounded-xl bg-primary-100 p-6 dark:bg-primary-800">
                        <div className="my-4 flex flex-col gap-4 lg:flex-row lg:flex-wrap">
                            {results.map((result, idx) => (
                                <AddSong key={idx} {...result} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </DefaultLayout>
    );
}
