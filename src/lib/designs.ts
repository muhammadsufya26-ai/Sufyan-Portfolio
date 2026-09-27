import fs from "fs";
import path from "path";

export interface DesignFolder {
  id: string;
  folderName: string;
  title: string;
  category: string;
  headlineJP: string;
  quote: string;
  details: string;
  images: string[];
  coverImage: string;
  count: number;
}

const FOLDER_METADATA: Record<
  string,
  {
    title: string;
    category: string;
    headlineJP: string;
    quote: string;
    details: string;
  }
> = {
  "archive-capsule": {
    title: "ARCHIVE CAPSULE // VOL. 04",
    category: "STREETWEAR",
    headlineJP: "限定版アーカイブ",
    quote: "LIMITED MERCH // ACID APPAREL",
    details: "Bespoke lookbook typography poster and merchandising collection created for CreativeVibeAssets.",
  },
  "ebooks-cover": {
    title: "EBOOKS & EDITORIAL COVERS",
    category: "EDITORIAL TYPE",
    headlineJP: "表紙デザイン",
    quote: "DIGITAL PUBLISHING // SWISS GRIDS",
    details: "Modern publication covers, book mockups, and minimal typographic layouts.",
  },
  "kinetic-type": {
    title: "KINETIC TYPE MANIFESTO",
    category: "EDITORIAL TYPE",
    headlineJP: "純粋な構造主義",
    quote: "RADICAL TENSION // EXPERIMENTAL TYPOGRAPHY",
    details: "Asymmetrical typographical study balancing radical negative space, multi-column footnotes, and stretched glyphs.",
  },
  luftgekuhlt: {
    title: "LUFTGEKÜHLT // AIR-COOLED FLAT-6",
    category: "AUTOMOTIVE",
    headlineJP: "機械式空冷美学",
    quote: "STUTTGART HOMMAGE // 930 TURBO HERITAGE",
    details: "Classic German motorsport aesthetic infused with vintage race livery typography and blueprint overlays.",
  },
  "midnight-protocol": {
    title: "MIDNIGHT PROTOCOL // SKYLINE GT-R",
    category: "AUTOMOTIVE",
    headlineJP: "真夜中の首都高伝説",
    quote: "BORN ON THE WANGAN // 00:00 AM SPEC",
    details: "High-contrast editorial automotive composition highlighting the R34 chassis silhouette against brutalist Japanese gridlines.",
  },
  "neo-shibuya": {
    title: "NEO-SHIBUYA SUB-DISTRICT 07",
    category: "CYBERPUNK",
    headlineJP: "サイバー反乱戦線",
    quote: "URBAN DRIFT // CYBERNETIC VISUALS",
    details: "Heavyweight streetwear back-print graphic exploring cybernetic enhancement labels, raw barcoding, and industrial vector stamps.",
  },
  posters: {
    title: "COMMERCIAL POSTERS & COLLATERAL",
    category: "BRANDING",
    headlineJP: "商業ポスター展示",
    quote: "HIGH-IMPACT MARKETING // GRAPHIC RIGOR",
    details: "Editorial flyers, restaurant identity systems, brochure designs, and bespoke promotional artwork.",
  },
  "raw-frequency": {
    title: "RAW FREQUENCY // OVERDRIVE",
    category: "CYBERPUNK",
    headlineJP: "電子音波の過負荷",
    quote: "SIGNAL DETECTED // 128.4 KHZ DISTORTION",
    details: "Glitch-distorted soundwave visuals fused with cyberpunk HUD metrics, warning banners, and industrial security seals.",
  },
  visuals: {
    title: "CINEMATIC VISUALS & POP CULTURE",
    category: "VISUAL ART",
    headlineJP: "映画の美学",
    quote: "POP CULTURE REIMAGINED // DARK CINEMATIC",
    details: "Cinematic portraiture, distressed vector movie posters, and high-contrast comic tributes (John Wick, Spider-Man).",
  },
};

const VALID_IMAGE_EXTENSIONS = new Set([
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
  ".gif",
]);

export function getDesignFolders(): DesignFolder[] {
  try {
    const designsDirectory = path.join(process.cwd(), "public", "designs");

    if (!fs.existsSync(designsDirectory)) {
      return [];
    }

    const entries = fs.readdirSync(designsDirectory, { withFileTypes: true });
    const folders: DesignFolder[] = [];

    for (const entry of entries) {
      if (!entry.isDirectory()) continue;

      const folderName = entry.name;
      const folderSlug = folderName.toLowerCase().replace(/\s+/g, "-");
      const folderPath = path.join(designsDirectory, folderName);

      const files = fs.readdirSync(folderPath);

      // Collect all valid image files
      const imageFiles = files.filter((file) => {
        const ext = path.extname(file).toLowerCase();
        return VALID_IMAGE_EXTENSIONS.has(ext);
      });

      if (imageFiles.length === 0) continue;

      // Construct relative public URLs
      const images = imageFiles.map((file) => `/designs/${folderName}/${file}`);

      const meta =
        FOLDER_METADATA[folderSlug] ||
        FOLDER_METADATA[folderName.toLowerCase()] || {
          title: folderName.toUpperCase().replace(/-/g, " "),
          category: "DESIGN ARCHIVE",
          headlineJP: "デザイン展示",
          quote: "CURATED ARTWORKS // RAW SPEC",
          details: `Collection of ${imageFiles.length} original design pieces from the ${folderName} series.`,
        };

      folders.push({
        id: folderSlug,
        folderName,
        title: meta.title,
        category: meta.category,
        headlineJP: meta.headlineJP,
        quote: meta.quote,
        details: meta.details,
        images,
        coverImage: images[0],
        count: images.length,
      });
    }

    // Custom sort order to present the most iconic series first
    const preferredOrder = [
      "midnight-protocol",
      "luftgekuhlt",
      "neo-shibuya",
      "archive-capsule",
      "kinetic-type",
      "raw-frequency",
      "visuals",
      "ebooks-cover",
      "posters",
    ];

    folders.sort((a, b) => {
      const idxA = preferredOrder.indexOf(a.id);
      const idxB = preferredOrder.indexOf(b.id);
      if (idxA !== -1 && idxB !== -1) return idxA - idxB;
      if (idxA !== -1) return -1;
      if (idxB !== -1) return 1;
      return a.title.localeCompare(b.title);
    });

    return folders;
  } catch (error) {
    console.error("Error reading design folders:", error);
    return [];
  }
}
