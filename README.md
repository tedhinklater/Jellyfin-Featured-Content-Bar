# Featured Content Bar
Thanks to [SethBacon](https://forum.jellyfin.org/u-sethbacon) & [BobHasNoSoul](https://github.com/BobHasNoSoul) & [MakD](https://github.com/MakD) for their talents

![f11](https://github.com/user-attachments/assets/714dc4b0-2e41-4133-a0e4-49a3d39e5d47)

1. Download [spotlight.html](https://github.com/tedhinklater/Jellyfin-Featured-Content-Bar/blob/main/spotlight.html)

2. Go to your ```jellyfin-web``` folder (C:\Program Files\Jellyfin\Server\jellyfin-web) and create a folder named ```ui``` and drop ```spotlight.html``` in that folder

3. In your Jellyfin Dashboard, under ```API Keys``` create an API key for Spotlight, copy the key, and insert it into ```line 90``` of spotlight.html

4. ```Important: Open Notepad with Administrator rights, or use Notepad++ for this``` In the jellyfin-web folder, open the file ```home-html.RANDOMSTRINGHERE.chunk.js```

5. Ctrl+F and search for ```data-backdroptype="movie,series,book">``` 

6. Paste this after the >

```js
<style>.featurediframe {width: 95vw; height: 23.5em; display: block; border: 0px solid #000; margin: 0 auto; margin-bottom: 0em; margin-top: 1em;} @media (min-width: 2000px) {.featurediframe {height: 18em; font-size: 175%;} .layout-desktop #homeTab .sections.homeSectionsContainer {margin-top: -3em !important;}} @media (max-width:1000px) and (orientation:portrait) {.featurediframe {height: 46vh;}} @media (max-width:1000px) and (orientation:landscape) {.featurediframe {height: 98vh;}} @media (max-width:400px) and (orientation:portrait) {.featurediframe {height: 52vh;}} @media (max-height: 400px) and (orientation:landscape) {.featurediframe {height: 100vh;}} @media screen and (aspect-ratio: 4/3) {.featurediframe {height: 27em;}} @media screen and (aspect-ratio: 3/4) {.featurediframe {height: 27em;}} @media screen and (aspect-ratio: 16/10) and (max-height: 1200px) {.featurediframe {height: 34em;}} @media screen and (aspect-ratio: 10/16) and (max-height: 1280px) {.featurediframe {height: 25em;}} </style><iframe class="featurediframe" src="/web/ui/spotlight.html"></iframe>
```
7. Save the file.

8. Empty your browser's cached web content (Ctrl+F5 or empty it from your browser's Cookies and Site Data settings section)

9. That's it.
    
![cropped](https://github.com/user-attachments/assets/768ce91d-ce05-4501-96c7-c1f406e63301)

# Mobile View (Landscape / Portrait)
![mobile](https://i.imgur.com/OrOzpBK.png)

# Mobile Layout, but on Desktop-sized screens

![mobiledesktop](https://i.imgur.com/9Eswyy5.png)

Same as above but use [this version of spotlight.html](https://github.com/tedhinklater/Jellyfin-Featured-Content-Bar/blob/main/mobile%20view%20on%20desktop%20screens/spotlight.html)

# Fullscreen Version

![mobiledesktop](https://i.imgur.com/XNhLVx7.png)

Same as above except use [this version of spotlight.html](https://github.com/tedhinklater/Jellyfin-Featured-Content-Bar/blob/main/fullscreen/spotlight.html) 

insert this into home-html.RANDOMSTRINGHERE.chunk.js after ```data-backdroptype="movie,series,book">``` 

```js
<style>.featurediframe { width: 99.5vw; height: 100vh; display: block; border: 0px solid #000; margin: 0 auto; margin-bottom: 40px} @media (max-width:1000px) and (orientation:portrait) {.featurediframe {height: 46vh; width: 95vw;}} @media (max-width:1000px) and (orientation:landscape) {.featurediframe {height: 98vh; width: 95vw;}} @media (min-width: 2000px) { .featurediframe {height:102vh;}}</style><iframe class="featurediframe" src="/web/ui/spotlight.html"></iframe>
```

and add this CSS to the very ```end``` of your Custom CSS

```css
.layout-desktop .page.homePage.libraryPage.allLibraryPage.backdropPage.pageWithAbsoluteTabs.withTabs.mainAnimatedPage { margin-top:-4.5em;}
.layout-desktop .overflowBackdropCard, .overflowSmallBackdropCard {  width: 12.7vw !important;  padding-right: 1.85em;}
.layout-desktop .skinHeader-withBackground {background-color: transparent; backdrop-filter: blur(0px);}
.layout-desktop #homeTab .section0 .sectionTitle.sectionTitle-cards.padded-left {  display: none !important;}
.layout-desktop #homeTab .verticalSection.section1.emby-scroller-container {  position: relative;  top: -27em;  left: 73em; width: 29vw; margin-bottom: -17em;}
.layout-desktop #homeTab .verticalSection.section2.emby-scroller-container::after { content: ''; position: fixed; top: 0; left: 0; width: 100%; height: 100vw; background: black; z-index: -1;}
[dir="ltr"] #homeTab .verticalSection.section0.emby-scroller-container .emby-scrollbuttons {right: -5em; top: -2em;}
.layout-desktop #homeTab .verticalSection.section0 .cardText-first {display: none !important;}
.layout-desktop #homeTab .sections.homeSectionsContainer { margin-top: 2em;}
.layout-desktop .sectionTitle.sectionTitle-cards.padded-left + .itemsContainer { margin-bottom: 2em;}
```

# Linux installation

1) Create the ui Directory

```sudo mkdir -p /usr/share/jellyfin/web/ui```

2) Copy your chosen spotlight.html file (making sure you inserted your API key) to the new "ui" folder

```sudo cp /path/to/spotlight.html /usr/share/jellyfin/web/ui/```

3) Add the relevant script to home-html.chunk.js

```sudo nano /usr/share/jellyfin/web/home-html.chunk.js```

4) Ensure the ui folder & spotlight.html are readable by Jellyfin

```sudo chown -R jellyfin:jellyfin /usr/share/jellyfin/web/ui```

```sudo chmod -R 755 /usr/share/jellyfin/web/ui```

5) Restart Jellyfin

```sudo systemctl restart jellyfin```

6) Clear Browser Cache

Make sure to clear your browser cache to load the updated home-html.chunk.js & spotlight.html 

# How to feature content in the bar

By default, the bar will feature content at random as long as it is available to the current user. 

To preselect content, place a [List.txt](https://github.com/tedhinklater/Jellyfin-Featured-Content-Bar/blob/main/List.txt) in the ```ui``` folder and paste the ID of each piece of content to be featured (IDs can be found in the address bar). 

# Uninstallation

Simply delete Step 5's snippet added to ```home-html.chunk.js``` then refresh your browser's cache.
