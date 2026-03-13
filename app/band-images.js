import { readdir } from "node:fs/promises";
import path from "node:path";

const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif"]);

export const TOP_IMAGE_ROOT = "top-band-images";
export const PROFILE_IMAGE_ROOT = "profile-band-images";

export const bandImageDirectories = [
  { key: "shakashoku-shakai", name: "釈迦色社会" },
  { key: "parfait-sanmyaku", name: "パフェ山脈" }
];

export async function getFirstBandImage(rootFolder, bandKey) {
  const directory = path.join(process.cwd(), "public", rootFolder, bandKey);
  const entries = await readdir(directory, { withFileTypes: true }).catch(() => []);

  const file = entries
    .filter((entry) => entry.isFile())
    .filter((entry) => IMAGE_EXTENSIONS.has(path.extname(entry.name).toLowerCase()))
    .sort((left, right) => left.name.localeCompare(right.name, "ja"))[0];

  if (!file) {
    return null;
  }

  return {
    src: `/${rootFolder}/${bandKey}/${file.name}`,
    name: file.name
  };
}

export async function getBandImageMap(rootFolder) {
  const items = await Promise.all(
    bandImageDirectories.map(async (band) => [band.key, await getFirstBandImage(rootFolder, band.key)])
  );

  return Object.fromEntries(items);
}
