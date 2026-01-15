#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const contentBlogDir = path.join(process.cwd(), 'content', 'blog');
const publicBlogDir = path.join(process.cwd(), 'public', 'blog');

const imageExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.webp', '.svg', '.avif'];

// Ensure public/blog directory exists
if (!fs.existsSync(publicBlogDir)) {
  fs.mkdirSync(publicBlogDir, { recursive: true });
}

// Get all image files from content/blog
const files = fs.readdirSync(contentBlogDir);
const imageFiles = files.filter((file) => {
  const ext = path.extname(file).toLowerCase();
  return imageExtensions.includes(ext);
});

// Copy each image to public/blog
imageFiles.forEach((file) => {
  const src = path.join(contentBlogDir, file);
  const dest = path.join(publicBlogDir, file);
  fs.copyFileSync(src, dest);
  console.log(`Copied: ${file}`);
});

console.log(`Done. Copied ${imageFiles.length} image(s) to public/blog/`);
