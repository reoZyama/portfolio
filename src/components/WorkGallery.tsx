"use client";

import { useEffect, useMemo, useState } from "react";
import type { WorkItem } from "@/content/siteContent";

const SMALL_IDX = ["card--c", "card--d", "card--e"] as const;
const WIDE_IDX = ["card--f", "card--g"] as const;

function getCardClass(item: WorkItem, smallIndex: number, wideIndex: number) {
  if (item.size === "large-l") return "card--a";
  if (item.size === "tall-r") return "card--b";
  if (item.size === "small") return SMALL_IDX[smallIndex] ?? "card--c";
  return WIDE_IDX[wideIndex] ?? "card--f";
}

type WorkGalleryProps = {
  items: readonly WorkItem[];
};

export function WorkGallery({ items }: WorkGalleryProps) {
  const [selected, setSelected] = useState<WorkItem | null>(null);

  const derived = useMemo(() => {
    let smallCount = 0;
    let wideCount = 0;
    const withClass = items.map((item) => {
      const cls = getCardClass(item, smallCount, wideCount);
      if (item.size === "small") smallCount += 1;
      if (item.size === "wide") wideCount += 1;
      return { item, cls };
    });
    return { withClass };
  }, [items]);

  const isOpen = selected !== null;

  useEffect(() => {
    if (!isOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <div className="work-grid">
        {derived.withClass.map(({ item, cls }) => (
          <article
            key={`${item.badge}-${item.title}`}
            className={["card", cls, "show"].filter(Boolean).join(" ")}
            onClick={() => setSelected(item)}
          >
            <img src={item.img} alt={item.title} loading="lazy" className="card__img" />
            <span className="card__badge">{item.badge}</span>
            <div className="card__veil" />
            <div className="card__info">
              <p className="card__cat">{item.cat}</p>
              <h3 className="card__name">{item.title}</h3>
            </div>
          </article>
        ))}
      </div>

      <div
        className={["modal-overlay", isOpen ? "open" : ""].filter(Boolean).join(" ")}
        role="dialog"
        aria-modal="true"
        aria-label="作品詳細"
        onClick={(e) => {
          if (e.target === e.currentTarget) setSelected(null);
        }}
      >
        <div className="modal-box">
          <img
            src={selected?.modalImg || selected?.img || ""}
            alt={selected?.title || ""}
            width={880}
            height={495}
            className="modal-img"
            loading="lazy"
          />
          <div className="modal-body">
            <div className="modal-meta">
              <span className="modal-badge">{selected?.badge ?? ""}</span>
              <button className="modal-close" aria-label="閉じる" onClick={() => setSelected(null)}>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
            <p className="modal-cat">{selected?.cat ?? ""}</p>
            <h2 className="modal-title">{selected?.title ?? ""}</h2>
            <p className="modal-desc">{selected?.desc ?? ""}</p>
          </div>
        </div>
      </div>
    </>
  );
}

