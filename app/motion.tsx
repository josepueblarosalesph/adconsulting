"use client";

import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";

const revealSelectors = [
  ".corp-site section > .corp-shell",
  ".corp-site section.corp-shell",
  ".black-site section > .corp-shell",
  ".corp-footer-main",
];

const staggerSelectors = [
  ".corp-service-grid article",
  ".corp-method-grid article",
  ".corp-route-grid article",
  ".corp-news-grid article",
  ".corp-people-grid article",
  ".corp-service-list article",
  ".corp-ad50-problem-grid article",
  ".corp-ad50-action-grid article",
  ".black-benefit-list article",
];

const textRevealSelectors = [
  ".corp-lead h1",
  ".corp-page-hero h1",
  ".corp-ad50-hero h1",
  ".corp-challenge h2",
  ".corp-services > h2",
  ".corp-method h2",
  ".corp-intro h2",
  ".corp-platform h2",
  ".black-hero h1",
  ".black-section-heading h2",
  ".black-statement h2",
];

function splitHeadingWords(heading: HTMLElement) {
  const walker = document.createTreeWalker(heading, NodeFilter.SHOW_TEXT);
  const textNodes: Text[] = [];
  while (walker.nextNode()) textNodes.push(walker.currentNode as Text);

  let wordIndex = 0;
  textNodes.forEach((textNode) => {
    if (!textNode.textContent?.trim()) return;
    const fragment = document.createDocumentFragment();
    textNode.textContent.split(/(\s+)/).forEach((part) => {
      if (!part || /^\s+$/.test(part)) {
        fragment.append(document.createTextNode(part));
        return;
      }
      const mask = document.createElement("span");
      const word = document.createElement("span");
      mask.className = "motion-word-mask";
      word.className = "motion-word";
      word.style.setProperty("--word-delay", `${Math.min(wordIndex, 10) * 45}ms`);
      word.textContent = part;
      mask.append(word);
      fragment.append(mask);
      wordIndex += 1;
    });
    textNode.replaceWith(fragment);
  });
}

export default function MotionEffects() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    const revealElements = Array.from(document.querySelectorAll<HTMLElement>(revealSelectors.join(",")));
    const staggerElements = Array.from(document.querySelectorAll<HTMLElement>(staggerSelectors.join(",")));
    const allElements = [...new Set([...revealElements, ...staggerElements])];
    const textElements = Array.from(document.querySelectorAll<HTMLElement>(textRevealSelectors.join(",")));
    const originalHeadingHtml = textElements.map((element) => [element, element.innerHTML] as const);

    revealElements.forEach((element) => element.dataset.reveal = "section");
    staggerElements.forEach((element, index) => {
      element.dataset.reveal = "item";
      element.style.setProperty("--reveal-delay", `${(index % 4) * 70}ms`);
    });
    textElements.forEach((element) => {
      splitHeadingWords(element);
      element.dataset.textReveal = "words";
    });

    document.documentElement.classList.add("motion-enabled");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        (entry.target as HTMLElement).classList.toggle("is-revealed", entry.isIntersecting);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -7% 0px" });

    allElements.forEach((element) => observer.observe(element));

    const textObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        (entry.target as HTMLElement).classList.toggle("is-text-revealed", entry.isIntersecting);
      });
    }, { threshold: 0.35, rootMargin: "0px 0px -8% 0px" });

    textElements.forEach((element) => textObserver.observe(element));

    const spectrum = document.querySelector<HTMLElement>(".corp-spectrum");
    const spectrumVisual = spectrum?.querySelector<HTMLElement>(".corp-spectrum-visual");
    const spectrumBars = Array.from(spectrum?.querySelectorAll<HTMLElement>(".corp-spectrum-bar") ?? []);
    let spectrumFrame = 0;

    const updateSpectrum = () => {
      spectrumFrame = 0;
      if (!spectrum || !spectrumVisual) return;
      const visualTop = spectrumVisual.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight;
      const progress = Math.min(1, Math.max(0, (viewportHeight * 0.9 - visualTop) / (viewportHeight * 0.68)));
      spectrum.style.setProperty("--spectrum-progress", progress.toFixed(4));
      spectrumBars.forEach((bar) => {
        const targetTop = Number(bar.dataset.barTop ?? 0);
        bar.style.top = `${targetTop * progress}%`;
      });
    };

    const requestSpectrumUpdate = () => {
      if (spectrumFrame) return;
      spectrumFrame = window.requestAnimationFrame(updateSpectrum);
    };

    updateSpectrum();
    window.addEventListener("scroll", requestSpectrumUpdate, { passive: true });
    window.addEventListener("resize", requestSpectrumUpdate);

    return () => {
      observer.disconnect();
      textObserver.disconnect();
      window.removeEventListener("scroll", requestSpectrumUpdate);
      window.removeEventListener("resize", requestSpectrumUpdate);
      if (spectrumFrame) window.cancelAnimationFrame(spectrumFrame);
      spectrum?.style.removeProperty("--spectrum-progress");
      spectrumBars.forEach((bar) => {
        bar.style.removeProperty("top");
      });
      document.documentElement.classList.remove("motion-enabled");
      allElements.forEach((element) => {
        delete element.dataset.reveal;
        element.classList.remove("is-revealed");
        element.style.removeProperty("--reveal-delay");
      });
      originalHeadingHtml.forEach(([element, html]) => {
        element.innerHTML = html;
        delete element.dataset.textReveal;
        element.classList.remove("is-text-revealed");
      });
    };
  }, [pathname]);

  return null;
}
