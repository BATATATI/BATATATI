// Vérifie que tous les fichiers référencés par index.html existent et que le JS est syntaxiquement valide.
import { readFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import vm from "node:vm";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const html = readFileSync(join(root, "index.html"), "utf8");
let errors = 0;

for (const m of html.matchAll(/(?:src|href)="(assets\/[^"]+)"/g)) {
  const ok = existsSync(join(root, m[1]));
  console.log(ok ? "OK     " : "MANQUE ", m[1]);
  if (!ok) errors++;
}
const css = readFileSync(join(root, "assets/css/style.css"), "utf8");
for (const m of css.matchAll(/url\("\.\.\/([^")]+)"\)/g)) {
  const ok = existsSync(join(root, "assets", m[1]));
  console.log(ok ? "OK     " : "MANQUE ", "assets/" + m[1]);
  if (!ok) errors++;
}
try { new vm.Script(readFileSync(join(root, "assets/js/app.js"), "utf8")); console.log("OK      assets/js/app.js (syntaxe)"); }
catch (e) { console.log("ERREUR  app.js:", e.message); errors++; }

process.exit(errors ? 1 : 0);
