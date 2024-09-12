# [Featured Content Bar](https://github.com/BobHasNoSoul/jellyfin-mods/blob/main/10.9.x.md#featured-content-bar-109xx) originally by [BobHasNoSoul](https://github.com/BobHasNoSoul) and [SethBacon](https://forum.jellyfin.org/u-sethbacon)

![feat2](https://github.com/user-attachments/assets/2a957183-5f04-4ecf-86ee-a285f6449d70)

1. Download [spotlight.html](https://github.com/tedhinklater/Jellyfin-Featured-Content-Bar/blob/main/spotlight.html)

2. Go to your ```jellyfin-web``` folder (C:\Program Files\Jellyfin\Server\jellyfin-web) and create a folder named ```avatars``` and drop ```spotlight.html``` in that folder

3. (Important: Open Notepad with Administrator rights, or use Notepad++ for this) In the jellyfin-web folder, open the file ```home-html.RANDOMSTRINGHERE.chunk.js```

4. Ctrl+F and search for ```data-backdroptype="movie,series,book">``` 

5. Paste this after the >

```js
<style>.featurediframe { width: 95vw; height: 350px; display: block; border: 0px solid #000; margin: 0 auto; margin-bottom: 40px}</style><iframe class="featurediframe" src="/web/avatars/spotlight.html"></iframe>
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


# Mobile View

https://github.com/user-attachments/assets/14eb9cd2-40bf-4ec9-ab6d-7aa0a7bfb298

# Full Page Version

![full](https://github.com/user-attachments/assets/aee57cbc-9e1f-4cd5-b0a7-3a9842fa9218)

Only difference is use [this version of spotlight.html](https://github.com/tedhinklater/Jellyfin-Featured-Content-Bar/blob/main/fullscreen/spotlight.html) 

insert this into home-html.chunk.js

```js
<style>.featurediframe { width: 100vw; height: 100vh; display: block; border: 0px solid #000; margin: 0 auto; margin-bottom: 40px}</style><iframe class="featurediframe" src="/web/avatars/spotlight.html"></iframe>
```

and add this CSS import at the end of your Custom CSS

```css

@import url("https://cdn.jsdelivr.net/gh/tedhinklater/Jellyfin-Featured-Content-Bar@main/fullscreen/fullscreenspotlight.css");

```


