import Link from 'next/link';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { actionAddToPlaylist } from '@/libs/server-actions/spotify';
import { TopSong } from '@/types';

type TrackProps = {
  asLink?: boolean;
  asRequest?: boolean;
  callbackRequest?: () => void;
} & TopSong;

export function Track({
  songUri,
  songUrl,
  songImage,
  colors,
  title,
  artist,
  asLink,
  asRequest,
  callbackRequest,
}: TrackProps) {
  const Wrapper = asLink ? Link : 'div';

  const handleAction = async () => {
    const buttonAddPlaylist = document.querySelectorAll('#button-add-playlist');
    // disabled all button
    buttonAddPlaylist.forEach((button) => {
      button.setAttribute('disabled', 'true');
    });

    toast.promise(actionAddToPlaylist(songUri), {
      loading: 'Adding song to playlist...',
      success: 'Song added to playlist',
      error: 'Failed to add song to playlist',
    });

    buttonAddPlaylist.forEach((button) => {
      button.setAttribute('disabled', 'false');
    });
    callbackRequest?.();
  };

  return (
    <Wrapper href={asLink ? songUrl : ''} passHref={asLink}>
      <div
        className='flex aspect-square size-full items-center gap-4 overflow-hidden rounded-xl bg-primary-800 text-white hover:ring-1 hover:ring-primary-500 md:size-full'
        style={{
          backgroundImage: `linear-gradient(to top, ${colors?.dark ?? 'transparent'}, transparent), url(${songImage})`,
          backgroundSize: 'cover',
        }}
      >
        <div className='flex h-full w-full flex-col justify-end gap-3 p-2'>
          <div className='flex-flex-col gap-1'>
            <h6 className='line-clamp-2 text-balance text-sm font-semibold md:text-base'>
              {title}
            </h6>
            <p className='line-clamp-1 text-xs text-primary-200 md:line-clamp-2'>
              {artist}
            </p>
          </div>

          {asRequest && (
            <form className='flex w-full' action={handleAction}>
              <Button type='submit' className='w-full' id='button-add-playlist'>
                Add to Playlist
              </Button>
            </form>
          )}
        </div>
      </div>
    </Wrapper>
  );
}
