import fs from "fs";
import path from "path";

const PROJECTS_DIR = path.join(process.cwd(), "public/images/projects");

/**
 * Baca semua file gambar di dalam folder tertentu,
 * lalu urutkan berdasarkan nomor filenya (1.png, 2.png, ..., 10.png)
 */
export function getProjectImages(folderName: string): string[] {
  const folderPath = path.join(PROJECTS_DIR, folderName);

  if (!fs.existsSync(folderPath)) {
    console.warn(`Folder tidak ditemukan: ${folderPath}`);
    return [];
  }

  const files = fs.readdirSync(folderPath);

  const imageFiles = files
    .filter((file) => /\.(png|jpe?g|webp|avif)$/i.test(file))
    .sort((a, b) => {
      // urutkan numerik: 1.png, 2.png, ..., 10.png (bukan string sort 1,10,2)
      const numA = parseInt(a.match(/\d+/)?.[0] || "0", 10);
      const numB = parseInt(b.match(/\d+/)?.[0] || "0", 10);
      return numA - numB;
    });

  return imageFiles.map((file) => `${folderName}/${file}`);
}