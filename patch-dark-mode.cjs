const fs = require('fs');
const path = require('path');

const filesToUpdate = [
  'src/pages/command/Dashboard.tsx',
  'src/pages/command/LiveMap.tsx'
];

filesToUpdate.forEach(file => {
  const fullPath = path.join('c:/Users/Dell/OneDrive/Desktop/Crisi.Ai', file);
  if (!fs.existsSync(fullPath)) return;
  
  let content = fs.readFileSync(fullPath, 'utf8');

  // Fix generic backgrounds
  content = content.replace(/className="([^"]*)bg-neutral-surface([^"]*)"/g, (match, p1, p2) => {
    if (match.includes('dark:bg-neutral-graphite') || match.includes('dark:bg-[#111318]')) return match;
    return `className="${p1}bg-neutral-surface dark:bg-neutral-graphite${p2}"`;
  });
  
  content = content.replace(/className="([^"]*)bg-white([^"]*)"/g, (match, p1, p2) => {
    if (match.includes('dark:bg-') || p1.includes('bg-white') || p2.includes('bg-white')) return match; // skip if already has dark or is multiple
    return `className="${p1}bg-white dark:bg-neutral-graphite${p2}"`;
  });

  // Fix borders
  content = content.replace(/border-brand-sand(?!\/| dark:)/g, 'border-brand-sand dark:border-neutral-secondary/30');

  // Fix text
  content = content.replace(/text-neutral-primary(?! dark:)/g, 'text-neutral-primary dark:text-neutral-surface');
  content = content.replace(/text-neutral-secondary(?! dark:)/g, 'text-neutral-secondary dark:text-neutral-coolGray');

  // Fix inputs/selects (bg-brand-sand/10 to dark:bg-[#111318])
  content = content.replace(/bg-brand-sand\/10(?! dark:)/g, 'bg-brand-sand/10 dark:bg-[#111318]');
  
  // Fix table headers (bg-brand-sand/30 to dark:bg-[#111318]\/50)
  content = content.replace(/bg-brand-sand\/30(?! dark:)/g, 'bg-brand-sand/30 dark:bg-[#111318]/50');

  fs.writeFileSync(fullPath, content);
  console.log(`Patched ${file}`);
});
