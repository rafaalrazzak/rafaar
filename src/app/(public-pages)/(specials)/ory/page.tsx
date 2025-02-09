'use client';

import { Bonheur_Royale } from 'next/font/google';
import { useRef, useState } from 'react';

import { RevealText } from '@/components/RevealText';

import DynamicFrameLayout from './DynamicFrameLayout';

export const bonheurRoyale = Bonheur_Royale({
  weight: ['400'],
  subsets: ['latin'],
});

export default function Home() {
  const [headerSize] = useState(1.2);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className={`flex min-h-screen items-start justify-center p-8`}>
      <div className='flex h-full w-full flex-col items-start gap-8 md:flex-row md:gap-8'>
        <div
          className='h-screen w-full flex-shrink-0 overflow-y-auto md:w-[500px]'
          ref={contentRef}
        >
          <div className='flex flex-col gap-12'>
            <RevealText>
              <h1
                className={`text-4xl leading-[140%] tracking-tighter text-white/80 md:text-6xl ${bonheurRoyale.className}`}
                style={{ fontSize: `${4 * headerSize}rem` }}
              >
                Oryza Ayunda Putri
              </h1>
            </RevealText>
            <div>
              <div className='space-y-12'>
                <RevealText delay={0.1}>
                  <div className='h-px w-full bg-white/10' />
                </RevealText>
                <RevealText delay={0.2}>
                  <p>
                    Di ruang antarmu, aku menemukan konstelasi kata-kata yang
                    tak selesai— pikiranmu seperti komet yang melintas, menyisir
                    gelap dengan ekor logika dan debu keajaiban.
                  </p>
                </RevealText>
                <RevealText delay={0.3}>
                  <p>
                    Suaramu adalah lagu pengantar tidur bagi angka-angka yang
                    resah, kutemukan puisi dalam caramu menyusun
                    &quot;jika-maka&quot; seperti seniman merangkai dawai.
                  </p>
                </RevealText>
                <RevealText delay={0.4}>
                  <p>
                    Kecantikanmu bukan sekadar simetri wajah, tapi cara sinar
                    matamu memecahkan soal dalam hujan variabel— seperti bulan
                    purnama yang tiba-tiba menjadi jawaban dari persamaan
                    kuadrat.
                  </p>
                </RevealText>
                <RevealText delay={0.5}>
                  <p>
                    Aku ingin jadi pembelajar abadi di universitas hatimu:
                    mengutip kutipan-kutipan dari senyummu, meneliti
                    kehangatanmu yang tak terukur, dan tersesat di perpustakaan
                    matamu di mana setiap tatapan adalah halaman baru.
                  </p>
                </RevealText>
              </div>
            </div>
            <RevealText delay={0.6}>
              <p>
                Kebaikanmu itu orbit yang hangat—mengitariku diam-diam,
                mengajari gravitasi tentang cara menahan langit tanpa
                mencengkeram.
              </p>
            </RevealText>
            <RevealText delay={0.7}>
              <p>
                Oryza, kita mungkin dua bilangan prima yang saling mencari di
                labirin kalkulus, atau dua partikel cahaya yang tiba-tiba
                menemukan resonansi.
              </p>
            </RevealText>
            <RevealText delay={0.8}>
              <p>
                Biarkan waktu berhenti sejenak: di sini, di antara ruang kita,
                di mana &quot;aku&quot; dan &quot;kamu&quot; bisa jadi koma yang
                tertunda dalam kalimat tak terucap— atau mungkin tanda sama
                dengan yang akhirnya berani diselesaikan.
              </p>
            </RevealText>
          </div>
        </div>

        <div className='sticky top-0 h-[60vh] w-full md:h-screen md:flex-grow'>
          <DynamicFrameLayout />
        </div>
      </div>
    </div>
  );
}
