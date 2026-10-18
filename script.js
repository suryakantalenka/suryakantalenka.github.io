document.documentElement.classList.add("js");
const header=document.querySelector("[data-header]");
const hero=document.querySelector("[data-hero]");
const menu=document.querySelector("[data-menu]");
const menuToggle=document.querySelector("[data-menu-toggle]");
const menuClose=document.querySelector("[data-menu-close]");
const menuLabel=document.querySelector("[data-menu-label]");
const backToTop=document.querySelector("[data-back-top]");
const setMenu=(open)=>{if(!menu||!menuToggle)return;menu.classList.toggle("is-open",open);menu.setAttribute("aria-hidden",String(!open));menuToggle.setAttribute("aria-expanded",String(open));document.body.classList.toggle("menu-open",open);if(menuLabel)menuLabel.textContent=open?"Close":"Menu";if(open)menuClose?.focus();};
menuToggle?.addEventListener("click",()=>setMenu(menuToggle.getAttribute("aria-expanded")!=="true"));
menuClose?.addEventListener("click",()=>setMenu(false));
menu?.querySelectorAll("a").forEach((link)=>link.addEventListener("click",()=>setMenu(false)));
window.addEventListener("keydown",(event)=>{if(event.key==="Escape")setMenu(false);});
const updateChrome=()=>{const heroBottom=hero?hero.offsetTop+hero.offsetHeight-110:520;const overHero=window.scrollY<heroBottom;header?.classList.toggle("over-hero",overHero);header?.classList.toggle("is-scrolled",window.scrollY>18);backToTop?.classList.toggle("is-visible",window.scrollY>700);};
updateChrome();window.addEventListener("scroll",updateChrome,{passive:true});window.addEventListener("resize",updateChrome);
const revealItems=document.querySelectorAll(".reveal");
if("IntersectionObserver" in window){const observer=new IntersectionObserver((entries,revealObserver)=>{entries.forEach((entry)=>{if(!entry.isIntersecting)return;entry.target.classList.add("is-visible");revealObserver.unobserve(entry.target);});},{threshold:.1,rootMargin:"0px 0px -24px"});revealItems.forEach((item)=>observer.observe(item));}else{revealItems.forEach((item)=>item.classList.add("is-visible"));}
document.querySelectorAll("[data-year]").forEach((node)=>{node.textContent=String(new Date().getFullYear());});
