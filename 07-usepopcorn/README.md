# Movie Browsing Application Documentation

This is a simple movie browsing application developed in React. The application provides a list of movies and a list of watched movies with their average ratings and runtimes. It utilizes React Hooks for managing state and rendering several reusable components for displaying the UI.

## Modules

- `React` - A JavaScript library for building user interfaces.
- `useState` - A Hook in React that allows you to add state to your function components.

## Data

There are two static lists, `tempMovieData` and `tempWatchedData`, representing a list of movies and a list of watched movies, respectively. These lists are used to initialize the state of the application.

## State Variables

- `movies` - A state variable that holds the list of movies. It is initialized with `tempMovieData`.
- `watched` - A state variable that holds the list of watched movies. It is initialized with `tempWatchedData`.
- `query` - A state variable in the `Search` component used to store the search query.
- `isOpen` - A state variable in the `Box` component used to toggle the visibility of its children.

## Components

- `App` - The root application component. It renders the NavBar and Main components.
- `NavBar` - A navigation bar component that includes the `Logo` and `Search` components.
- `Logo` - A simple logo component for the application.
- `Search` - A search bar component that allows users to enter their search queries.
- `NumResults` - A component that displays the total number of movies found.
- `Main` - A component that wraps the main content of the application.
- `Box` - A collapsible/expandable box component that includes a toggle button. The visibility of its children is controlled by the `isOpen` state variable.
- `MovieList` - A component that displays a list of movies.
- `Movie` - A component that displays the details of a single movie.
- `WatchedSummary` - A component that displays the summary of the watched movies. It includes the number of movies watched, average IMDb rating, average user rating, and average runtime.
- `WatchedMovieList` - A component that displays a list of watched movies.
- `WatchedMovies` - A component that displays the details of a single watched movie.

## Functions

- `average` - A helper function that calculates the average of an array of numbers.

## CSS Classes

The application utilizes the following CSS classes:

- `.nav-bar` - Applied to the NavBar component.
- `.logo` - Applied to the Logo component.
- `.search` - Applied to the Search component.
- `.num-results` - Applied to the NumResults component.
- `.main` - Applied to the Main component.
- `.box` - Applied to the Box component.
- `.btn-toggle` - Applied to the toggle button in the Box component.
- `.list` - Applied to the lists in the MovieList and WatchedMovieList components.
- `.summary` - Applied to the WatchedSummary component.
