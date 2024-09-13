# [Featured Content Bar](https://github.com/BobHasNoSoul/jellyfin-mods/blob/main/10.9.x.md#featured-content-bar-109xx) originally by [BobHasNoSoul](https://github.com/BobHasNoSoul) and [SethBacon](https://forum.jellyfin.org/u-sethbacon)

![feat8](https://github.com/user-attachments/assets/e1dee7fa-c557-447e-a16c-5648b0f7c961)

1. Download [spotlight.html](https://github.com/tedhinklater/Jellyfin-Featured-Content-Bar/blob/main/spotlight.html)

2. Go to your ```jellyfin-web``` folder (C:\Program Files\Jellyfin\Server\jellyfin-web) and create a folder named ```avatars``` and drop ```spotlight.html``` in that folder

3. (Important: Open Notepad with Administrator rights, or use Notepad++ for this) In the jellyfin-web folder, open the file ```home-html.RANDOMSTRINGHERE.chunk.js```

4. Ctrl+F and search for ```data-backdroptype="movie,series,book">``` 

5. Paste this after the >

```js
<style>.featurediframe { width: 95vw; height: 23.5em; display: block; border: 0px solid #000; margin: 0 auto; margin-bottom: 40px} @media (min-width: 2000px) { .featurediframe {height: 18em; font-size: 175%;} .layout-desktop #homeTab .sections.homeSectionsContainer {margin-top: -3em !important;}} @media (max-width:1000px) and (orientation:portrait) {.featurediframe {height: 46vh;}} @media (max-width:1000px) and (orientation:landscape) {.featurediframe {height: 98vh;}} </style><iframe class="featurediframe" src="/web/avatars/spotlight.html"></iframe>
```
6. Save the file.

7. In the same folder (jellyfin-web) open ```index.html``` with a text editor and find ```<\body><\html>``` and replace it with

```js
<script>
// Function to save credentials to sessionStorage
function saveCredentialsToSessionStorage(credentials) {
  try {
    // Store the credentials in sessionStorage
    sessionStorage.setItem('json-credentials', JSON.stringify(credentials));
    console.log('Credentials saved to sessionStorage.');
  } catch (error) {
    console.error('Error saving credentials:', error);
  }
}

// Function to save the API key to sessionStorage
function saveApiKey(apiKey) {
  try {
    sessionStorage.setItem('api-key', apiKey);
    console.log('API key saved to sessionStorage.');
  } catch (error) {
    console.error('Error saving API key:', error);
  }
}

// Override the default console.log function
(function() {
  var originalConsoleLog = console.log;

  console.log = function(message) {
    // Call the original console.log method
    originalConsoleLog.apply(console, arguments);

    // Check if the message contains the JSON credentials
    if (typeof message === 'string' && message.startsWith('Stored JSON credentials:')) {
      try {
        // Extract the JSON credentials from the message
        var jsonString = message.substring('Stored JSON credentials: '.length);
        var credentials = JSON.parse(jsonString);

        // Save the credentials to sessionStorage
        saveCredentialsToSessionStorage(credentials);
      } catch (error) {
        console.error('Error parsing credentials:', error);
      }
    }

    // Check if the message contains the WebSocket URL with api_key
    if (typeof message === 'string' && message.startsWith('opening web socket with url:')) {
      try {
        // Extract the API key from the message
        var url = message.split('url:')[1].trim();
        var urlParams = new URL(url).searchParams;
        var apiKey = urlParams.get('api_key');

        if (apiKey) {
          saveApiKey(apiKey);
        }
      } catch (error) {
        console.error('Error extracting API key:', error);
      }
    }
  };
})();
</script>
</body></html>
```
And Save. 

8. Empty your browser's cached web content (Ctrl+F5 or empty it from your browser's Cookies and Site Data settings section)

9. That's it.

# Full Screen Version

![full2](https://github.com/user-attachments/assets/a1477364-ad0e-441e-a3ad-cf471df56f4d)

Same as above except use [this version of spotlight.html](https://github.com/tedhinklater/Jellyfin-Featured-Content-Bar/blob/main/fullscreen/spotlight.html) 

insert this into home-html.RANDOMSTRINGHERE.chunk.js after ```data-backdroptype="movie,series,book">``` 

```js
<style>.featurediframe { width: 100vw; height: 100vh; display: block; border: 0px solid #000; margin: 0 auto; margin-bottom: 40px}</style><iframe class="featurediframe" src="/web/avatars/spotlight.html"></iframe>
```

and add this CSS to the very ```end``` of your Custom CSS

```css

.layout-desktop .libraryPage:not(.noSecondaryNavPage) {  padding-top: 0em !important;}
.layout-desktop .overflowBackdropCard, .overflowSmallBackdropCard {  width: 12.7vw !important;  padding-right: 1.85em;}
.layout-desktop .skinHeader-withBackground {background-color: transparent; backdrop-filter: blur(0px);}
.layout-desktop #homeTab .section0 .sectionTitle.sectionTitle-cards.padded-left {  display: flex !important; } 
.layout-desktop #homeTab .section0 .sectionTitle.sectionTitle-cards.padded-left {  display: none !important;}
.layout-desktop #homeTab .verticalSection.section0.emby-scroller-container {position: absolute; top: 82.8vh;}
.layout-desktop #homeTab .verticalSection.section0.emby-scroller-container::after { content: ''; position: fixed; top: 0; left: 0; width: 100%; height: 100vw; background: black; z-index: -1;}
[dir="ltr"] #homeTab .verticalSection.section0.emby-scroller-container .emby-scrollbuttons {
  right: -5em; top: -2em;}

```
