'use client';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

import { Slider } from '@/components/ui/slider';

interface FrameComponentProps {
  image: string;
  width: number | string;
  height: number | string;
  className?: string;
  corner: string;
  edgeHorizontal: string;
  edgeVertical: string;
  mediaSize: number;
  borderThickness: number;
  borderSize: number;
  onMediaSizeChange: (value: number) => void;
  onBorderThicknessChange: (value: number) => void;
  onBorderSizeChange: (value: number) => void;
  showControls: boolean;
  label: string;
  showFrame: boolean;
  autoplayMode: 'all' | 'hover';
  isHovered: boolean;
}

export function FrameComponent({
  image,
  width,
  height,
  className = '',
  corner,
  edgeHorizontal,
  edgeVertical,
  mediaSize,
  borderThickness,
  borderSize,
  onMediaSizeChange,
  onBorderThicknessChange,
  onBorderSizeChange,
  showControls,
  label,
  showFrame,
}: FrameComponentProps) {
  return (
    <div
      className={`relative ${className}`}
      style={{
        width,
        height,
        transition: 'width 0.3s ease-in-out, height 0.3s ease-in-out',
      }}
    >
      <div className='relative h-full w-full overflow-hidden'>
        {/* Video with Border */}
        <div
          className='absolute inset-0 flex items-center justify-center'
          style={{
            zIndex: 1,
            transition: 'all 0.3s ease-in-out',
            padding: showFrame ? `${borderThickness}px` : '0',
            width: showFrame ? `${borderSize}%` : '100%',
            height: showFrame ? `${borderSize}%` : '100%',
            left: showFrame ? `${(100 - borderSize) / 2}%` : '0',
            top: showFrame ? `${(100 - borderSize) / 2}%` : '0',
          }}
        >
          <div
            className='h-full w-full overflow-hidden'
            style={{
              transform: `scale(${mediaSize})`,
              transformOrigin: 'center',
              transition: 'transform 0.3s ease-in-out',
            }}
          >
            <Image
              alt={image}
              className='h-full w-full object-cover'
              src={image}
              width={1000}
              height={100}
             
            />
          </div>
        </div>

        {/* Frame Elements (Higher z-index) */}
        {showFrame && (
          <div className='absolute inset-0' style={{ zIndex: 2 }}>
            {/* Corners */}
            <div
              className='absolute left-0 top-0 h-16 w-16 bg-contain bg-no-repeat'
              style={{ backgroundImage: `url(${corner})` }}
            />
            <div
              className='absolute right-0 top-0 h-16 w-16 bg-contain bg-no-repeat'
              style={{
                backgroundImage: `url(${corner})`,
                transform: 'scaleX(-1)',
              }}
            />
            <div
              className='absolute bottom-0 left-0 h-16 w-16 bg-contain bg-no-repeat'
              style={{
                backgroundImage: `url(${corner})`,
                transform: 'scaleY(-1)',
              }}
            />
            <div
              className='absolute bottom-0 right-0 h-16 w-16 bg-contain bg-no-repeat'
              style={{
                backgroundImage: `url(${corner})`,
                transform: 'scale(-1, -1)',
              }}
            />

            {/* Edges */}
            <div
              className='absolute left-16 right-16 top-0 h-16'
              style={{
                backgroundImage: `url(${edgeHorizontal})`,
                backgroundSize: 'auto 64px',
                backgroundRepeat: 'repeat-x',
              }}
            />
            <div
              className='absolute bottom-0 left-16 right-16 h-16'
              style={{
                backgroundImage: `url(${edgeHorizontal})`,
                backgroundSize: 'auto 64px',
                backgroundRepeat: 'repeat-x',
                transform: 'rotate(180deg)',
              }}
            />
            <div
              className='absolute bottom-16 left-0 top-16 w-16'
              style={{
                backgroundImage: `url(${edgeVertical})`,
                backgroundSize: '64px auto',
                backgroundRepeat: 'repeat-y',
              }}
            />
            <div
              className='absolute bottom-16 right-0 top-16 w-16'
              style={{
                backgroundImage: `url(${edgeVertical})`,
                backgroundSize: '64px auto',
                backgroundRepeat: 'repeat-y',
                transform: 'scaleX(-1)',
              }}
            />
          </div>
        )}
      </div>

      {/* Controls */}
      {showControls && (
        <div className='absolute bottom-0 left-0 right-0 z-10 bg-black bg-opacity-50 p-2'>
          <div className='mb-2 font-bold text-white'>{label}</div>
          <div className='space-y-2'>
            <div>
              <label
                htmlFor={`media-size-${label}`}
                className='block text-sm font-medium text-white'
              >
                Media Size: {mediaSize.toFixed(2)}
              </label>
              <Slider
                id={`media-size-${label}`}
                min={0.5}
                max={3}
                step={0.01}
                value={[mediaSize]}
                onValueChange={(value) => onMediaSizeChange(value[0])}
              />
            </div>
            <div>
              <label
                htmlFor={`border-thickness-${label}`}
                className='block text-sm font-medium text-white'
              >
                Border Thickness: {borderThickness}px
              </label>
              <Slider
                id={`border-thickness-${label}`}
                min={0}
                max={20}
                step={1}
                value={[borderThickness]}
                onValueChange={(value) => onBorderThicknessChange(value[0])}
              />
            </div>
            <div>
              <label
                htmlFor={`border-size-${label}`}
                className='block text-sm font-medium text-white'
              >
                Border Size: {borderSize}%
              </label>
              <Slider
                id={`border-size-${label}`}
                min={50}
                max={100}
                step={1}
                value={[borderSize]}
                onValueChange={(value) => onBorderSizeChange(value[0])}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
