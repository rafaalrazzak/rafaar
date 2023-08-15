export interface Track {
    title: string;
    artist: string;
    songUrl: string;
    songImage: string;
}

interface SpotifyData {
    nowPlaying: {
        isPlaying: boolean;
    } & Track;
    topTracks: Track[];
}

export const getSpotify = async (): Promise<SpotifyData | null> => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/personal/dynamic`, {
            next: { revalidate: 180 },
        });
        return response.json();
    } catch (error) {
        console.error(error);
        return null;
    }
};
