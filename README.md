<a id="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/everis-dex/chazz">
    <img src="./public/assets/Chazz_Logo.svg" alt="Logo" height="40">
  </a>

<h3 align="center"><strong>Chazz</strong></h3>

  <p align="center">
    Redesign of Chazz website
    <br />
    <a href="https://github.com/everis-dex/chazz"><strong>Explore repository »</strong></a>
    <br />
    <br />
  </p>
</div>

[![Netlify Status](https://api.netlify.com/api/v1/badges/326cff08-eb5a-4366-8976-6e714c3bab57/deploy-status)](https://app.netlify.com/sites/chazz-design/deploys)

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#package-scripts">Package scripts</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li>
      <a href="#how-it-works">How does it work</a>
      <ul>
        <li><a href="#NetlifyCMS-config">Netlify CMS configuration</a></li>
        <li><a href="#data-management">Data management (main.ts file)</a></li>
      </ul>
    </li>
  </ol>
</details>

<br>

<!-- ABOUT THE PROJECT -->
<div id="about-the-project"></div>

## 📌 About The Project

<!-- [![Product Name Screen Shot][product-screenshot]](https://example.com) -->

This is a project made for the improvement of the `Chazz` website, an NTT Data Company. The design, frontend and data management are changed for a better looking.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

<div align="center">

[![React][react.js]][react-url]
[![Netlify][netlify.com]][netlify-url]

</div>

- **React** is used as a frontend framework
- **Netlify** is used as CMS and to deploy the web application

<br>

<div id="package-scripts"></div>

### Package scripts

Scripts that can be ran using `npm run _command_`.

- _start:_ execute the application and run in `http://localhost:3000/`
  ```
  react-scripts start
  ```
- _prettier:_ format the files inside `src/` folder with the configuration set in `.prettierrc.json`
  ```
  npx prettier --write ./src
  ```
- _server:_ transpile the `main.ts` file to javascript, execute the generated `main.js` and format files
  ```
  tsc public/main.ts && node public/main.js && npm run prettier
  ```
- _min-server:_ execute `main.js` and format files
  ```
  node public/main.js && npm run prettier
  ```
- _build:_ transpile the `main.ts` file to javascript, execute the generated `main.js`, format files and do the build.
  ```
  npm run server && react-scripts build
  ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
<div id="getting-started"></div>

## 🌱 Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

Some utils need to be installed in order to use the software. This is how to install them.

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/everis-dex/chazz.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Run the project
   ```sh
   npm start
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- How does it work -->
<div id="how-it-works"></div>

## 🔬 How does it work

All useful information for developers is explained here.

<div id="NetlifyCMS-config"></div>

### Netlify CMS configuration

Netlify CMS stores all the content inside the repository, so no database is required. The configuration for it is located in `public/admin/` with:

- `index.html`: the display of Netlify CMS and [Netlify Identity](https://docs.netlify.com/visitor-access/identity/)
- and `config.yml` for the actual CMS.

The content required for this webpage is divided into 2 types:

- **Pages**: cannot be created or deleted, only modified. Corresponds to the supages the app has.
- **Components**: are totally reusable and CRUD operations can be made. Corresponds to all elements repeated throughout the app that have the same structure.

With that, the content generated in the CMS is saved into two separated folders.

- `src/content/pages/` for the pages with one subfolder per page. Each file is generated as `.json`.
- `content/` folder for components with one subfolder per collection. Each file is generated as `.md`.

<br>

> Note: it is important that there is one folder per collection (either page or component) so that the content of the entries (files) does not get mixed up.

<br>

<div id="data-management"></div>

### Data management (main.ts file)

Pages are automatically read as they are generated because they are created as [JSON](https://www.json.org/json-es.html) inside `content/pages/` folder. So they are imported and used in the required React components as the default.

For components, because they come in `.md` files and it is necessary to group the content in a single file, the `main.ts` file has been created. This files does the following:

1. Reads all subfolders inside `content/` (matching CMS collections).
2. For each subfolder, reads the content of the files inside it (CMS entries).
3. Parses the content from `.md` to object properties based on the collection (folder).
4. Creates an id for each object.
5. Sorts all object extracted from all files by the generated id.
6. Creates a `.json` file with all the sorted objects (component data) and stores it in `src/content/` so that it can be imported in the app.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
"body": "<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[product-screenshot]: images/screenshot.png
[react.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://reactjs.org/
[netlify-url]: https://www.netlify.com/
[netlify.com]: https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white
