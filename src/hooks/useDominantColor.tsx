"use client";

import { useState, useEffect } from "react";

function getDominantColor(imageUrl: string): Promise<number[]> {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.src = imageUrl;

        img.onload = async () => {
            try {
                const bitmap = await createImageBitmap(img);
                const canvas = document.createElement("canvas");
                const ctx = canvas.getContext("2d");
                canvas.width = bitmap.width;
                canvas.height = bitmap.height;
                ctx.drawImage(bitmap, 0, 0, canvas.width, canvas.height);

                const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
                const color = [0, 0, 0];

                for (let i = 0; i < data.length; i += 4) {
                    color[0] += data[i];
                    color[1] += data[i + 1];
                    color[2] += data[i + 2];
                }

                const pixelCount = data.length / 4;
                color[0] = Math.floor(color[0] / pixelCount);
                color[1] = Math.floor(color[1] / pixelCount);
                color[2] = Math.floor(color[2] / pixelCount);

                console.log(color);

                resolve(color);
            } catch (error) {
                reject(error);
            }
        };

        img.onerror = (error) => {
            reject(error);
        };
    });
}

export interface DominantColorResult {
    dominantColor: number[];
}

export function useDominantColor(imageUrl: string): DominantColorResult {
    const [dominantColor, setDominantColor] = useState<number[]>([]);

    useEffect(() => {
        getDominantColor(imageUrl)
            .then((color) => {
                setDominantColor(color);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [imageUrl]);

    return {
        dominantColor,
    };
}
