# Jellyfin Featured Content Bar
Thanks to [SethBacon](https://forum.jellyfin.org/u-sethbacon) (Video integration)<br>
[BobHasNoSoul](https://github.com/BobHasNoSoul) (Original architect)<br>
[MakD](https://github.com/MakD) (Mobile Styling)

![homepage](https://github.com/user-attachments/assets/2509b988-d7cc-4f8e-9807-58fd71e9fe78)

1. Download ```spotlight.html``` and ```List.txt```. Go to your ```jellyfin-web``` folder (C:\Program Files\Jellyfin\Server\jellyfin-web) and create a folder named ```ui``` and drop ```spotlight.html``` and ```List.txt``` in that folder

<details> <summary>Show screenshots</summary>

![download](https://github.com/user-attachments/assets/30cf946b-7532-46c4-9f43-ad80ed22ea3f)

![Screenshot 2024-11-25 030656](https://github.com/user-attachments/assets/a92129a7-9ace-4db8-aa9c-d229f0e809e1)

</details>

2. ```Important: Open Notepad with Administrator rights, or use Notepad++ for this``` In the jellyfin-web folder, open the file ```home-html.RANDOMSTRINGHERE.chunk.js```. Replace everything with this code
<details> <summary>Show code</summary>

```js
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8372], {
  5939: function(a, e, t) {
    t.r(e),
    e.default = `
    <div id="indexPage" style="outline:0" data-role="page" data-dom-cache="true" class="page homePage libraryPage allLibraryPage backdropPage pageWithAbsoluteTabs withTabs" data-backdroptype="movie,series,book">
      <style>
        .featurediframe {width: 97.5vw; height: 23.5em; display: block; border: 0px solid #000; margin: 0 auto; margin-bottom: 0em; margin-top: 1em;}
    @media (max-width: 1000px) and (orientation: portrait) {.featurediframe {height: 25em; margin-bottom: -8em;} }
    @media (max-width: 1000px) and (orientation: landscape) {.featurediframe {height: 26em; margin-bottom: -6em;} }
    @media (max-width: 421px) and (orientation: portrait) {.featurediframe {height: 25em; margin-bottom: -3em;} }
    @media (max-height: 421px) and (orientation: landscape) {.featurediframe {height: 83vh; margin-top: -1em;} }
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
```
</details>

3. Save the file. Empty your browser's cached web content (Ctrl+F5 or empty it from your browser's Cookies and Site Data settings section)
<details> <summary>Show screenshot</summary>

![Screenshot 2024-11-25 031248](https://github.com/user-attachments/assets/0fee8b46-2958-4da0-93b0-a00c43835064)
</details>

# How to feature content in the bar (List.txt)

To preselect content, edit [List.txt](https://github.com/tedhinklater/Jellyfin-Featured-Content-Bar/blob/main/List.txt) in the ```ui``` folder and paste the ID of each piece of content (Movie, Show, Album or Collection) to be featured (IDs can be found in the address bar).

If it is empty ```below``` line 1, the bar will feature content at random.

![list](https://github.com/user-attachments/assets/5f8f7924-7a9b-49c1-aefa-198cefce0f60)

```IMPORTANT``` If you use List.txt to preselect content and a User has an Age Rating Limit on their account (U, PG etc) make sure you add content for them to see too, or it will just be blank (content above their Age Limit is hidden to them).

# Desktop View

![output_final](https://github.com/user-attachments/assets/6de623fb-2ad9-4bcf-8a77-24dbdd9dd184)

# Mobile View (Landscape / Portrait)
![mobile](https://i.imgur.com/OrOzpBK.png)

# Linux installation
<details> <summary>Show guide</summary>

1) Create the ui Directory

```shell
sudo mkdir -p /usr/share/jellyfin/web/ui
```

2) Download your spotlight.html and List.txt files (make sure you edited them, as above) and then copy them to the new "ui" folder

```shell
sudo cp /local/path/to/spotlight.html /usr/share/jellyfin/web/ui/
```

3) Add the relevant script to home-html.chunk.js

```shell
sudo nano /usr/share/jellyfin/web/home-html.chunk.js
```

4) Ensure the ui folder & spotlight.html are readable by Jellyfin

```shell
sudo chown -R jellyfin:jellyfin /usr/share/jellyfin/web/ui
```

```shell
sudo chmod -R 755 /usr/share/jellyfin/web/ui
```

5) Restart Jellyfin

```shell
sudo systemctl restart jellyfin
```

6) Clear Browser Cache

Make sure to clear your browser cache to load the updated home-html.chunk.js & spotlight.html 
</details>

# Docker installation (Mount)
<details> <summary>Show guide</summary>

1. **Prepare the Files**:
   - Identify where your Docker configuration files for Jellyfin are stored on the host system. For example, they might be under `/docker/persistentfiles/jellyfin`.
   - In this folder (on the host system), create a subdirectory called `ui` if it does not already exist.
   - Copy the following files into this `ui` folder: (don't forget to edit them, as above)
     - `home-html.chunk.js`  
     - `spotlight.html`  
     - `List.txt`  

   **Example Host Path**:  
   ```
   /docker/persistentfiles/jellyfin/ui
   ```

2. **Mount the Folder in the Container**:
   - In your `docker-compose.yaml` or `docker run` include this `volume` mapping:
     ```sh
     /docker/persistentfiles/jellyfin/ui:/usr/share/jellyfin/web/ui:ro
     ```

3. **Replace the Chunk**:
   - Once Jellyfin is started and the files are mounted, run the following command on your Docker host to replace the `home-html*.chunk.js` file inside the container:
     ```sh
     docker exec jellyfin bash -c "find /usr/share/jellyfin/web -name 'home-html*.chunk.js' -exec cp /config/ui/home-html.chunk.js {} \\;"
     ```
- Tip: If you have code hooks on your docker stack, place this line after `docker-compose up -d`, so even if the image or container cache is wiped out, it will always rebuild.

4) Clear Browser Cache; if it doesn't work instantly, restart the container

</details>

# Docker installation (Manual)
<details> <summary>Show guide</summary>

1) Create the ui Directory (assuming your container is named jellyfin)

```shell
docker exec -u 0 jellyfin mkdir  /jellyfin/jellyfin-web/ui
```

2) Copy your downloaded spotlight.html and List.txt files to the new "ui" folder (don't forget to edit them, as above)

```shell
docker cp spotlight.html jellyfin:/jellyfin/jellyfin-web/ui/
```

3) Add the relevant code line to the home-html.<numbers>.chunk.js file

Since I'm not aware of a way to edit the file directly in the container, I just created the file outside and copied it
back in once I edited it:
    
```shell
docker cp jellyfin:/jellyfin/jellyfin-web/home-html.<numbers>.chunk.js .
```

and then you can add the relevant code line to the file (see step 6 above)

```shell
nano home-html.<numbers>.chunk.js
```

4) Copy the file back to the container

```shell
docker cp home-html.<numbers>.chunk.js jellyfin:/jellyfin/jellyfin-web/
```

5) Clear Browser Cache; if it doesn't work instantly, restart the container

```shell
docker restart jellyfin
```
</details>

# ⚠️ Disabling `X-Frame-Options DENY` in your Reverse Proxy
<details> <summary>Show guide</summary>

When using a reverse proxy like **Nginx** or **Caddy**, the `X-Frame-Options: DENY` header can block iframes, preventing the feature

## Solution

### Nginx

1. Open your site's configuration:
   ```bash
   sudo nano /etc/nginx/sites-available/your-site.conf
    ```
2. Modify or add the following directive:
   - To disable:
        ```bash
         # add_header X-Frame-Options "DENY";
        ```
   - To allow iframes from the same origin:
        ```bash
        add_header X-Frame-Options "SAMEORIGIN";
        ```
3. Restart Nginx:
    ```bash
    sudo systemctl restart nginx
    ```
### Caddy

1. Modify the /etc/caddy/Caddyfile:
    - To disable:
      
        ```bash
        header -X-Frame-Options
        ```
    - To allow:
      
        ```bash
        header X-Frame-Options "SAMEORIGIN"
        ```
            
2. Restart Caddy:
    ```bash
    sudo systemctl restart caddy
    ```

</details>

# Uninstallation

Open ```home-html.RANDOMSTRINGHERE.chunk.js``` and replace everything with this 

```js
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8372],{5939:function(a,e,t){t.r(e),e.default='<div id="indexPage" style="outline:0" data-role="page" data-dom-cache="true" class="page homePage libraryPage allLibraryPage backdropPage pageWithAbsoluteTabs withTabs" data-backdroptype="movie,series,book"> <div class="tabContent pageTabContent" id="homeTab" data-index="0"> <div class="sections"></div> </div> <div class="tabContent pageTabContent" id="favoritesTab" data-index="1"> <div class="sections"></div> </div> </div> '}}]);
```

