"use client";

import {
  useEffect,
  useRef,
} from "react";

type DitherPortraitProps = {
  src: string;
  alt: string;
};

type Dot = {
  x: number;
  y: number;
  radius: number;
  alpha: number;
  depth: number;
};

type Bounds = {
  x: number;
  y: number;
  width: number;
  height: number;
};

function getSubjectBounds(
  image: HTMLImageElement,
): Bounds {
  const canvas =
    document.createElement("canvas");

  canvas.width = image.naturalWidth;
  canvas.height = image.naturalHeight;

  const context =
    canvas.getContext("2d", {
      willReadFrequently: true,
    });

  if (!context) {
    return {
      x: 0,
      y: 0,
      width: image.naturalWidth,
      height: image.naturalHeight,
    };
  }

  context.drawImage(image, 0, 0);

  const data = context.getImageData(
    0,
    0,
    canvas.width,
    canvas.height,
  ).data;

  let minX = canvas.width;
  let minY = canvas.height;
  let maxX = 0;
  let maxY = 0;

  const step = 3;

  for (
    let y = 0;
    y < canvas.height;
    y += step
  ) {
    for (
      let x = 0;
      x < canvas.width;
      x += step
    ) {
      const index =
        (y * canvas.width + x) * 4;

      const alpha = data[index + 3];

      if (alpha < 20) {
        continue;
      }

      const red = data[index];
      const green = data[index + 1];
      const blue = data[index + 2];

      const luminance =
        red * 0.2126 +
        green * 0.7152 +
        blue * 0.0722;

      if (luminance > 246) {
        continue;
      }

      minX = Math.min(minX, x);
      minY = Math.min(minY, y);
      maxX = Math.max(maxX, x);
      maxY = Math.max(maxY, y);
    }
  }

  if (
    minX >= maxX ||
    minY >= maxY
  ) {
    return {
      x: 0,
      y: 0,
      width: image.naturalWidth,
      height: image.naturalHeight,
    };
  }

  const paddingX =
    Math.round((maxX - minX) * 0.025);
  const paddingY =
    Math.round((maxY - minY) * 0.02);

  return {
    x: Math.max(0, minX - paddingX),
    y: Math.max(0, minY - paddingY),
    width: Math.min(
      image.naturalWidth,
      maxX - minX + paddingX * 2,
    ),
    height: Math.min(
      image.naturalHeight,
      maxY - minY + paddingY * 2,
    ),
  };
}

export function DitherPortrait({
  src,
  alt,
}: DitherPortraitProps) {
  const wrapperRef =
    useRef<HTMLDivElement>(null);
  const canvasRef =
    useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const canvas = canvasRef.current;

    if (!wrapper || !canvas) {
      return;
    }

    let cancelled = false;
    let animationFrame = 0;
    let dots: Dot[] = [];

    let pointerX = 0;
    let pointerY = 0;
    let currentX = 0;
    let currentY = 0;

    const image = new window.Image();

    image.decoding = "async";
    image.src = src;

    const render = () => {
      if (
        cancelled ||
        !image.complete ||
        image.naturalWidth === 0
      ) {
        return;
      }

      const width = wrapper.clientWidth;
      const height = wrapper.clientHeight;

      if (!width || !height) {
        return;
      }

      const pixelRatio = Math.min(
        window.devicePixelRatio || 1,
        2,
      );

      canvas.width =
        Math.round(width * pixelRatio);
      canvas.height =
        Math.round(height * pixelRatio);

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      const context =
        canvas.getContext("2d");

      if (!context) {
        return;
      }

      context.setTransform(
        pixelRatio,
        0,
        0,
        pixelRatio,
        0,
        0,
      );

      const sourceBounds =
        getSubjectBounds(image);

      const sampleCanvas =
        document.createElement("canvas");

      sampleCanvas.width =
        Math.max(1, Math.round(width));
      sampleCanvas.height =
        Math.max(1, Math.round(height));

      const sampleContext =
        sampleCanvas.getContext(
          "2d",
          {
            willReadFrequently: true,
          },
        );

      if (!sampleContext) {
        return;
      }

      const targetHeight =
        height *
        (width < 640
          ? 0.88
          : 0.9);

      const aspect =
        sourceBounds.width /
        sourceBounds.height;

      const targetWidth =
        targetHeight * aspect;

      const centerX =
        width *
        (width < 640
          ? 0.54
          : 0.57);

      const targetX =
        centerX - targetWidth / 2;

      const targetY =
        height - targetHeight;

      sampleContext.clearRect(
        0,
        0,
        width,
        height,
      );

      sampleContext.drawImage(
        image,
        sourceBounds.x,
        sourceBounds.y,
        sourceBounds.width,
        sourceBounds.height,
        targetX,
        targetY,
        targetWidth,
        targetHeight,
      );

      const pixels =
        sampleContext.getImageData(
          0,
          0,
          sampleCanvas.width,
          sampleCanvas.height,
        ).data;

      dots = [];

      const gap =
        width < 640 ? 5 : 5.5;

      for (
        let y = 0;
        y < height;
        y += gap
      ) {
        for (
          let x = 0;
          x < width;
          x += gap
        ) {
          const px = Math.min(
            sampleCanvas.width - 1,
            Math.max(0, Math.round(x)),
          );

          const py = Math.min(
            sampleCanvas.height - 1,
            Math.max(0, Math.round(y)),
          );

          const index =
            (py * sampleCanvas.width + px) *
            4;

          const alpha =
            pixels[index + 3] / 255;

          if (alpha < 0.08) {
            continue;
          }

          const red = pixels[index];
          const green =
            pixels[index + 1];
          const blue =
            pixels[index + 2];

          const luminance =
            red * 0.2126 +
            green * 0.7152 +
            blue * 0.0722;

          if (luminance > 247) {
            continue;
          }

          const darkness = Math.max(
            0,
            Math.min(
              1,
              (247 - luminance) / 247,
            ),
          );

          const subjectStrength =
            Math.max(
              0.18,
              darkness,
            ) * alpha;

          dots.push({
            x,
            y,
            radius:
              0.42 +
              subjectStrength * 1.08,
            alpha:
              0.24 +
              subjectStrength * 0.72,
            depth:
              0.2 +
              subjectStrength * 0.8,
          });
        }
      }

      draw();
    };

    const draw = () => {
      const width = wrapper.clientWidth;
      const height = wrapper.clientHeight;

      const context =
        canvas.getContext("2d");

      if (!context) {
        return;
      }

      const pixelRatio = Math.min(
        window.devicePixelRatio || 1,
        2,
      );

      context.setTransform(
        pixelRatio,
        0,
        0,
        pixelRatio,
        0,
        0,
      );

      context.clearRect(
        0,
        0,
        width,
        height,
      );

      const foreground =
        getComputedStyle(
          document.documentElement,
        )
          .getPropertyValue(
            "--foreground",
          )
          .trim() || "#111111";

      context.fillStyle = foreground;

      for (const dot of dots) {
        context.globalAlpha =
          dot.alpha;

        context.beginPath();

        context.arc(
          dot.x +
            currentX *
              dot.depth,
          dot.y +
            currentY *
              dot.depth,
          dot.radius,
          0,
          Math.PI * 2,
        );

        context.fill();
      }

      context.globalAlpha = 1;
    };

    const animatePointer = () => {
      currentX +=
        (pointerX - currentX) *
        0.11;

      currentY +=
        (pointerY - currentY) *
        0.11;

      draw();

      const stillMoving =
        Math.abs(pointerX - currentX) >
          0.04 ||
        Math.abs(pointerY - currentY) >
          0.04;

      if (stillMoving) {
        animationFrame =
          requestAnimationFrame(
            animatePointer,
          );
      }
    };

    const handlePointerMove = (
      event: PointerEvent,
    ) => {
      const rect =
        wrapper.getBoundingClientRect();

      const normalizedX =
        (event.clientX - rect.left) /
          rect.width -
        0.5;

      const normalizedY =
        (event.clientY - rect.top) /
          rect.height -
        0.5;

      pointerX = normalizedX * 10;
      pointerY = normalizedY * 7;

      cancelAnimationFrame(
        animationFrame,
      );

      animationFrame =
        requestAnimationFrame(
          animatePointer,
        );
    };

    const handlePointerLeave = () => {
      pointerX = 0;
      pointerY = 0;

      cancelAnimationFrame(
        animationFrame,
      );

      animationFrame =
        requestAnimationFrame(
          animatePointer,
        );
    };

    const resizeObserver =
      new ResizeObserver(() => {
        render();
      });

    const themeObserver =
      new MutationObserver(() => {
        draw();
      });

    image.onload = () => {
      render();
    };

    resizeObserver.observe(wrapper);

    themeObserver.observe(
      document.documentElement,
      {
        attributes: true,
        attributeFilter: [
          "data-theme",
        ],
      },
    );

    wrapper.addEventListener(
      "pointermove",
      handlePointerMove,
    );

    wrapper.addEventListener(
      "pointerleave",
      handlePointerLeave,
    );

    return () => {
      cancelled = true;

      cancelAnimationFrame(
        animationFrame,
      );

      resizeObserver.disconnect();
      themeObserver.disconnect();

      wrapper.removeEventListener(
        "pointermove",
        handlePointerMove,
      );

      wrapper.removeEventListener(
        "pointerleave",
        handlePointerLeave,
      );
    };
  }, [src]);

  return (
    <div
      ref={wrapperRef}
      className="hero__dither-portrait"
      role="img"
      aria-label={alt}
    >
      <canvas
        ref={canvasRef}
        className="hero__dither-canvas"
        aria-hidden="true"
      />
    </div>
  );
}
