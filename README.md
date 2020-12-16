[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/imgjeits/genre-checker">
    <img src="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎶</text></svg>" alt="Logo" width="100" height="80">
  </a>

  <h3 align="center">Genre Checker</h3>

  <p align="center">
    A website using the Spotify Web API to search for artists and then display their genres.
    <br />
    <a href="https://github.com/imgjeits/genre-checker"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/imgjeits/genre-checker">View Demo</a>
    ·
    <a href="https://github.com/imgjeits/genre-checker/issues">Report Bug</a>
    ·
    <a href="https://github.com/imgjeits/genre-checker/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
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
        <li><a href="#installation">Installation</a></li>
        <li><a href="#setup">Setup</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

![Product Name Screen Shot](/images/screenshot.png)

This project was created in a day so I could learn about APIs. You are free to fork and reuse it as you please.

### Built With

-   [HTML](https://github.com/topics/html)
-   [CSS](https://github.com/topics/css)
    -   Skeleton (responsive CSS boilerplate)
    -   Normalize.css (browser reset)
-   [Vanilla JS](https://github.com/topics/javascript)

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

### Installation

1. Navigate to a folder where you would like to store the repo
2. Clone the repo
    ```sh
    git clone https://github.com/imgjeits/genre-checker.git
    ```

### Setup

1. Go to [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/) and log in with your Spotify account.
2. Create an app and copy the client ID and client secret for the app.
3. Change these variables in script.js to your client ID and client secret.
    ```
    const clientID = 'YOUR CLIENT ID HERE'
    const clientSecret = 'YOUR CLIENT SECRET HERE'
    ```
4. Go nuts.

<!-- USAGE EXAMPLES -->

## Usage

The site is pretty straightforward. You search for an artist name, and the site displays up to 20 of the more popular artists from the Spotify API. You can then click on the name or picture of one of these artists, and the site will display the artist along with their genres from Spotify. You can also then click the artist name, which will take you to the artist page on Spotify (web or app, depending on your own settings).

_For more information, please contact me directly._

<!-- CONTRIBUTING -->

## Contributing

You are free to copy and use this as you please. If you find any bugs or issues, I would **really appreciate it** if you either [let me know](https://github.com/imgjeits/genre-checker/issues/new) or you fixed it and created a pull request 😀

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- CONTACT -->

## Contact

Ida - imgjeits@stud.ntnu.no

Project Link: [https://github.com/imgjeits/genre-checker](https://github.com/imgjeits/genre-checker)

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

-   [Spotify Web API](https://developer.spotify.com/documentation/web-api/)
-   [Normalize.css](https://necolas.github.io/normalize.css/)
-   [Skeleton](http://getskeleton.com/)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/imgjeits/repo.svg?style=for-the-badge
[contributors-url]: https://github.com/imgjeits/repo/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/imgjeits/repo.svg?style=for-the-badge
[forks-url]: https://github.com/imgjeits/repo/network/members
[stars-shield]: https://img.shields.io/github/stars/imgjeits/repo.svg?style=for-the-badge
[stars-url]: https://github.com/imgjeits/repo/stargazers
[issues-shield]: https://img.shields.io/github/issues/imgjeits/repo.svg?style=for-the-badge
[issues-url]: https://github.com/imgjeits/repo/issues
[license-shield]: https://img.shields.io/github/license/imgjeits/repo.svg?style=for-the-badge
[license-url]: https://github.com/imgjeits/repo/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/imgjeits
