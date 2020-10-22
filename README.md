# Personal Website

Source code for the live version of my personal website. Contains a bio, technologies I work with, and links to LinkedIn, GitHub, and my PhD Thesis.

Utilizes JavaScript to control some neat animations and elements of the page.

Responsive design adjusts for functionality across devices.
<br><br>

## URL

<https://www.kristinabrantley.com> <br><br>  

## Requirements

---

- JavaScript
- Node.js
- npm
<br><br> 

## Setup & Usage

---

1. Make sure you have the requirements installed.

2. From the root directory (where package.json file is), run:

    > `npm install`

3. You can run a live development server using:

    > `npm start`

4. Edit files appropriately. Specifically, be sure to change/remove:

    - LinkedIn url (appears in the navigation and the social-bar located in the header)
    - GitHub url (appears in the navigation, social-bar, and 'About Me' text)
    - PhD Thesis url (appears in the navigation and 'About Me' section)
    - Photo in 'About Me' section (img/about.jpg)

5. When ready to build production code, generate 'dist' folder and contents by running:

    > `npm run build`

6. Upload to your domain (or host however you host your stuff).

7. Send the link to everyone you know. 
<br><br> 

## Notes

---

- The header image is found on [Pexels](https://www.pexels.com/), a great site for free stock images.

- Icons in the sprite file (img/sprite.svg) are found on [Icomoon](https://icomoon.io/app/#/select/library).

- Favicon is from [Flaticon](https://www.flaticon.com/) - please note attribution in the footer.

- Syntax highlighting of the code snippets (appearing on hover in the 'Used on this page' section) is done via the [highlight.js](https://highlightjs.org/) package.
<br><br>

## Files & Directories

---

    📦kristinabrantley
    ┣ 📂src
    ┃ ┣ 📂img
    ┃ ┃ ┣ 📜about.jpg               // Personal image - must be replaced by your own
    ┃ ┃ ┣ 📜favicon.png             // Favicon image
    ┃ ┃ ┣ 📜hero.jpg                // Header background image
    ┃ ┃ ┗ 📜sprite.svg              // Icons
    ┃ ┣ 📂js
    ┃ ┃ ┣ 📂modules
    ┃ ┃ ┃ ┣ 📜dom-elements.js       // DOM elements controlled by scripts
    ┃ ┃ ┃ ┣ 📜navigation.js         // Controls navigation menu behavior
    ┃ ┃ ┃ ┣ 📜observer.js           // Controls animations of section elements as they enter the viewport
    ┃ ┃ ┃ ┗ 📜scroll.js             // Controls scroll-to-top button
    ┃ ┃ ┣ 📜index.js                // Main scripts
    ┃ ┃ ┗ 📜vendor.js               // Initiates syntax highlighting of the code snippets
    ┃ ┣ 📂sass
    ┃ ┃ ┣ 📂abstracts
    ┃ ┃ ┃ ┣ 📜_mixins.scss          // Reusable styles and media query manager
    ┃ ┃ ┃ ┗ 📜_variables.scss       // Colors, fonts, shadows, etc.
    ┃ ┃ ┣ 📂base
    ┃ ┃ ┃ ┣ 📜_animations.scss      // All CSS animations
    ┃ ┃ ┃ ┣ 📜_base.scss            // General html, body styles
    ┃ ┃ ┃ ┣ 📜_typography.scss      // Body and heading typography styles
    ┃ ┃ ┃ ┗ 📜_utilities.scss       // Useful utility class styles
    ┃ ┃ ┣ 📂components
    ┃ ┃ ┃ ┣ 📜_about.scss           // 'About Me' styles
    ┃ ┃ ┃ ┣ 📜_scroll-btn.scss      // Scroll-to-top button styles
    ┃ ┃ ┃ ┣ 📜_social.scss          // Social bar (located in the header) styles
    ┃ ┃ ┃ ┗ 📜_tech-box.scss        // 'Used on this page' and 'Other stuff I work with' styles
    ┃ ┃ ┣ 📂layout
    ┃ ┃ ┃ ┣ 📜_footer.scss          // Footer styles
    ┃ ┃ ┃ ┣ 📜_header.scss          // Header styles
    ┃ ┃ ┃ ┗ 📜_navigation.scss      // Navigation menu styles
    ┃ ┃ ┣ 📂pages
    ┃ ┃ ┃ ┗ 📜_home.scss            // Styles for main sections
    ┃ ┃ ┣ 📂vendors
    ┃ ┃ ┃ ┗ 📜_highlight.scss       // Styles for code snippet syntax highlighting - slightly modified by me
    ┃ ┃ ┗ 📜main.scss               // Imports of all partial .scss files
    ┃ ┗ 📜template.html             // All of the html required - edit text content here
    ┣ 📜.gitignore
    ┣ 📜LICENSE.txt
    ┣ 📜package-lock.json
    ┣ 📜package.json                // Dependencies
    ┣ 📜postcss.config.js           // Requires autoprefixer to prefix css properties
    ┣ 📜README.md
    ┣ 📜webpack.common.js           // Webpack configurations common to development and production modes
    ┣ 📜webpack.dev.js              // Webpack configurations for development
    ┗ 📜webpack.prod.js             // Webpack configurations for production
<br>            

## Licensing

---

Please respect that the content (text, about.jpg) is Copyright Kristina Brantley. Design and implementation elements are free for appropriate use under the MIT License (see [LICENSE.txt](LICENSE.txt)).

Public attribution is not required via the license, but if you use my code, it would be super rad to credit me for all this hard work. A simple link to this repository in your footer would suffice.





