"use client";

import { useLayoutEffect } from "react";

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

export default function MotionEffects() {
  useLayoutEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches) return;

    const revealElements = Array.from(document.querySelectorAll<HTMLElement>(revealSelectors.join(",")));
    const staggerElements = Array.from(document.querySelectorAll<HTMLElement>(staggerSelectors.join(",")));
    const allElements = [...new Set([...revealElements, ...staggerElements])];

    revealElements.forEach((element) => element.dataset.reveal = "section");
    staggerElements.forEach((element, index) => {
      element.dataset.reveal = "item";
      element.style.setProperty("--reveal-delay", `${(index % 4) * 70}ms`);
    });

    document.documentElement.classList.add("motion-enabled");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        (entry.target as HTMLElement).classList.add("is-revealed");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -7% 0px" });

    allElements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("motion-enabled");
      allElements.forEach((element) => {
        delete element.dataset.reveal;
        element.classList.remove("is-revealed");
        element.style.removeProperty("--reveal-delay");
      });
    };
  }, []);

  return null;
}
