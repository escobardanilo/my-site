"use client";

import {
  useEffect,
  useRef,
} from "react";

type GlobePoint = {
  x: number;
  y: number;
  z: number;
  size: number;
  alpha: number;
  scatterX: number;
  scatterY: number;
  phase: number;
};

function hash(value: number) {
  const x =
    Math.sin(value * 12.9898) *
    43758.5453;

  return x - Math.floor(x);
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

function createPoints() {
  const points: GlobePoint[] = [];
  let index = 0;

  for (
    let lat = -82;
    lat <= 82;
    lat += 4.5
  ) {
    for (
      let lon = 0;
      lon < 360;
      lon += 4.5
    ) {
      const latitude =
        (lat * Math.PI) / 180;
      const longitude =
        (lon * Math.PI) / 180;

      const cosLat =
        Math.cos(latitude);

      const x =
        cosLat *
        Math.cos(longitude);
      const y =
        Math.sin(latitude);
      const z =
        cosLat *
        Math.sin(longitude);

      const organic =
        Math.sin(
          longitude * 2.7 +
            Math.cos(
              latitude * 3.4,
            ) *
              1.8,
        ) +
        Math.cos(
          longitude * 1.25 -
            latitude * 4.2,
        ) *
          0.72 +
        Math.sin(
          longitude * 5.1 +
            latitude * 1.6,
        ) *
          0.35;

      const landLike =
        organic > 0.45;

      const randomA =
        hash(index + 1);
      const randomB =
        hash(index + 93);
      const randomC =
        hash(index + 211);

      const angle =
        randomA * Math.PI * 2;

      const distance =
        80 + randomB * 210;

      points.push({
        x,
        y,
        z,
        size:
          (landLike
            ? 1.25
            : 0.72) +
          randomC * 0.42,
        alpha:
          landLike
            ? 0.92
            : 0.46,
        scatterX:
          Math.cos(angle) *
          distance,
        scatterY:
          Math.sin(angle) *
          distance *
          0.72,
        phase:
          randomC *
          Math.PI *
          2,
      });

      index += 1;
    }
  }

  return points;
}

export function DitherGlobe() {
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

    const points = createPoints();

    const reduceMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

    let animationFrame = 0;
    let cancelled = false;
    let startTime = performance.now();

    let pointerX = 0;
    let pointerY = 0;
    let currentPointerX = 0;
    let currentPointerY = 0;

    const resizeCanvas = () => {
      const width = wrapper.clientWidth;
      const height =
        wrapper.clientHeight;

      const pixelRatio = Math.min(
        window.devicePixelRatio || 1,
        2,
      );

      canvas.width =
        Math.max(
          1,
          Math.round(
            width * pixelRatio,
          ),
        );

      canvas.height =
        Math.max(
          1,
          Math.round(
            height * pixelRatio,
          ),
        );

      canvas.style.width =
        `${width}px`;
      canvas.style.height =
        `${height}px`;
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
      const height =
        wrapper.clientHeight;

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

      const loopDuration = 9200;
      const progress =
        reduceMotion
          ? 0
          : (elapsed %
              loopDuration) /
            loopDuration;

      let dissolve = 0;

      if (!reduceMotion) {
        if (progress < 0.34) {
          dissolve = 0;
        } else if (
          progress < 0.5
        ) {
          dissolve =
            easeInOutCubic(
              (progress - 0.34) /
                0.16,
            );
        } else if (
          progress < 0.61
        ) {
          dissolve = 1;
        } else if (
          progress < 0.79
        ) {
          dissolve =
            1 -
            easeInOutCubic(
              (progress - 0.61) /
                0.18,
            );
        } else {
          dissolve = 0;
        }
      }

      currentPointerX +=
        (pointerX -
          currentPointerX) *
        0.045;

      currentPointerY +=
        (pointerY -
          currentPointerY) *
        0.045;

      const rotationY =
        elapsed * 0.00011 +
        currentPointerX * 0.004;

      const rotationX =
        -0.14 +
        currentPointerY * 0.003;

      const cosY =
        Math.cos(rotationY);
      const sinY =
        Math.sin(rotationY);
      const cosX =
        Math.cos(rotationX);
      const sinX =
        Math.sin(rotationX);

      const radius =
        Math.min(
          width,
          height,
        ) *
        (width < 700
          ? 0.35
          : 0.39);

      const centerX =
        width * 0.5;
      const centerY =
        height * 0.51;

      const ordered =
        points
          .map((point) => {
            const x1 =
              point.x * cosY -
              point.z * sinY;

            const z1 =
              point.x * sinY +
              point.z * cosY;

            const y2 =
              point.y * cosX -
              z1 * sinX;

            const z2 =
              point.y * sinX +
              z1 * cosX;

            return {
              point,
              x: x1,
              y: y2,
              z: z2,
            };
          })
          .sort(
            (a, b) =>
              a.z - b.z,
          );

      for (const item of ordered) {
        const {
          point,
          x,
          y,
          z,
        } = item;

        const perspective =
          1 /
          (1.42 - z * 0.16);

        const baseX =
          centerX +
          x *
            radius *
            perspective;

        const baseY =
          centerY -
          y *
            radius *
            perspective;

        const wave =
          Math.sin(
            elapsed * 0.0013 +
              point.phase,
          );

        const scatterStrength =
          dissolve *
          (0.72 +
            Math.max(
              0,
              z,
            ) *
              0.35);

        const scatterX =
          point.scatterX *
            scatterStrength +
          wave *
            6 *
            dissolve;

        const scatterY =
          point.scatterY *
            scatterStrength +
          Math.cos(
            elapsed * 0.001 +
              point.phase,
          ) *
            5 *
            dissolve;

        const frontness =
          (z + 1) / 2;

        const alpha =
          point.alpha *
          (0.38 +
            frontness * 0.62) *
          (1 -
            dissolve * 0.54);

        const dotSize =
          point.size *
          (0.7 +
            frontness * 0.72) *
          (1 +
            dissolve * 0.18);

        context.globalAlpha =
          alpha;

        context.beginPath();

        context.arc(
          baseX + scatterX,
          baseY + scatterY,
          dotSize,
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
        16;

      pointerY =
        ((event.clientY -
          rect.top) /
          rect.height -
          0.5) *
        12;
    };

    const handlePointerLeave =
      () => {
        pointerX = 0;
        pointerY = 0;
      };

    const resizeObserver =
      new ResizeObserver(() => {
        resizeCanvas();
      });

    const themeObserver =
      new MutationObserver(() => {
        startTime =
          performance.now();
      });

    resizeCanvas();

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

    animationFrame =
      requestAnimationFrame(draw);

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
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="hero__globe"
      role="img"
      aria-label="Dithered particle globe"
    >
      <canvas
        ref={canvasRef}
        className="hero__globe-canvas"
        aria-hidden="true"
      />
    </div>
  );
}
