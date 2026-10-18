// ===== EDIT THIS FILE TO MAKE THE SITE YOURS =====
// 1. Put your profile photo in the "images" folder and set its file name in "pfp".
// 2. Put each drawing in the "images" folder, then copy one block in WORKS and change it.
// 3. "slug" becomes the page address for that drawing: lowercase, no spaces (use dashes).
// 4. Leave a social link as "" to hide it. Remove "status" or "tools" if you don't need them.

const SITE = {
  name: "Brian Samonte",
  title: "Illustrator",
  tagline: "Pencil, ink, and digital drawings.",
  pfp: "images/pfp.svg",
  bio: "Write two or three sentences about yourself and how you draw.",
  contactText: "For commissions or questions, send me a message.",
  email: "you@example.com",
  socials: [
    { label: "Instagram", url: "https://www.instagram.com/sam_pa_god/?hl=en" },
    { label: "Facebook", url: "https://www.facebook.com/brian.samonte.378/" },
    { label: "tiktok", url: "https://www.tiktok.com/@cosa_sam" }
  ]
};

const WORKS = [
  { slug: "sample-one",   title: "Sample drawing one",   category: "Pencil",     year: 2026, tools: ["Graphite", "Sketchbook"], image: "images/work-1.svg", status: "Finished", description: "Replace this with a short note about the drawing: what it shows, why you made it." },
  { slug: "sample-two",   title: "Sample drawing two",   category: "Ink",        year: 2025, tools: ["Fineliner"],              image: "images/work-2.svg", status: "Finished", description: "Replace this with a short note about the drawing." },
  { slug: "sample-three", title: "Sample drawing three", category: "Digital",    year: 2025, tools: ["Procreate"],              image: "images/work-3.svg", status: "Finished", description: "Replace this with a short note about the drawing." },
  { slug: "sample-four",  title: "Sample drawing four",  category: "Watercolor", year: 2024, tools: ["Watercolor", "Paper"],    image: "images/work-4.svg", status: "Finished", description: "Replace this with a short note about the drawing." }
];
