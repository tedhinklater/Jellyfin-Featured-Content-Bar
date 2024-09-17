# [Featured Content Bar](https://github.com/BobHasNoSoul/jellyfin-mods/blob/main/10.9.x.md#featured-content-bar-109xx) originally by [BobHasNoSoul](https://github.com/BobHasNoSoul) and [SethBacon](https://forum.jellyfin.org/u-sethbacon)

![feat8](https://github.com/user-attachments/assets/e1dee7fa-c557-447e-a16c-5648b0f7c961)

1. Download [spotlight.html](https://github.com/tedhinklater/Jellyfin-Featured-Content-Bar/blob/main/spotlight.html)

2. Go to your ```jellyfin-web``` folder (C:\Program Files\Jellyfin\Server\jellyfin-web) and create a folder named ```ui``` and drop ```spotlight.html``` in that folder

3. In your Jellyfin Dashboard, under ```API Keys``` create an API key for Spotlight, copy the key, and insert it into ```line 84``` of spotlight.html

4. (Important: Open Notepad with Administrator rights, or use Notepad++ for this) In the jellyfin-web folder, open the file ```home-html.RANDOMSTRINGHERE.chunk.js```

5. Ctrl+F and search for ```data-backdroptype="movie,series,book">``` 

6. Paste this after the >

```js
<style>.featurediframe { width: 95vw; height: 23.5em; display: block; border: 0px solid #000; margin: 0 auto; margin-bottom: 40px} @media (min-width: 2000px) { .featurediframe {height: 18em; font-size: 175%;} .layout-desktop #homeTab .sections.homeSectionsContainer {margin-top: -3em !important;}} @media (max-width:1000px) and (orientation:portrait) {.featurediframe {height: 46vh;}} @media (max-width:1000px) and (orientation:landscape) {.featurediframe {height: 98vh;}} </style><iframe class="featurediframe" src="/web/ui/spotlight.html"></iframe>
```
7. Save the file.

8. Empty your browser's cached web content (Ctrl+F5 or empty it from your browser's Cookies and Site Data settings section)

9. That's it.

# Uninstallation

Simply delete Step 5's snippet added to ```home-html.chunk.js``` then refresh your browser's cache.

# Full Screen Version

![feat6](https://github.com/user-attachments/assets/d433ce9a-54be-4c31-95a8-6e3ac4505b0d)

Same as above except use [this version of spotlight.html](https://github.com/tedhinklater/Jellyfin-Featured-Content-Bar/blob/main/fullscreen/spotlight.html) 

insert this into home-html.RANDOMSTRINGHERE.chunk.js after ```data-backdroptype="movie,series,book">``` 

```js
<style>.featurediframe { width: 100vw; height: 100vh; display: block; border: 0px solid #000; margin: 0 auto; margin-bottom: 40px} @media (max-width:1000px) and (orientation:portrait) {.featurediframe {height: 46vh; width: 95vw;}} @media (max-width:1000px) and (orientation:landscape) {.featurediframe {height: 98vh; width: 95vw;}} @media (min-width: 2000px) { .featurediframe {height:102vh;}}</style><iframe class="featurediframe" src="/web/ui/spotlight.html"></iframe>
```

and add this CSS to the very ```end``` of your Custom CSS

```css
.layout-desktop .page.homePage.libraryPage.allLibraryPage.backdropPage.pageWithAbsoluteTabs.withTabs.mainAnimatedPage { margin-top:-4.5em;}
.layout-desktop .overflowBackdropCard, .overflowSmallBackdropCard {  width: 12.7vw !important;  padding-right: 1.85em;}
.layout-desktop .skinHeader-withBackground {background-color: transparent; backdrop-filter: blur(0px);}
.layout-desktop #homeTab .section0 .sectionTitle.sectionTitle-cards.padded-left {  display: none !important;}
.layout-desktop #homeTab .verticalSection.section1.emby-scroller-container {  position: relative;  top: -27em;  left: 73em; width: 44vw; margin-bottom: -17em;}
.layout-desktop #homeTab .verticalSection.section1.emby-scroller-container::after { content: ''; position: fixed; top: 0; left: 0; width: 100%; height: 100vw; background: black; z-index: -1;}
[dir="ltr"] #homeTab .verticalSection.section0.emby-scroller-container .emby-scrollbuttons {right: -5em; top: -2em;}
.layout-desktop #homeTab .verticalSection.section0 .cardText-first {display: none !important;}
.layout-desktop #homeTab .sections.homeSectionsContainer { margin-top: 2em;}
```
