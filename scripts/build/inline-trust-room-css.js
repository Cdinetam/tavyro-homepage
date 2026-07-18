/**
 * Embeds the compiled Tailwind CSS into the static Trust Room HTML files.
 *
 * Replaces one of the following, whichever is present:
 *   1) the dev-only Tailwind CDN <script> + inline `tailwind.config` block, or
 *   2) a previously generated, marked <style> block (for re-runs).
 *
 * Usage: node scripts/build/inline-trust-room-css.js <compiled-css-file>
 */
const fs = require("fs");
const path = require("path");

const cssPath = process.argv[2];
if (!cssPath) {
  console.error("Usage: node inline-trust-room-css.js <compiled-css-file>");
  process.exit(1);
}

const css = fs.readFileSync(cssPath, "utf8").trim();
const root = process.cwd();

const files = [
  path.join(root, "public/tavyro-trust-room.html"),
  path.join(root, "public/en/tavyro-trust-room.html"),
];

const MARKER = "<!-- Tailwind: precompiled locally";

const cdnBlock =
  /<script src="https:\/\/cdn\.tailwindcss\.com"><\/script>\s*<script>[\s\S]*?<\/script>/;
const generatedBlock =
  /<!-- Tailwind: precompiled locally[\s\S]*?<\/style>/;

const replacement =
  MARKER +
  " (only the classes used on this page). " +
  "Regenerate with scripts/build/build-trust-room-css.sh after changing markup. -->\n" +
  "<style>\n" +
  css +
  "\n</style>";

for (const file of files) {
  let html = fs.readFileSync(file, "utf8");

  if (cdnBlock.test(html)) {
    html = html.replace(cdnBlock, replacement);
  } else if (generatedBlock.test(html)) {
    html = html.replace(generatedBlock, replacement);
  } else {
    console.log("SKIP (no CDN or generated block found):", file);
    continue;
  }

  fs.writeFileSync(file, html);
  console.log("OK:", path.relative(root, file));
}
