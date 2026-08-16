/**
 * DigiGov2026 Modal Configuration
 * ─────────────────────────────────
 * Edit this file to update the modal content, images, or session behavior
 * without touching the component itself.
 */

import GroupPhoto from "../assets/CardImage25.jpeg";      // Main group / team photo
import EventPhoto1 from "../assets/CardImage23.jpeg";     // Conference hall / session
import EventPhoto2 from "../assets/CardImage24.jpeg";     // Workshop / networking
import EventPhoto3 from "../assets/CardImage26.jpeg";     // Social / cultural moment

export const DIGIGOV_MODAL_CONFIG = {
  /** Storage key used to track whether the user has already dismissed the modal */
  storageKey: "digigov2026_modal_seen",

  /**
   * Session behavior options:
   *   "always"     – open every time the homepage mounts / is refreshed (current)
   *   "session"    – appear once per browser session (clears on tab close)
   *   "persistent" – never appear again after first close (survives refresh)
   */
  behavior: "always",

  /** Main title displayed prominently in the modal */
  title: "DigiGov2026",

  /** Conference subtitle / tagline */
  subtitle: "13th International Summer School on Digital Government",

  /** Short professional description */
  description:
    "Proudly participated in DigiGov2026, an international summer school focused on AI, Big Data, LLMs, Open Data, Digital Governance, and emerging technologies for Government 3.0. An invaluable opportunity to connect with globally recognized researchers, policymakers, and innovators shaping the future of digital governance.",

  /** Location & date badge */
  locationBadge: "Samos, Greece • 2026",

  /** The primary call-to-action button label and link target */
  cta: {
    label: "Explore Our Experience",
    /** Href – point to an activities section, an external page, or a route */
    href: "/activities",
  },

  /** Main focal image (group/team photo) */
  mainImage: {
    src: GroupPhoto,
    alt: "Support Umbrella Nepal team at DigiGov2026 in Samos, Greece",
  },

  /** Supporting event thumbnails displayed in the image strip */
  eventImages: [
    { src: EventPhoto1, alt: "DigiGov2026 – Conference session" },
    { src: EventPhoto2, alt: "DigiGov2026 – Workshop engagement" },
    { src: EventPhoto3, alt: "DigiGov2026 – Social networking" },
  ],

  /** Tag / pill labels shown below the description */
  tags: [
    "AI & LLMs",
    "Open Data",
    "Digital Governance",
    "Government 3.0",
    "Big Data",
    "ICT Policy",
  ],
};
