import React, { useEffect } from "react";

import { Canvas } from "./Canvas/Canvas";

const rgbToHex = (r: number, g: number, b: number) => {
    return ((r << 16) | (g << 8) | b).toString(16);
};

type Props = {
    tileSize: number;
};

export const Pixelator = ({ tileSize }: Props) => {
    const origin = (context: CanvasRenderingContext2D) => {
        const image = new Image();
        image.src = "uploads/first_frame.jpg";

        image.onload = () => {
            context.drawImage(image, 0, 0, window.innerWidth, window.innerHeight);
            for (let x = 0; x < window.innerWidth; x = x + tileSize - 2) {
                for (let y = 0; y < window.innerHeight; y = y + tileSize - 2) {
                    const pixelData = context.getImageData(x + tileSize / 2, y + tileSize / 2, 1, 1).data;
                    const hex = "#" + rgbToHex(pixelData[0], pixelData[1], pixelData[2]);
                    context.fillStyle = hex;
                    context.fillRect(x, y, tileSize - 2, tileSize - 2);
                }
            }
        };
    };
    useEffect(() => {
        let sourcevideo = document.getElementById("sourcevideo");
        if (!sourcevideo) return;
    });

    return (
        <>
            <Canvas draw={origin} width={window.innerWidth} height={window.innerHeight} />
        </>
    );
};
