"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8372], {
  5939: function(a, e, t) {
    t.r(e),
    e.default = `
    <div id="indexPage" style="outline:0" data-role="page" data-dom-cache="true" class="page homePage libraryPage allLibraryPage backdropPage pageWithAbsoluteTabs withTabs" data-backdroptype="movie,series,book">
      <style>
        .featurediframe { width: 97.5vw; height: 23em; display: block; border: 0px solid #000; margin: 0 auto; margin-bottom: 0em; margin-top: 1em; transition: height 300ms ease, margin 300ms ease;}
        body.featured-expanded .featurediframe { height: 100vh !important; margin-bottom: -13.5em !important; }
        @media (max-width: 1000px) and (orientation: portrait) { .featurediframe { height: 25em; margin-bottom: -1em; } }
        @media (max-width: 1000px) and (orientation: landscape) { .featurediframe { height: 26em; margin-bottom: -1em; } }
        @media (max-width: 421px) and (orientation: portrait) { .featurediframe { height: 11em; margin-bottom: 0em; } }
        @media (max-height: 421px) and (orientation: landscape) { .featurediframe { height: 12em; margin-top: 0em; } }
        #toggleFullscreen { position: absolute; top: 7em; left: 2.1vw; width: 3em; height: 3em; background: rgba(0,0,0,0.55); border: 1px solid rgba(255,255,255,0.25); border-radius: 0.35em; cursor: pointer; opacity: 0.5; display: flex; align-items: center; justify-content: center; padding: 0; backdrop-filter: blur(4px);transition: background 0.25s ease, transform 0.25s ease, opacity 0.25s ease-in-out; }
        #toggleFullscreen:hover { background: rgba(0,0,0,0.75); transform: scale(1.05); opacity: 1; }
        #toggleFullscreen svg { width: 2.4em; height: 2.4em; fill: white; pointer-events: none; }
        @media (max-width: 951px) {#toggleFullscreen { display: none !important; } }
      </style>
      <div class="tabContent pageTabContent" id="homeTab" data-index="0">
      <button id="toggleFullscreen">
        <svg id="fsIcon" viewBox="0 0 24 24">
          <path id="expandIcon"
            d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zm-3-12v2h3v3h2V5h-5z"/>
          <path id="shrinkIcon" style="display:none;"
            d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zm-3-12v2h3v3h2V5h-5z"/>
        </svg>
      </button>
        <iframe class="featurediframe" src="/web/ui/spotlight.html"></iframe>
        <div class="sections"></div>
      </div>
      <div class="tabContent pageTabContent" id="favoritesTab" data-index="1">
        <div class="sections"></div>
      </div>
    </div>`;
  }
}]);
const attachToggleLogic = setInterval(() => {
  const homeTab = document.getElementById("homeTab");
  const btn = document.getElementById("toggleFullscreen");
  const iframe = document.querySelector(".featurediframe");
  if (!homeTab || !btn || !iframe) return;
  console.log("Toggle button found — enabling expand/shrink feature.");
  clearInterval(attachToggleLogic);
  let originalHeight = null;
  let originalMargin = null;
  let originalMarginTop = null;
  let originalWidth = null;
  const expandIcon = document.getElementById("expandIcon");
  const shrinkIcon = document.getElementById("shrinkIcon");
  btn.addEventListener("click", () => {
      const expanded = document.body.classList.toggle("featured-expanded");
      const cs = window.getComputedStyle(iframe);
      if (expanded) {
          originalHeight = cs.height;
          originalMargin = cs.marginBottom;
          originalMarginTop = cs.marginTop;
          originalWidth = cs.width;
          iframe.style.height = "100vh";
          iframe.style.marginBottom = "-9em";
          iframe.style.marginTop = "-3.5em";
          iframe.style.width = "100vw";
          expandIcon.style.display = "none";
          shrinkIcon.style.display = "block";
          iframe.contentWindow.postMessage({ spotlightMode: "expanded" }, "*");
      } else {
          iframe.style.height = originalHeight;
          iframe.style.marginBottom = originalMargin;
          iframe.style.marginTop = originalMarginTop;
          iframe.style.width = originalWidth;
          expandIcon.style.display = "block";
          shrinkIcon.style.display = "none";
          iframe.contentWindow.postMessage({ spotlightMode: "normal" }, "*");
      }
  });
}, 300);
