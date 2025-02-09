'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';

import { FrameComponent } from './FrameComponent';

interface Frame {
  id: number;
  image: string;
  defaultPos: { x: number; y: number; w: number; h: number };
  corner: string;
  edgeHorizontal: string;
  edgeVertical: string;
  mediaSize: number;
  borderThickness: number;
  borderSize: number;
  autoplayMode: 'all' | 'hover';
  isHovered: boolean;
}

const initialFrames: Frame[] = [
  {
    id: 1,
    image: '/ory/oryza-cntk-1.jpg',
    defaultPos: { x: 0, y: 0, w: 4, h: 4 },
    corner:
      'https://static.cdn-luma.com/files/bcf576df9c38b05f/1_corner_update.png',
    edgeHorizontal:
      'https://static.cdn-luma.com/files/bcf576df9c38b05f/1_vert_update.png',
    edgeVertical:
      'https://static.cdn-luma.com/files/bcf576df9c38b05f/1_hori_update.png',
    mediaSize: 1,
    borderThickness: 0,
    borderSize: 80,
    autoplayMode: 'all',
    isHovered: false,
  },
  {
    id: 2,
    image: '/ory/oryza-cntk-2.jpg',
    defaultPos: { x: 4, y: 0, w: 4, h: 4 },
    corner:
      'https://static.cdn-luma.com/files/bcf576df9c38b05f/2_corner_update.png',
    edgeHorizontal:
      'https://static.cdn-luma.com/files/bcf576df9c38b05f/2_vert_update.png',
    edgeVertical:
      'https://static.cdn-luma.com/files/bcf576df9c38b05f/2_hori_update.png',
    mediaSize: 1,
    borderThickness: 0,
    borderSize: 80,
    autoplayMode: 'all',
    isHovered: false,
  },
  {
    id: 3,
    image: '/ory/oryza-cntk-3.jpg',
    defaultPos: { x: 8, y: 0, w: 4, h: 4 },
    corner:
      'https://static.cdn-luma.com/files/3d36d1e0dba2476c/3_Corner_update.png',
    edgeHorizontal:
      'https://static.cdn-luma.com/files/3d36d1e0dba2476c/3_hori_update.png',
    edgeVertical:
      'https://static.cdn-luma.com/files/3d36d1e0dba2476c/3_Vert_update.png',
    mediaSize: 1,
    borderThickness: 0,
    borderSize: 80,
    autoplayMode: 'all',
    isHovered: false,
  },
  {
    id: 4,
    image: '/ory/oryza-cntk-4.jpg',
    defaultPos: { x: 0, y: 4, w: 4, h: 4 },
    corner:
      'https://static.cdn-luma.com/files/9e67e05f37e52522/4_corner_update.png',
    edgeHorizontal:
      'https://static.cdn-luma.com/files/9e67e05f37e52522/4_hori_update.png',
    edgeVertical:
      'https://static.cdn-luma.com/files/9e67e05f37e52522/4_vert_update.png',
    mediaSize: 1,
    borderThickness: 0,
    borderSize: 80,
    autoplayMode: 'all',
    isHovered: false,
  },
  {
    id: 5,
    image: '/ory/oryza-cntk-5.jpg',
    defaultPos: { x: 4, y: 4, w: 4, h: 4 },
    corner:
      'https://static.cdn-luma.com/files/9e67e05f37e52522/5_corner_update.png',
    edgeHorizontal:
      'https://static.cdn-luma.com/files/9e67e05f37e52522/5_hori_update.png',
    edgeVertical:
      'https://static.cdn-luma.com/files/9e67e05f37e52522/5_verti_update.png',
    mediaSize: 1,
    borderThickness: 0,
    borderSize: 80,
    autoplayMode: 'all',
    isHovered: false,
  },
  {
    id: 6,
    image: '/ory/oryza-cntk-6.jpg',
    defaultPos: { x: 8, y: 4, w: 4, h: 4 },
    corner: 'https://static.cdn-luma.com/files/1199340587e8da1d/6_corner.png',
    edgeHorizontal:
      'https://static.cdn-luma.com/files/1199340587e8da1d/6_corner-1.png',
    edgeVertical:
      'https://static.cdn-luma.com/files/1199340587e8da1d/6_vert.png',
    mediaSize: 1,
    borderThickness: 0,
    borderSize: 80,
    autoplayMode: 'all',
    isHovered: false,
  },
  {
    id: 7,
    image: '/ory/oryza-cntk-7.jpg',
    defaultPos: { x: 0, y: 8, w: 4, h: 4 },
    corner: 'https://static.cdn-luma.com/files/b80b5aa00ccc33bd/7_corner.png',
    edgeHorizontal:
      'https://static.cdn-luma.com/files/b80b5aa00ccc33bd/7_hori.png',
    edgeVertical:
      'https://static.cdn-luma.com/files/b80b5aa00ccc33bd/7_vert.png',
    mediaSize: 1,
    borderThickness: 0,
    borderSize: 80,
    autoplayMode: 'all',
    isHovered: false,
  },
  {
    id: 8,
    image: '/ory/oryza-cntk-8.jpg',
    defaultPos: { x: 4, y: 8, w: 4, h: 4 },
    corner: 'https://static.cdn-luma.com/files/981e483f71aa764b/8_corner.png',
    edgeHorizontal:
      'https://static.cdn-luma.com/files/981e483f71aa764b/8_hori.png',
    edgeVertical:
      'https://static.cdn-luma.com/files/981e483f71aa764b/8_verticle.png',
    mediaSize: 1,
    borderThickness: 0,
    borderSize: 80,
    autoplayMode: 'all',
    isHovered: false,
  },
  {
    id: 9,
    image: '/ory/oryza-cntk-9.jpg',
    defaultPos: { x: 8, y: 8, w: 4, h: 4 },
    corner: 'https://static.cdn-luma.com/files/981e483f71aa764b/9_corner.png',
    edgeHorizontal:
      'https://static.cdn-luma.com/files/981e483f71aa764b/9_hori.png',
    edgeVertical:
      'https://static.cdn-luma.com/files/981e483f71aa764b/9_vert.png',
    mediaSize: 1,
    borderThickness: 0,
    borderSize: 80,
    autoplayMode: 'all',
    isHovered: false,
  },
];

export default function DynamicFrameLayout() {
  const [frames, setFrames] = useState<Frame[]>(initialFrames);
  const [hovered, setHovered] = useState<{ row: number; col: number } | null>(
    null
  );
  const [hoverSize, setHoverSize] = useState(6);
  const [gapSize, setGapSize] = useState(4);
  const [showControls, setShowControls] = useState(false);
  const [cleanInterface, setCleanInterface] = useState(true);
  const [showFrames, setShowFrames] = useState(false);

  const getRowSizes = () => {
    if (hovered === null) {
      return '4fr 4fr 4fr';
    }
    const { row } = hovered;
    const nonHoveredSize = (12 - hoverSize) / 2;
    return [0, 1, 2]
      .map((r) => (r === row ? `${hoverSize}fr` : `${nonHoveredSize}fr`))
      .join(' ');
  };

  const getColSizes = () => {
    if (hovered === null) {
      return '4fr 4fr 4fr';
    }
    const { col } = hovered;
    const nonHoveredSize = (12 - hoverSize) / 2;
    return [0, 1, 2]
      .map((c) => (c === col ? `${hoverSize}fr` : `${nonHoveredSize}fr`))
      .join(' ');
  };

  const getTransformOrigin = (x: number, y: number) => {
    const vertical = y === 0 ? 'top' : y === 4 ? 'center' : 'bottom';
    const horizontal = x === 0 ? 'left' : x === 4 ? 'center' : 'right';
    return `${vertical} ${horizontal}`;
  };

  const updateFrameProperty = (
    id: number,
    property: keyof Frame,
    value: number
  ) => {
    setFrames(
      frames.map((frame) =>
        frame.id === id ? { ...frame, [property]: value } : frame
      )
    );
  };

  const toggleControls = () => {
    setShowControls(!showControls);
  };

  const toggleCleanInterface = () => {
    setCleanInterface(!cleanInterface);
    if (!cleanInterface) {
      setShowControls(false);
    }
  };

  const updateCodebase = () => {
    console.log('Updating codebase with current values:');
    console.log('Hover Size:', hoverSize);
    console.log('Gap Size:', gapSize);
    console.log('Frames:', frames);
  };

  return (
    <div className='flex h-full w-full flex-col space-y-4'>
      <div className='mb-4 flex items-center justify-between'>
        <div className='flex items-center space-x-4'>
          <div className='flex items-center space-x-2'>
            <Switch
              id='frame-toggle'
              checked={showFrames}
              onCheckedChange={setShowFrames}
            />
            <label htmlFor='frame-toggle' className='text-sm text-white/70'>
              {showFrames ? 'Hide Frames' : 'Show Frames'}
            </label>
          </div>
        </div>
      </div>
      {!cleanInterface && (
        <div className='flex items-center justify-between'>
          <h2 className='text-2xl font-bold text-white'>
            Dynamic Frame Layout
          </h2>
          <div className='space-x-2'>
            <Button onClick={toggleControls}>
              {showControls ? 'Hide Controls' : 'Show Controls'}
            </Button>
            <Button onClick={updateCodebase}>Update Codebase</Button>
            <Button onClick={toggleCleanInterface}>
              {cleanInterface ? 'Show UI' : 'Hide UI'}
            </Button>
          </div>
        </div>
      )}
      {!cleanInterface && showControls && (
        <>
          <div className='space-y-2'>
            <label
              htmlFor='hover-size'
              className='block text-sm font-medium text-gray-200'
            >
              Hover Size: {hoverSize}
            </label>
            <Slider
              id='hover-size'
              min={4}
              max={8}
              step={0.1}
              value={[hoverSize]}
              onValueChange={(value) => setHoverSize(value[0])}
            />
          </div>
          <div className='space-y-2'>
            <label
              htmlFor='gap-size'
              className='block text-sm font-medium text-gray-200'
            >
              Gap Size: {gapSize}px
            </label>
            <Slider
              id='gap-size'
              min={0}
              max={20}
              step={1}
              value={[gapSize]}
              onValueChange={(value) => setGapSize(value[0])}
            />
          </div>
        </>
      )}
      <div
        className='relative w-full flex-grow'
        style={{
          display: 'grid',
          gridTemplateRows: getRowSizes(),
          gridTemplateColumns: getColSizes(),
          gap: `${gapSize}px`,
          transition:
            'grid-template-rows 0.4s ease, grid-template-columns 0.4s ease',
        }}
      >
        {frames.map((frame) => {
          const row = Math.floor(frame.defaultPos.y / 4);
          const col = Math.floor(frame.defaultPos.x / 4);
          const transformOrigin = getTransformOrigin(
            frame.defaultPos.x,
            frame.defaultPos.y
          );

          return (
            <motion.div
              key={frame.id}
              className='relative'
              style={{ transformOrigin, transition: 'transform 0.4s ease' }}
              onMouseEnter={() => setHovered({ row, col })}
              onMouseLeave={() => setHovered(null)}
            >
              <FrameComponent
                image={frame.image}
                width='100%'
                height='100%'
                className='absolute inset-0'
                corner={frame.corner}
                edgeHorizontal={frame.edgeHorizontal}
                edgeVertical={frame.edgeVertical}
                mediaSize={frame.mediaSize}
                borderThickness={frame.borderThickness}
                borderSize={frame.borderSize}
                onMediaSizeChange={(value) =>
                  updateFrameProperty(frame.id, 'mediaSize', value)
                }
                onBorderThicknessChange={(value) =>
                  updateFrameProperty(frame.id, 'borderThickness', value)
                }
                onBorderSizeChange={(value) =>
                  updateFrameProperty(frame.id, 'borderSize', value)
                }
                showControls={showControls && !cleanInterface}
                label={`Frame ${frame.id}`}
                showFrame={showFrames}
                autoplayMode={'all'}
                isHovered={
                  hovered?.row === Math.floor(frame.defaultPos.y / 4) &&
                  hovered?.col === Math.floor(frame.defaultPos.x / 4)
                }
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
