import { ImageResponse } from 'next/og';

import { getTopSongs } from '@/libs/api';

// Define interfaces for the song data
interface Song {
  colors: {
    dark: string;
    lighter: string;
  };
  songImage: string;
  title: string;
  artist: string;
}

interface ContainerProps {
  backgroundColor: string;
  image: string;
  textColor: string;
  label: string;
  title: string;
  artist: string;
}

const Container: React.FC<ContainerProps> = ({
  backgroundColor,
  image,
  textColor,
  label,
  title,
  artist,
}) => (
  <main
    style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor,
      padding: '20px',
      boxSizing: 'border-box',
    }}
  >
    <div
      style={{
        display: 'flex',
        width: '100%',
        height: '100%',
        backgroundColor,
        borderRadius: '10px',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          width: '50%',
          height: '100%',
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div
        style={{
          width: '50%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '20px',
          color: textColor,
        }}
      >
        <div
          style={{
            backgroundColor: textColor,
            color: backgroundColor,
            borderRadius: '999px',
            padding: '5px 10px',
            alignSelf: 'flex-start',
            marginBottom: '20px',
          }}
        >
          {label}
        </div>
        <h1 style={{ margin: '0', fontSize: '64px', fontWeight: 'bold' }}>
          {title}
        </h1>
        <p style={{ margin: '0', fontSize: '28px' }}>{artist}</p>
      </div>
    </div>
  </main>
);

export async function GET() {
  const topSongs: Song[] = await getTopSongs();

  const response = (
    <Container
      backgroundColor={topSongs[0].colors.dark}
      image={topSongs[0].songImage}
      textColor='white'
      label='Top Track'
      title={topSongs[0].title}
      artist={topSongs[0].artist}
    />
  );

  return new ImageResponse(response, { width: 1200, height: 630 });
}
