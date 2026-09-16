import { useEffect } from "react";

export function useReveal() {
  useEffect(() => {
    const nodes = Array.from(
      document.querySelectorAll("main > section, body > footer, .canvas-grain > footer"),
    );
    if (!("IntersectionObserver" in window)) {
      nodes.forEach((el) => {
        (el as HTMLElement).dataset.shown = "true";
      });
      return;
    }
    nodes.forEach((el) => el.classList.add("reveal"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).dataset.shown = "true";
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.04 },
    );
    nodes.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
