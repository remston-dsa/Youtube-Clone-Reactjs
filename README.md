# YouTube Clone

## Overview

This project is a YouTube clone built using ReactJS, RapidAPI, and Material UI. It allows users to browse videos, search for channels, and view video details.

## Features

- Video browsing
- Channel search
- Responsive design
- Loader for asynchronous operations

## Technologies Used

- ReactJS
- RapidAPI (YouTube Data API v3)
- Material UI

## Getting Started

### Prerequisites

- Node.js installed
- RapidAPI Key (from [YouTube Data API v3](https://rapidapi.com/ytdlfree/api/youtube-v31))

### Installation

1. Clone the repository: `git clone https://github.com/remston-dsa/project_youtubeclone.git`
2. Install dependencies: `npm install`

### Setting Up RapidAPI

1. Obtain a RapidAPI Key from [YouTube Data API v3](https://rapidapi.com/ytdlfree/api/youtube-v31).
2. Set your RapidAPI Key in `fetchFromApi.js` in the `utils` folder.

## Project Structure

```plaintext
project_youtubeclone/
|-- src/
|   |-- App.css
|   |-- App.js
|   |-- components/
|   |   |-- ChannelCard.jsx
|   |   |-- ChannelDetail.jsx
|   |   |-- Feed.jsx
|   |   |-- index.js
|   |   |-- Loader.jsx
|   |   |-- Navbar.jsx
|   |   |-- SearchBar.jsx
|   |   |-- SearchFeed.jsx
|   |   |-- Sidebar.jsx
|   |   |-- VideoCard.jsx
|   |   |-- VideoDetail.jsx
|   |   |-- Videos.jsx
|   |-- index.css
|   |-- index.js
|   |-- utils/
|       |-- constants.js
|       |-- fetchFromApi.js
|-- .gitignore
|-- README.md
|-- package.json
|-- ...
```

## Usage
1. Browse trending videos on the homepage.
2. Use the search bar to search for videos by keyword.
3. Click on a video thumbnail to view its details.
4. Explore different features and functionalities of the application.


## License
- This project is licensed under the MIT License.

## Acknowledgments
Thanks to RapidAPI for providing access to the YouTube Data API and JS Mastery youtube channel.
