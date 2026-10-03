"use client";

import {
  useEffect,
  useRef,
} from "react";

type DitherPortraitProps = {
  src: string;
  alt: string;
};

type Particle = {
  baseX: number;
  baseY: number;
  x: number;
  y: number;
  radius: number;
  alpha: number;
  depth: number;
  angle: number;
  distance: number;
  phase: number;
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

function easeInOutCubic(
  value: number,
) {
  return value < 0.5
    ? 4 * value * value * value
    : 1 -
        Math.pow(-2 * value + 2, 3) /
          2;
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
    let particles: Particle[] = [];

    const reduceMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

    let pointerX = 0;
    let pointerY = 0;
    let currentPointerX = 0;
    let currentPointerY = 0;

    const image = new window.Image();

    image.decoding = "async";
    image.src = src;

    let startTime = performance.now();

    const setupParticles = () => {
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
          ? 0.9
          : 0.94);

      const aspect =
        sourceBounds.width /
        sourceBounds.height;

      const targetWidth =
        targetHeight * aspect;

      const centerX =
        width *
        (width < 640
          ? 0.54
          : 0.59);

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

      particles = [];

      const gap =
        width < 640 ? 4.5 : 4.8;

      const originX = width * 0.58;
      const originY = height * 0.48;

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

          if (luminance > 248) {
            continue;
          }

          const darkness = Math.max(
            0,
            Math.min(
              1,
              (248 - luminance) / 248,
            ),
          );

          const strength =
            Math.max(
              0.14,
              darkness,
            ) * alpha;

          const angle =
            Math.atan2(
              y - originY,
              x - originX,
            );

          const radialBoost =
            34 +
            strength * 96;

          const phase =
            Math.random() *
            Math.PI *
            2;

          particles.push({
            baseX: x,
            baseY: y,
            x,
            y,
            radius:
              0.35 +
              strength * 1.1,
            alpha:
              0.22 +
              strength * 0.75,
            depth:
              0.3 +
              strength * 0.7,
            angle,
            distance:
              radialBoost +
              Math.random() * 36,
            phase,
          });
        }
      }

      startTime = performance.now();
    };

    const draw = (
      timestamp: number,
    ) => {
      if (cancelled) {
        return;
      }

      const context =
        canvas.getContext("2d");

      if (!context) {
        return;
      }

      const width = wrapper.clientWidth;
      const height = wrapper.clientHeight;

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

      const elapsed =
        timestamp - startTime;

      const duration = 7600;
      const progress =
        reduceMotion
          ? 0
          : (elapsed % duration) /
            duration;

      let dissolve = 0;

      if (!reduceMotion) {
        if (progress < 0.28) {
          dissolve = 0;
        } else if (progress < 0.46) {
          dissolve =
            easeInOutCubic(
              (progress - 0.28) /
                0.18,
            );
        } else if (progress < 0.64) {
          dissolve = 1;
        } else if (progress < 0.84) {
          dissolve =
            1 -
            easeInOutCubic(
              (progress - 0.64) /
                0.2,
            );
        } else {
          dissolve = 0;
        }
      }

      currentPointerX +=
        (pointerX -
          currentPointerX) *
        0.08;

      currentPointerY +=
        (pointerY -
          currentPointerY) *
        0.08;

      for (const particle of particles) {
        const wave =
          Math.sin(
            elapsed * 0.0015 +
              particle.phase,
          );

        const drift =
          particle.distance *
          dissolve;

        const disperseX =
          Math.cos(particle.angle) *
            drift +
          wave *
            5 *
            dissolve;

        const disperseY =
          Math.sin(particle.angle) *
            drift *
            0.72 +
          Math.cos(
            elapsed * 0.0011 +
              particle.phase,
          ) *
            4 *
            dissolve;

        const pointerInfluenceX =
          currentPointerX *
          particle.depth;

        const pointerInfluenceY =
          currentPointerY *
          particle.depth;

        const fade =
          1 - dissolve * 0.58;

        context.globalAlpha =
          particle.alpha * fade;

        context.beginPath();

        context.arc(
          particle.baseX +
            disperseX +
            pointerInfluenceX,
          particle.baseY +
            disperseY +
            pointerInfluenceY,
          particle.radius *
            (1 +
              dissolve * 0.22),
          0,
          Math.PI * 2,
        );

        context.fill();
      }

      context.globalAlpha = 1;

      animationFrame =
        requestAnimationFrame(draw);
    };

    const handlePointerMove = (
      event: PointerEvent,
    ) => {
      const rect =
        wrapper.getBoundingClientRect();

      pointerX =
        ((event.clientX -
          rect.left) /
          rect.width -
          0.5) *
        9;

      pointerY =
        ((event.clientY -
          rect.top) /
          rect.height -
          0.5) *
        7;
    };

    const handlePointerLeave = () => {
      pointerX = 0;
      pointerY = 0;
    };

    const resizeObserver =
      new ResizeObserver(() => {
        setupParticles();
      });

    const themeObserver =
      new MutationObserver(() => {
        startTime = performance.now();
      });

    image.onload = () => {
      setupParticles();

      cancelAnimationFrame(
        animationFrame,
      );

      animationFrame =
        requestAnimationFrame(draw);
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
