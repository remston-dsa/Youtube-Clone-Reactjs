# YouTube Clone with React and RapidAPI

Welcome to the YouTube Clone project! This project is a simple YouTube clone built using React and powered by the YouTube Data API through RapidAPI.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Setting Up RapidAPI](#setting-up-rapidapi)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Overview

This YouTube clone project allows users to browse trending videos, search for videos by keyword, and view video details. The application is built using React for the frontend and leverages the power of the YouTube Data API through RapidAPI for fetching video data.

## Features

- Browse trending videos
- Search for videos by keyword
- View video details, including title, channel information, views, and likes

## Technologies Used

- React: A JavaScript library for building user interfaces
- RapidAPI: A platform that allows developers to discover and connect to thousands of APIs
- YouTube Data API: Used to fetch video data from YouTube

## Getting Started


1. **Clone the repository:**
    ```bash
    git clone https://github.com/remston-dsa/project_youtubeclone.git
    ```

2. **Navigate to the project directory:**
    ```bash
    cd project_youtubeclone
    ```

3. **Install dependencies:**
    ```bash
    npm install
    ```

## Setting Up RapidAPI

1. **Create an account on RapidAPI:**
    [RapidAPI](https://rapidapi.com/)

2. **Obtain an API key for the YouTube Data API:**
    [YouTube Data API on RapidAPI](https://rapidapi.com/youtube.videos/api/youtube-videos1)

3. **Create a `.env` file in the project root and add your RapidAPI key:**
    ```env
    REACT_APP_YOUTUBE_API_KEY=your-api-key
    ```

## Project Structure

The project structure follows the standard React project structure:

```markdown
project_youtubeclone/
|-- public/
|-- src/
|   |-- components/
|   |   |-- ChannelCard.js
|   |   |-- Loader.js
|   |   |-- SearchBar.js
|   |   |-- Sidebar.js
|   |   |-- VideoCard.js
|   |   |-- VideoDetail.js
|   |   |-- Videos.js
|   |-- utils/
|   |   |-- fetchFromApi.js
|   |-- App.js
|   |-- index.js
|   |-- ...
|-- .env
|-- .gitignore
|-- package.json
|-- README.md
|-- ...
