
import {Starfield} from './stars.js'; import {initTheme, toggleTheme} from './theme.js';
initTheme();
const themeBtn=document.querySelector('[data-action="toggle-theme"]');
if(themeBtn){themeBtn.addEventListener('click',()=>{toggleTheme();themeBtn.setAttribute('aria-pressed',document.documentElement.getAttribute('data-theme')==='dark');});}
const canvas=document.getElementById('bg-canvas'); if(canvas) new Starfield(canvas);
const tw=document.querySelector('[data-typewriter]'); if(tw){const text=tw.getAttribute('data-typewriter')||tw.textContent; tw.textContent=''; let i=0;(function loop(){ if(i<=text.length){tw.textContent=text.slice(0,i);i++;setTimeout(loop,28);} })();}
const btn=document.getElementById('more-projects-btn'); const panel=document.getElementById('more-projects');
if(btn && panel){btn.addEventListener('click',()=>{const hidden=panel.hasAttribute('hidden'); if(hidden){panel.removeAttribute('hidden'); btn.setAttribute('aria-expanded','true'); btn.textContent='Hide projects';} else {panel.setAttribute('hidden',''); btn.setAttribute('aria-expanded','false'); btn.textContent='More projects';}});}
