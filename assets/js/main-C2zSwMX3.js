import{l as e}from"./main-DtVXBH9p.js";!function(){const e="Where Gaming Gets Social",t="hero.title";function n(){const n=document.querySelectorAll(`[data-i18n="${t}"]`);if(0===n.length)return void console.log("No slogan elements found, will check again when translations are applied");n.forEach((t=>{t.textContent=e,t.classList.add("protected-branding");new MutationObserver((n=>{n.forEach((n=>{"characterData"!==n.type&&"childList"!==n.type||t.textContent!==e&&(t.textContent=e)}))})).observe(t,{characterData:!0,childList:!0,subtree:!0}),console.log("Slogan protected from translation:",t)}));const o=document.createElement("style");o.textContent="\n      .protected-branding {\n        /* Custom styling for the protected slogan */\n        position: relative;\n      }\n      \n      /* No indicator shown for protected branding */\n    ",document.head.appendChild(o)}function o(){n(),function(){if(!window.i18n)return void console.warn("i18n system not found, slogan preservation might not work");const o=window.i18n.translate;window.i18n.translate=function(n,s={}){return n===t?e:o.call(this,n,s)};const s=window.i18n.updatePageContent;window.i18n.updatePageContent=function(){const e=s.apply(this,arguments);return n(),e},console.log("Translation system override applied for slogan preservation")}(),window.i18n&&"function"==typeof window.i18n.addObserver&&window.i18n.addObserver((()=>{setTimeout(n,100)}))}"loading"===document.readyState?document.addEventListener("DOMContentLoaded",o):o(),window.addEventListener("load",o),setTimeout(o,1e3)}(),document.addEventListener("DOMContentLoaded",(function(){const e=document.getElementById("header-component"),t=document.getElementById("hero");let n=window.scrollY;function o(){const o=window.scrollY,s=o>n;n=o;const i=t?t.offsetHeight:500,a=Math.min(o/i,1);if(o<50)e.classList.remove("header-hidden"),e.classList.remove("header-scrolled"),document.documentElement.style.setProperty("--header-gradient-opacity","0.5");else if(s&&o>150)e.classList.add("header-hidden");else{e.classList.remove("header-hidden"),e.classList.add("header-scrolled");const t=.4+.3*a;document.documentElement.style.setProperty("--header-gradient-opacity",t.toString())}}document.documentElement.style.setProperty("--header-gradient-opacity","0.7"),window.addEventListener("scroll",(function(){window.requestAnimationFrame(o)})),o()}));const t=e.getModuleLogger("animation-utils");function n(e,n="fade-in",o=0){if(!e)return void t.warn("Element not provided for animation");const s=new IntersectionObserver((t=>{t.forEach((t=>{t.isIntersecting&&(o>0?setTimeout((()=>{e.classList.add(n,"animated")}),o):e.classList.add(n,"animated"),s.unobserve(e))}))}),{root:null,rootMargin:"0px 0px -10% 0px",threshold:.1});s.observe(e)}document.addEventListener("DOMContentLoaded",(()=>{!function(){const e=document.querySelector(".collaborative-section");if(!e)return;const t=e.querySelector("h2"),o=e.querySelector(".collaborative-description"),s=e.querySelector(".collaborative-actions"),i=s?s.querySelectorAll("a"):[];t&&n(t,"fade-in-up");o&&n(o,"fade-in-up",100);i.forEach(((e,t)=>{n(e,"fade-in-up",200+100*t)})),function(e){e.forEach((e=>{e.addEventListener("mouseenter",(()=>{e.classList.add("hover")})),e.addEventListener("mouseleave",(()=>{e.classList.remove("hover")}))}))}(i),function(e){e.forEach((e=>{e.addEventListener("click",(t=>{const n=e.classList.contains("btn-discord")?"discord":"ideas";window.trackEvent&&window.trackEvent("collaborative_section","button_click",n)}))}))}(i)}()}));document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelectorAll(".gaming-sessions-section");if(!e.length)return void console.warn("No gaming sessions sections found");const t={"intelligent-matchmaking":"/assets/images/match-queue-mockup-CalLeY_l.png","community-creation":"/assets/images/community-mockup-EXb5EYBM.png","gaming-sessions":"/assets/images/game-session-mockup-BxMk9K8M.png","global-chat":"/assets/images/gobal-chat-mockup-DNsVrXJD.png"};e.forEach((e=>{const n=e.querySelector(".gaming-sessions-container"),o=e.querySelector(".gaming-sessions-grid-placeholder");if(!n||!o)return void console.warn("Missing required elements in section",e.id);n.classList.add("reveal");const s=t[e.id];if(s){const t=document.createElement("div");t.className="gaming-sessions-mockup";const n=document.createElement("img");n.src=s,n.alt=e.id.replace(/-/g," "),t.appendChild(n),o.appendChild(t)}else console.warn("No image defined for section",e.id)}))}));const o=e.getModuleLogger("feedback-section");function s(e){""!==e.value.trim()?e.classList.add("has-content"):e.classList.remove("has-content")}document.addEventListener("DOMContentLoaded",(()=>{!function(){o.info("Initializing feedback section");const e=document.querySelector(".feedback-section");if(!e)return void o.warn("Feedback section not found");const i=e.querySelector("h2"),a=e.querySelector(".notification-subtitle"),r=e.querySelector(".combined-form-container"),d=e.querySelectorAll(".form-group, button");i&&n(i,"fade-in-up");a&&n(a,"fade-in-up",100);r&&n(r,"fade-in-up",200);d.length>0&&function(e,n="fade-in",o=100,s=0){if(!e||0===e.length)return void t.warn("No elements provided for staggered animation");const i=new IntersectionObserver((t=>{t.forEach((t=>{t.isIntersecting&&(Array.from(e).forEach(((e,t)=>{setTimeout((()=>{e.classList.add(n,"animated")}),s+t*o)})),i.unobserve(e[0]))}))}),{root:null,rootMargin:"0px 0px -10% 0px",threshold:.1});e[0]&&i.observe(e[0])}(d,"fade-in-up",100,300);(function(){const e=document.getElementById("combined-form"),t=document.getElementById("form-thanks");if(!e||!t)return void o.warn("Form elements not found for feedback setup");document.addEventListener("form-submission-success",(()=>{o.info("Form submission detected, showing thank you message"),e.style.transition="opacity 0.5s ease, transform 0.5s ease",t.style.transition="opacity 0.5s ease, transform 0.5s ease",e.style.opacity="0",e.style.transform="translateY(-20px)",setTimeout((()=>{e.classList.add("hidden"),t.classList.remove("hidden"),setTimeout((()=>{t.style.opacity="1",t.style.transform="translateY(0)"}),50)}),500)}))})(),function(){document.querySelectorAll("#combined-form input, #combined-form textarea").forEach((e=>{s(e),e.addEventListener("input",(()=>{s(e)})),e.addEventListener("focus",(()=>{e.parentElement.classList.add("focused")})),e.addEventListener("blur",(()=>{e.parentElement.classList.remove("focused"),s(e)}))}));const e=document.getElementById("email"),t=document.getElementById("email-error");e&&t&&e.addEventListener("input",(()=>{t.textContent=""}))}(),o.debug("Feedback section initialized")}()}));
