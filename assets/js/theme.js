
const KEY='site-theme';
export function initTheme(){const root=document.documentElement;const saved=localStorage.getItem(KEY);const prefers=window.matchMedia('(prefers-color-scheme: dark)').matches;root.setAttribute('data-theme', saved|| (prefers?'dark':'light'));}
export function toggleTheme(){const root=document.documentElement;const next=root.getAttribute('data-theme')==='dark'?'light':'dark';root.setAttribute('data-theme',next);localStorage.setItem(KEY,next);}
