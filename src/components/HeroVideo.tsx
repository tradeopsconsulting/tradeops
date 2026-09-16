import { useEffect, useRef, useState, type CSSProperties } from "react";

const GRAIN =
  "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22140%22%20height%3D%22140%22%3E%3Cfilter%20id%3D%22n%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%220.9%22%20numOctaves%3D%223%22%20stitchTiles%3D%22stitch%22%2F%3E%3CfeColorMatrix%20type%3D%22saturate%22%20values%3D%220%22%2F%3E%3C%2Ffilter%3E%3Crect%20width%3D%22140%22%20height%3D%22140%22%20filter%3D%22url(%23n)%22%2F%3E%3C%2Fsvg%3E";

function matches(query: string) {
  return typeof window !== "undefined" && window.matchMedia(query).matches;
}

export function HeroVideo({
  dim = 0.2,
  horizon = 0,
  foot = 16,
  vignette = 1,
}: {
  dim?: number;
  horizon?: number;
  foot?: number;
  vignette?: number;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMobile, setIsMobile] = useState(() => matches("(max-width: 768px)"));
  const [reduced, setReduced] = useState(() =>
    matches("(prefers-reduced-motion: reduce)"),
  );

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobile = window.matchMedia("(max-width: 768px)");
    const onMotion = (e: MediaQueryListEvent) => setReduced(e.matches);
    const onMobile = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    motion.addEventListener("change", onMotion);
    mobile.addEventListener("change", onMobile);
    return () => {
      motion.removeEventListener("change", onMotion);
      mobile.removeEventListener("change", onMobile);
    };
  }, []);

  const sources = isMobile
    ? [{ src: "/tradeops-truck-720.mp4", type: "video/mp4" }]
    : [
        { src: "/tradeops-truck-1080.webm", type: "video/webm" },
        { src: "/tradeops-truck-1080.mp4", type: "video/mp4" },
      ];

  return (
    <div
      data-hero-video=""
      data-reduced={reduced ? "true" : "false"}
      style={
        {
          "--video-dim": dim,
          "--video-horizon": horizon,
          "--video-foot": foot,
          "--video-vignette": vignette,
          "--hv-grain-tile": `url("${GRAIN}")`,
        } as CSSProperties
      }
    >
      <div data-hero-video-frame="">
        <video
          ref={videoRef}
          className={reduced ? undefined : "hv-breathe"}
          poster="/tradeops-truck-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          {sources.map((s) => (
            <source key={s.src} src={s.src} type={s.type} />
          ))}
        </video>
      </div>
      {vignette > 0 ? <div data-hero-video-vignette="" /> : null}
      {horizon > 0 ? <div data-hero-video-scrim="" /> : null}
      {foot > 0 ? <div data-hero-video-foot="" /> : null}
      <div data-hero-video-grain="" />
    </div>
  );
}
