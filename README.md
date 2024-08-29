# City Explorer

## Overview

City Explorer is a React application that allows users to search for cities and view their locations on a map. The application integrates Leaflet for map visualization, Material-UI (MUI) for UI components, Tailwind CSS for styling, and uses TanStack Query for data fetching and Zustand for state management.

### Features

- Search for Cities: Enter a city name to search and view its location on a map.
- Map Visualization: Displays the city on a map with zoom controls and marker.
- City Information: Shows basic information about the city, including its name, country, and population.
- Recent Searches: Keeps track of the last 10 searches and displays them in a list.
- Responsive Design: Works seamlessly on both desktop and mobile devices.

### Technologies Used

- React: JavaScript library for building user interfaces.
- Leaflet: Library for interactive maps.
- Material-UI (MUI): React component library for styling and UI - components.
- Tailwind CSS: Utility-first CSS framework for styling.
- Vite: Build tool for modern web projects.
- TypeScript: Superset of JavaScript for type safety.
- TanStack Query: Data fetching and caching library.
- Zustand: State management library for React.
- Getting Started

## Prerequisites

Node.js and npm installed on your machine.

## Configuration

### API Key:

You will need an API key for the OpenCage Geocoding API. Sign up at OpenCage Geocoding to get your API key and replace the placeholder in the cityApi.ts file.

### Environment Variables:

Create a .env file in the root directory and add your API key:
VITE_OPENCAGE_API_KEY=your_api_key_here

## State Management

The application uses Zustand to manage the state of recent searches. The state store is located in src/store/cityStore.ts.

## Data Fetching

TanStack Query is used to fetch city data from the OpenCage Geocoding API. The API call is handled in src/utils/api/cityApi.ts.

## Styling

The application uses Tailwind CSS for utility-based styling and MUI for component styling. Ensure Tailwind CSS is configured correctly in tailwind.config.js.
