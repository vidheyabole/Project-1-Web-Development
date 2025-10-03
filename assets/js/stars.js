
export class Starfield{
  constructor(canvas){this.canvas=canvas;this.ctx=canvas.getContext('2d');this.stars=[];this.max=120;this.frame=0;this.onResize=this.resize.bind(this);window.addEventListener('resize',this.onResize,{passive:true});this.resize();this.init();requestAnimationFrame(()=>this.tick());}
  resize(){const r=Math.min(window.devicePixelRatio||1,2);this.canvas.width=this.canvas.clientWidth*r;this.canvas.height=this.canvas.clientHeight*r;this.ctx.setTransform(r,0,0,r,0,0);}
  init(){this.stars=Array.from({length:this.max},()=>({x:Math.random()*this.canvas.clientWidth,y:Math.random()*this.canvas.clientHeight,vx:(Math.random()-.5)*.3,vy:(Math.random()-.5)*.3,r:Math.random()*1.8+.2,a:Math.random()*.6+.4}));}
  tick(){this.frame++;this.ctx.clearRect(0,0,this.canvas.clientWidth,this.canvas.clientHeight);for(const s of this.stars){s.x+=s.vx;s.y+=s.vy;if(s.x<-5)s.x=this.canvas.clientWidth+5;if(s.x>this.canvas.clientWidth+5)s.x=-5;if(s.y<-5)s.y=this.canvas.clientHeight+5;if(s.y>this.canvas.clientHeight+5)s.y=-5;this.ctx.globalAlpha=s.a*(.7+.3*Math.sin((this.frame+s.r)*.02));this.ctx.beginPath();this.ctx.arc(s.x,s.y,s.r,0,Math.PI*2);this.ctx.fillStyle=getComputedStyle(document.documentElement).getPropertyValue('--fg').trim()||'#fff';this.ctx.fill();}this.ctx.globalAlpha=1;requestAnimationFrame(()=>this.tick());}
  destroy(){window.removeEventListener('resize',this.onResize);}
}
