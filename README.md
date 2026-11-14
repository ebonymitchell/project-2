# IP Address Tracker

A responsive IP Address Tracker built with React, TypeScript, and Vite. Users can search for an IP address or domain name to retrieve geolocation information and view the corresponding location on an interactive map.

This project is a React and TypeScript rebuild of my original JavaScript-based IP Address Tracker, developed as part of my software development coursework.

## Live Demo

**Live Application:** https://project-2-ip-address-tracker.netlify.app/

**GitHub Repository:** https://github.com/ebonymitchell/project-2

## Features

- Search for an IP address or domain name.
- Retrieve real-time geolocation data using the IPify Geolocation API.
- Display the IP address, city, region, timezone, and internet service provider (ISP).
- Automatically update the interactive map and location marker after a successful search.
- Display loading messages and handle unsuccessful searches.
- Responsive layout for desktop and mobile devices.
- Protect the API key using environment variables and a Netlify serverless function.

## Technologies Used

- **React:** Component-based user interface and state management.
- **TypeScript:** Static typing for components, props, and API responses.
- **Vite:** Development server and production build tool.
- **React Leaflet:** React components for the interactive map.
- **Leaflet:** Map functionality and location markers.
- **OpenStreetMap:** Map tile data.
- **IPify Geolocation API:** IP address and domain geolocation information.
- **Netlify Functions:** Serverless API requests that keep the API key out of client-side code.
- **CSS:** Responsive styling and layout.
- **Git and GitHub:** Version control and source code hosting.
- **Netlify:** Production deployment.

## How It Works

1. The user enters an IP address or domain name into the search field.
2. React stores the input using the `useState` hook.
3. Submitting the form triggers an asynchronous request to a Netlify serverless function.
4. The serverless function sends the request to the IPify Geolocation API using a protected API key.
5. The API returns information about the requested address.
6. React updates the results panel with the returned information.
7. The map automatically recenters on the returned latitude and longitude, and the location marker updates.

## Getting Started

### Prerequisites

- Node.js and npm
- Git
- An IPify Geolocation API key
- Netlify CLI for local serverless function development

### Installation

Clone the repository:

```bash
git clone https://github.com/ebonymitchell/project-2.git
```

Navigate into the project directory:

```bash
cd project-2
```

Install dependencies:

```bash
npm install
```

Install Netlify CLI if needed:

```bash
npm install -g netlify-cli
```

### Environment Variables

Create a `.env` file in the project root:

```env
IPIFY_API_KEY=your_api_key_here
```

Replace `your_api_key_here` with your own IPify Geolocation API key.

The `.env` file is excluded from version control to protect sensitive information. Never commit API keys to a public repository.

### Run Locally

Start the application with Netlify Dev:

```bash
npx netlify dev
```

Open the local URL displayed in the terminal, typically:

http://localhost:8888

Netlify Dev runs the Vite application and the serverless function together.

### Production Build

To create a production build:

```bash
npm run build
```

The compiled application is generated in the `dist` directory.

## Project Structure

```text
project-2/
├── images/
├── netlify/
│   └── functions/
│       └── ip-lookup.cjs
├── src/
│   ├── components/
│   │   └── Map.tsx
│   ├── types/
│   │   └── ipLookup.ts
│   ├── App.tsx
│   └── main.tsx
├── .gitignore
├── index.html
├── netlify.toml
├── package.json
├── package-lock.json
└── styles.css
```

## React and TypeScript Concepts Demonstrated

- Functional React components
- JSX and TSX
- React state management with `useState`
- Side effects with `useEffect`
- Controlled form inputs
- Event handling and form submission
- Conditional rendering
- Asynchronous API requests using `fetch`
- TypeScript interfaces and component props
- Component communication through props
- Error handling and loading states
- Integration with third-party libraries

## Challenges and Lessons Learned

One of my biggest challenges was converting my original JavaScript project to React and TypeScript without changing the design. I wanted to keep the application looking and functioning the way it did before while learning how to organize everything into components. I separated the map into its own component, used React state to manage the search results, and passed the location coordinates through props.

Getting Netlify Functions working with the new project was another challenge. I had some trouble getting my API key to work locally, but I was able to resolve that by setting up a `.env` file. Then, when I deployed the application, the build failed because my serverless function was using CommonJS while the project was configured for ES modules. Renaming the file to `.cjs` fixed that issue.

I also ran into a problem with the location marker not appearing on the deployed map. I had to explicitly import the Leaflet marker images to make sure they were included in the production build.

Overall, this project gave me more hands-on experience with React, TypeScript, API integration, and deployment. I also got more practice reading error messages, troubleshooting problems, and figuring out how the different pieces of an application work together. There were definitely some frustrating moments, but I learned a lot working through them.

## Future Improvements

- Automatically look up the visitor's IP address when the application first loads.
- Add more detailed input validation.
- Improve map positioning for smaller screens.
- Add automated tests for components and API behavior.
- Improve accessibility and keyboard navigation.

## Acknowledgments

- Challenge design provided by [Frontend Mentor](https://www.frontendmentor.io/).
- Geolocation data provided by [IPify](https://geo.ipify.org/).
- Map tiles provided by [OpenStreetMap](https://www.openstreetmap.org/).

## Author

**Ebony Mitchell**

GitHub: https://github.com/ebonymitchell