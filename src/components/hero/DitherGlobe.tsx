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

function createPoints(
  step: number,
) {
  const points: GlobePoint[] = [];
  let index = 0;

  for (
    let lat = -82;
    lat <= 82;
    lat += step
  ) {
    for (
      let lon = 0;
      lon < 360;
      lon += step
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

const desktopPoints =
  createPoints(5.2);

const mobilePoints =
  createPoints(7.6);

export function DitherGlobe() {
  const wrapperRef =
    useRef<HTMLDivElement>(null);
  const canvasRef =
    useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const wrapper =
      wrapperRef.current;
    const canvas =
      canvasRef.current;

    if (!wrapper || !canvas) {
      return;
    }

    const context =
      canvas.getContext("2d");

    if (!context) {
      return;
    }

    const reducedMotionQuery =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      );

    let reduceMotion =
      reducedMotionQuery.matches;

    let animationFrame = 0;
    let startTime =
      performance.now();

    let width = 0;
    let height = 0;
    let pixelRatio = 1;
    let foreground = "#111111";
    let isIntersecting = true;

    let pointerX = 0;
    let pointerY = 0;
    let currentPointerX = 0;
    let currentPointerY = 0;

    let points =
      window.innerWidth <= 700
        ? mobilePoints
        : desktopPoints;

    const updateForeground =
      () => {
        foreground =
          getComputedStyle(
            document.documentElement,
          )
            .getPropertyValue(
              "--foreground",
            )
            .trim() ||
          "#111111";
      };

    const resizeCanvas = () => {
      width =
        wrapper.clientWidth;
      height =
        wrapper.clientHeight;

      const isMobile =
        window.innerWidth <= 700;

      points = isMobile
        ? mobilePoints
        : desktopPoints;

      pixelRatio = Math.min(
        window.devicePixelRatio || 1,
        isMobile ? 1.25 : 1.75,
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
        width + "px";
      canvas.style.height =
        height + "px";
    };

    const shouldAnimate = () =>
      !reduceMotion &&
      !document.hidden &&
      isIntersecting;

    const draw = (
      timestamp: number,
    ) => {
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

      context.fillStyle =
        foreground;

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
        (reduceMotion
          ? 0.45
          : elapsed * 0.00011) +
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
          ? 0.34
          : 0.39);

      const centerX =
        width * 0.5;
      const centerY =
        height * 0.51;

      for (
        let index = 0;
        index < points.length;
        index += 1
      ) {
        const point =
          points[index];

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

        const perspective =
          1 /
          (1.42 -
            z2 * 0.16);

        const baseX =
          centerX +
          x1 *
            radius *
            perspective;

        const baseY =
          centerY -
          y2 *
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
              z2,
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
          (z2 + 1) / 2;

        context.globalAlpha =
          point.alpha *
          (0.38 +
            frontness * 0.62) *
          (1 -
            dissolve * 0.54);

        context.beginPath();

        context.arc(
          baseX + scatterX,
          baseY + scatterY,
          point.size *
            (0.7 +
              frontness * 0.72) *
            (1 +
              dissolve * 0.18),
          0,
          Math.PI * 2,
        );

        context.fill();
      }

      context.globalAlpha = 1;

      if (shouldAnimate()) {
        animationFrame =
          requestAnimationFrame(
            draw,
          );
      }
    };

    const renderOrResume = () => {
      cancelAnimationFrame(
        animationFrame,
      );

      if (shouldAnimate()) {
        animationFrame =
          requestAnimationFrame(
            draw,
          );
      } else {
        draw(performance.now());
      }
    };

    const handlePointerMove = (
      event: PointerEvent,
    ) => {
      if (reduceMotion) {
        return;
      }

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

    const handleVisibility =
      () => {
        if (!document.hidden) {
          startTime =
            performance.now();
        }

        renderOrResume();
      };

    const handleReducedMotion =
      (event: MediaQueryListEvent) => {
        reduceMotion =
          event.matches;

        startTime =
          performance.now();

        renderOrResume();
      };

    const resizeObserver =
      new ResizeObserver(() => {
        resizeCanvas();
        renderOrResume();
      });

    const intersectionObserver =
      new IntersectionObserver(
        (entries) => {
          isIntersecting =
            Boolean(
              entries[0]
                ?.isIntersecting,
            );

          renderOrResume();
        },
        {
          threshold: 0.02,
        },
      );

    const themeObserver =
      new MutationObserver(() => {
        updateForeground();
        renderOrResume();
      });

    resizeCanvas();
    updateForeground();

    resizeObserver.observe(
      wrapper,
    );

    intersectionObserver.observe(
      wrapper,
    );

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

    document.addEventListener(
      "visibilitychange",
      handleVisibility,
    );

    reducedMotionQuery.addEventListener(
      "change",
      handleReducedMotion,
    );

    renderOrResume();

    return () => {
      cancelAnimationFrame(
        animationFrame,
      );

      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      themeObserver.disconnect();

      wrapper.removeEventListener(
        "pointermove",
        handlePointerMove,
      );

      wrapper.removeEventListener(
        "pointerleave",
        handlePointerLeave,
      );

      document.removeEventListener(
        "visibilitychange",
        handleVisibility,
      );

      reducedMotionQuery.removeEventListener(
        "change",
        handleReducedMotion,
      );
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="hero__globe"
      role="img"
      aria-label="Animated dithered globe"
    >
      <canvas
        ref={canvasRef}
        className="hero__globe-canvas"
        aria-hidden="true"
      />
    </div>
  );
}
