"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8372], {
  5939: function(a,e,t){t.r(e),e.default=`
<div id="indexPage" style="outline:0" data-role="page" data-dom-cache="true" class="page homePage libraryPage allLibraryPage backdropPage pageWithAbsoluteTabs withTabs" data-backdroptype="movie,series,book">
  <style>
    .featurediframe { width: 100vw; height: 100vh; display: block; border: 0; margin: 0 auto; margin-bottom: -32vh; margin-top: -3.5em; transition: height 300ms ease, margin 300ms ease;}
    body.featured-expanded .featurediframe { height: 100vh !important; margin-bottom: -13.5em !important; }
    @media (max-width: 1000px) and (orientation: portrait) { .featurediframe { height: 25em; margin-bottom: -1em; } }
    @media (max-width: 1000px) and (orientation: landscape) { .featurediframe { height: 26em; margin-bottom: -1em; } }
    @media (max-width: 421px) and (orientation: portrait) { .featurediframe { height: 11em; margin-bottom: 0em; margin-top: 0;} }
    @media (max-height: 421px) and (orientation: landscape) { .featurediframe { height: 12em; margin-top: 0em; } }
      </style>
      <div class="tabContent pageTabContent" id="homeTab" data-index="0"><iframe class="featurediframe" src="/web/ui/spotlight.html"></iframe><div class="sections"></div></div><div class="tabContent pageTabContent" id="favoritesTab" data-index="1"> <div class="sections"></div></div></div>`;}}]);
document.addEventListener("DOMContentLoaded", () => {
  const homeTab = document.getElementById("homeTab");
  const spotlightIframe = homeTab.querySelector(".featurediframe");

  const observer = new MutationObserver(() => {
  const isHomeTabActive = homeTab.classList.contains("is-active");
    spotlightIframe.style.display = isHomeTabActive ? "block" : "none";
  });
  observer.observe(homeTab, { attributes: true, attributeFilter: ["class"] });
});
