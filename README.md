<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<br />
<div align="center">
  <a href="https://github.com/mpark4656/event-management">
    <img src="https://raw.githubusercontent.com/mpark4656/event-management/main/client/src/assets/images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Event Management App</h3>

  <p align="center">
    A better way to manage events for your organization
    <br />
    <a href="https://github.com/mpark4656/event-management"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://event-management-tsx2.onrender.com">View Demo</a>
    ·
    <a href="https://github.com/mpark4656/event-management/issues">Report Bug</a>
    ·
    <a href="https://github.com/mpark4656/event-management/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

A simple CRUD application to apply my skills in software development. An organization can use this application
to plan and organize events for their staff members. This project is current in development. You can view the
prototype by following this [link](https://event-management-tsx2.onrender.com). Please note that this application
is hosted on Render with a free plan. The application server stays shut down during inactivity. If you are first
accessing this application, it may take a minute to start up.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With
[![MongoDB][MongoDB]][MongoDB-url]
[![Express][Express.js]][Express-url]
[![React][React.js]][React-url]
[![Nodejs][Node.js]][Nodejs-url]
[![Vitejs][Vitejs]][Vitejs-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

The development environment requires [node.js](https://nodejs.org/en).
A local distance of MongoDB can be set up. Alternately, a cloud instance of MongoDB is
available at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register).

### Prerequisites
* Install node.js.
* Set up a MongoDB instance either locally or in the cloud (MongoDB Atlas).
* Create a .env file inside `server` directory. Specify `PORT` (Expressjs). 

### Installation
* Installing dependencies (Execute this from the repository root)
  ```
  npm i && cd server && npm i && cd ../client && npm i
  ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
## Usage
1. Development
   ```
   npm run dev
   ```
2. Production
   ```
   npm run setup-project
   npm run prod
   ```

The [demo site](https://event-management-tsx2.onrender.com) is hosted on [Render](https://render.com/). I am using a free plan, so the application stays shut down during inactivity. It may take a few minutes for the application to start up.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.md` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
## Contact
* Michael Park - mpark4656@gmail.com

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [John Smilga](https://github.com/john-smilga/react-course-v3) for his amazing MERN course

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/mpark4656/event-management.svg?style=for-the-badge
[contributors-url]: https://github.com/mpark4656/event-management/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/mpark4656/event-management.svg?style=for-the-badge
[forks-url]: https://github.com/mpark4656/event-management/network/members
[stars-shield]: https://img.shields.io/github/stars/mpark4656/event-management.svg?style=for-the-badge
[stars-url]: https://github.com/mpark4656/event-management/stargazers
[issues-shield]: https://img.shields.io/github/issues/mpark4656/event-management.svg?style=for-the-badge
[issues-url]: https://github.com/mpark4656/event-management/issues
[license-shield]: https://img.shields.io/github/license/mpark4656/event-management.svg?style=for-the-badge
[license-url]: https://github.com/mpark4656/event-management/blob/master/LICENSE.md
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Express.js]: https://img.shields.io/badge/Express.js-404D59?style=for-the-badge
[Express-url]: https://expressjs.com/
[MongoDB]: https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white
[MongoDB-url]: https://www.mongodb.com/
[Node.js]: https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white
[Nodejs-url]: https://nodejs.org/en
[Vitejs]: https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white
[Vitejs-url]: https://vitejs.dev/