## Main dependencies

-   Three.js
-   React Three Fiber
-   TypeScript
-   Styled Components
-   Webpack
-   Babel
-   Prettier config

## Setup

    npm i

## Development

    npm start

Runs a development server at `localhost:8080`. The server is also accessible to other devices who are connected to the same network.

The address of the server on your local network depends on the IP of your machine but the port is the same as the `localhost` one. To get the address of the development server on your local network:

    npm run network-info

Entry point of the application is located at `./src/index.ts`. This file must use the TypeScript extension `.ts`. However, other files imported in `index.ts` can be either TypeScript files or JavaScript files with extension `.js`.

## Build/Deployment

Bump the version of your application.

    npm version patch

This command will run your tests, create a production build at the root of your project, commit and push it.

## Structure

    src
    ├── index.tsx
    ├── index.html

## Source

https://codesandbox.io/s/house-react-three-fiber-86tzx?file=/src/styles.css:0-224
