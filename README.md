<div align="center">

  <br />

  ### Cinephile/Cineseek : Discover Your Next Favorite Movie
  # A Movie Finding App with Extensive Search
</div>

## <a name="table">Table of Contents</a>

1. [Introduction](#introduction)

2. [Tech Stack](#tech-stack)

3. [Features](#features)

4. [Quick Start](#quick-start)

## <a name="introduction">Introduction</a>

Built with Expo, TypeScript, and Tailwind CSS, this app fetches movies and creates a popularity algorithm using Appwrite. It provides users with a seamless browsing experience, ranking movies based on various engagement metrics. The app leverages modern UI/UX principles for a responsive and visually appealing interface, ensuring real-world scalability and performance.


## <a name="tech-stack">Tech Stack</a>

- Expo

- React Native

- Appwrite

- TypeScript

- Tailwind CSS

## <a name="features">Features</a>

### Features of the Movie Finder App Project

**Real-time data**: Fetching and displaying real-time movie data

**Home Page**: Featured and discover movies

**Search Page**: Search for your favorite movies

**Popularity algorithm**: Track user searches to display the most popular movies and many more, including code architecture and reusability.

## <a name="quick-start">Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)

- [Node.js](https://nodejs.org/en)

- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash

git clone https://github.com/SahilSuman1011/movie-finder.git

cd movie

```

**Installation**

Install the project dependencies using npm:

```bash

npm install

```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env

EXPO_PUBLIC_MOVIE_API_KEY=

EXPO_PUBLIC_APPWRITE_PROJECT_ID=

EXPO_PUBLIC_APPWRITE_DATABASE_ID=

EXPO_PUBLIC_APPWRITE_COLLECTION_ID=



```

Replace the placeholder values with your actual TMDB API key, Appwrite project ID, Database ID, and Collection ID. You can obtain these credentials by signing up on the [Appwrite](https://cloud.appwrite.io/console/login), [TMDB](https://www.themoviedb.org/login).

**Running the Project**

```bash

npx expo start

```

Open your ExpoGO app on your phone and scan the QR code to view the project.
