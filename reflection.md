# Project 2 Reflection — IP Address Tracker

For this assessment, I rebuilt my original IP Address Tracker using React, TypeScript, and Vite. I wanted to keep the original design and functionality while learning how to build the application using React components instead of vanilla JavaScript.

I started by setting up the Vite project and bringing over my existing CSS and images. I created a separate component for the map, added TypeScript interfaces for the API data, and used `useState` to manage the search input, results, loading state, and error messages. I also reused my Netlify serverless function to handle requests to IPify without exposing my API key.

The biggest challenge was getting everything working together, especially when it came time to deploy. At first, my API requests weren't working locally because the API key wasn't available in the development environment. I fixed that by creating a `.env` file. Then my first Netlify deployment failed because the serverless function was using CommonJS syntax while the project was configured for ES modules. Renaming the function file to `.cjs` resolved that issue. I also had to fix the Leaflet marker images so the location pin would display correctly on the live site.

Overall, this project gave me a better understanding of how React components, state, props, and API requests work together. I also got more experience troubleshooting errors and deploying an application. If I had more time, I'd work on making the code more reusable with custom hooks, adding tests, and improving the map layout on smaller screens.