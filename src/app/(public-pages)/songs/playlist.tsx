'use client';

import { ExternalLink, Search } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { searchSongs } from '@/libs/api';
import { TopSong } from '@/types';

import { Track } from './track';

export function Playlist() {
  const [songs, setSongs] = useState<TopSong[] | undefined>(undefined);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isSearching, setIsSearching] = useState<boolean>(false);

  const onSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSearching(true);

    toast.promise(searchSongs(searchQuery), {
      loading: 'Searching songs...',
      success: (data) => {
        setSongs(data);
        setIsSearching(false);
        return 'Songs found';
      },
      error: () => {
        setIsSearching(false);
        return 'Failed to search songs';
      },
    });
  };

  const clearData = () => {
    setSearchQuery('');
    setSongs(undefined);
  };

  return (
    <div className='bg-primary-950 my-12 flex flex-col gap-4 rounded-xl border border-muted px-4 py-8'>
      <div className='flex justify-between'>
        <div className='flex flex-col gap-2'>
          <h3>Playlist</h3>
          <p className='text-primary'>
            Feel free to add your favorite songs to the playlist.
          </p>
        </div>

        <Link href='https://l.kta.blue/spotify-playlist' target='_blank'>
          <ExternalLink size={18} />
        </Link>
      </div>

      <form onSubmit={onSearch}>
        <div className='flex gap-2'>
          <Input
            type='text'
            placeholder='Search your favorite songs'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button
            type='submit'
            disabled={isSearching}
            aria-label='Search Button'
          >
            <Search size={16} />
          </Button>
        </div>
      </form>

      {songs && (
        <div className='grid grid-cols-2 gap-4 md:grid-cols-3'>
          {songs.map((song, idx) => (
            <Track key={idx} {...song} callbackRequest={clearData} asRequest />
          ))}
        </div>
      )}
    </div>
  );
}
