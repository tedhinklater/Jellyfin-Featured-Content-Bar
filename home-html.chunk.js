"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8372], {
  5939: function(a, e, t) {
    t.r(e),
    e.default = `
    <div id="indexPage" style="outline:0" data-role="page" data-dom-cache="true" class="page homePage libraryPage allLibraryPage backdropPage pageWithAbsoluteTabs withTabs" data-backdroptype="movie,series,book">
      <style>
        .featurediframe {width: 95vw; height: 23.5em; display: block; border: 0px solid #000; margin: 0 auto; margin-bottom: 0em; margin-top: 1em;}
		@media (min-width: 2601px) {.featurediframe {height: 25em;} }
        @media (min-width: 2000px) and (max-width: 2600px) {.featurediframe {height: 20em; font-size: 133%;} .layout-desktop #homeTab .sections.homeSectionsContainer {margin-top: -3em !important;} }
        @media (max-width: 1000px) and (orientation: portrait) {.featurediframe {height: 25em; margin-bottom: -3em;} }
        @media (max-width: 1000px) and (orientation: landscape) {.featurediframe {height: 26em; margin-bottom: -7em;} }
        @media (max-width: 400px) and (orientation: portrait) {.featurediframe {height: 45vh; margin-bottom: 0em;} }
        @media (max-height: 400px) and (orientation: landscape) {.featurediframe {height: 100vh;} }
        @media screen and (aspect-ratio: 4/3) {.featurediframe {height: 25em;} }
        @media screen and (aspect-ratio: 3/4) {.featurediframe {height: 25em; margin-bottom: -5em;} }
        @media screen and (aspect-ratio: 16/10) and (max-height: 1200px) {.featurediframe {height: 34em; margin-bottom: -5em;} }
        @media screen and (aspect-ratio: 10/16) and (max-height: 1280px) {.featurediframe {height: 25em; margin-bottom: -5em;} }
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
