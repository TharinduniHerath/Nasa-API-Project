IT19208572 - Herath H.M.T.S.

# Project Name - React Frontend project using NASA API

The project utilizes React.js along with Tailwind CSS to create a visually appealing and responsive web application. It leverages NASA APIs to fetch and display various types of data, providing users with an immersive experience of exploring space-related information.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Folder Structure](#folder-structure)
- [Dependencies](#dependencies)
- [Scripts](#scripts)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Installation

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org) (version >= 12.0.0)
- npm

1. Clone the repository to your local machine
2. Navigate to the project directory
   cd project
3. Install dependencies using npm
   npm install

## Run

    npm run dev

## Configuration

- REACT_APP_NASA_API_KEY=your-nasa-api-key
- DATABASE_URL

## Folder Structure

The project follows a standard folder structure:

- **/public**: Contains the HTML template and static assets used by the application.
- **/src**: Contains the source code for the application.
  - **/components**: Contains React components used throughout the application.
  - **/pages**: Contains page-level components representing different routes in the application.
  - **/styles**: Contains CSS files and other styling resources.
  - **/utils**: Contains utility functions and helper modules used across the project.
- **/assets**: Contains images, fonts, and other static assets used by the application.
- **/config**: Contains configuration files for tooling and build processes.
- **/tests**: Contains unit tests and integration tests for the application.

## List of Dependencies

"axios": "^1.6.8",
"react": "^18.2.0",
"react-dom": "^18.2.0",
"react-icons": "^5.2.0",
"react-router-dom": "^6.23.0"

## Scripts

"dev": "vite",
"build": "vite build",
"test": "jest",

## Testing

npm test

## Choosen APIs

The project utilizes two NASA APIs to retrieve astronomical data: the Astronomy Picture of the Day (APOD) API and the Mars Rover Photos API. These APIs provide access to a wealth of space-related imagery and information, allowing users to explore the cosmos from their applications.
To access the NASA APIs, an API key need to obtained from the NASA API website.

## Mars Rover Search

## rover camera

- curiosity RHAZ,FHAZ
- opportunity PANCAM, NAVCAM
- spirit NAVCAM, PANCAM

### Endpoint URLs

- APOD API: `https://api.nasa.gov/planetary/apod`
- Mars Rover Photos API: `https://api.nasa.gov/mars-photos/api/v1/rovers`

## Challanges Faced

During the development of this project, several challenges were encountered:

1. API Rate Limits : Integrating with the NASA API, posed challenges due to rate limits.
2. Deployment and Hosting: Deploying the application to production environments and configuring hosting services presented challenges related to environment setup, deployment pipelines, and server configurations.
3. The project relies on several dependencies and tools, each with specific version requirements.
4. Jest, the testing framework used in this project, does not natively support certain file formats such as SVGs, leading to challenges when writing tests for components that include SVG assets.
