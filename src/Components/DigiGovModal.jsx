import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { DIGIGOV_MODAL_CONFIG as CFG } from "../Data/DigiGovModalConfig";
import classes from "./DigiGovModal.module.css";

/**
 * DigiGovModal
 * ─────────────
 * Premium achievement showcase modal for DigiGov2026.
 *
 * Behavior is controlled by CFG.behavior:
 *   "session"    – appears once per browser session (sessionStorage)
 *   "persistent" – appears only the very first time ever (localStorage)
 *   "always"     – always appears (dev / preview mode)
 */
function DigiGovModal() {
  const [isOpen, setIsOpen] = useState(false);

  /* ── Determine if modal should appear ─────────────────── */
  useEffect(() => {
    const { behavior, storageKey } = CFG;

    if (behavior === "always") {
      // Open immediately on every mount — no storage involved
      setIsOpen(true);
      return;
    }

    const storage = behavior === "persistent" ? localStorage : sessionStorage;
    const seen = storage.getItem(storageKey);

    if (!seen) {
      // Tiny delay so the page renders first — feels less jarring
      const timer = setTimeout(() => setIsOpen(true), 600);
      return () => clearTimeout(timer);
    }
  }, []);

  /* ── Close handler ─────────────────────────────────────── */
  const handleClose = useCallback(() => {
    const { behavior, storageKey } = CFG;
    if (behavior !== "always") {
      // Only persist the "seen" flag for session/persistent modes
      const storage =
        behavior === "persistent" ? localStorage : sessionStorage;
      storage.setItem(storageKey, "true");
    }
    setIsOpen(false);
  }, []);

  /* ── Keyboard escape ───────────────────────────────────── */
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => { if (e.key === "Escape") handleClose(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, handleClose]);

  /* ── Scroll lock ───────────────────────────────────────── */
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className={classes.overlay}
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${CFG.title} Achievement Modal`}
    >
      {/* Stop propagation so clicks inside don't close the modal */}
      <div
        className={classes.modal}
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── Close Button ──────────────────────────────────── */}
        <button
          className={classes.closeBtn}
          onClick={handleClose}
          aria-label="Close modal"
          title="Close"
        >
          ✕
        </button>

        {/* ── Hero Image ────────────────────────────────────── */}
        <div className={classes.imageHero}>
          <img
            src={CFG.mainImage.src}
            alt={CFG.mainImage.alt}
            className={classes.mainImage}
          />
          <div className={classes.imageOverlay} />

          {/* Overlaid conference badges */}
          <div className={classes.conferenceBadge}>
            <div className={classes.badgeLeft}>
              <span className={classes.eventYear}>DigiGov2026</span>
              <h2 className={classes.imageTitle}>{CFG.title}</h2>
            </div>
            <span className={classes.locationBadge}>
              📍 {CFG.locationBadge}
            </span>
          </div>
        </div>

        {/* ── Body ─────────────────────────────────────────── */}
        <div className={classes.body}>

          {/* Subtitle row */}
          <div className={classes.subtitleRow}>
            <div className={classes.dividerLine} />
            <p className={classes.subtitle}>{CFG.subtitle}</p>
            <div
              className={classes.dividerLine}
              style={{ background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.5))" }}
            />
          </div>

          {/* Description */}
          <p className={classes.description}>{CFG.description}</p>

          {/* Tags */}
          <div className={classes.tags}>
            {CFG.tags.map((tag) => (
              <span key={tag} className={classes.tag}>{tag}</span>
            ))}
          </div>

          {/* Thumbnail image strip */}
          {CFG.eventImages.length > 0 && (
            <div className={classes.thumbnailStrip}>
              {CFG.eventImages.map((img, idx) => (
                <div className={classes.thumbnail} key={idx}>
                  <img src={img.src} alt={img.alt} loading="lazy" />
                  <div className={classes.thumbnailOverlay} />
                </div>
              ))}
            </div>
          )}

          {/* Footer / CTA */}
          <div className={classes.footer}>
            <p className={classes.footerNote}>
              <strong>Support Umbrella Nepal</strong> — International Engagement
            </p>
            <Link
              to={CFG.cta.href}
              className={classes.ctaBtn}
              onClick={handleClose}
            >
              {CFG.cta.label}
              <span className={classes.ctaArrow}>→</span>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}

export default DigiGovModal;
