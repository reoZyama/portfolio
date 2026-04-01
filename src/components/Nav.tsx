"use client";

import { useEffect, useMemo, useState } from "react";

type NavProps = {
  name: string;
};

const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
] as const;

export function Nav({ name }: NavProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  const navClassName = useMemo(() => {
    return ["nav", isScrolled ? "scrolled" : ""].filter(Boolean).join(" ");
  }, [isScrolled]);

  return (
    <nav className={navClassName} aria-label="サイトナビゲーション">
      <div className="wrap">
        <div className="nav__inner">
          <a href="#" className="nav__logo" onClick={() => setIsOpen(false)}>
            {name}
          </a>

          <ul className={["nav__links", isOpen ? "open" : ""].join(" ")}>
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => {
                    setIsOpen(false);
                  }}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div style={{ display: "flex", alignItems: "center", gap: "var(--sp3)" }}>
            <a href="#contact" className="nav__contact" onClick={() => setIsOpen(false)}>
              お仕事の依頼
            </a>
            <button
              className="nav__burger"
              aria-label="メニュー"
              aria-expanded={isOpen}
              onClick={() => setIsOpen((v) => !v)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

