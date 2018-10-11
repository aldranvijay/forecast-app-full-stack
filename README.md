# forecast-app-full-stack

Demo application URL : http://18.224.169.196:8080/ Note: In case of server down, please mail me ald.ranvijay@gmail.com

## Introduction

This is "Weather Forecast App" and also a boilerplate to build a full stack web application using React, Node.js, Express and Webpack. It is also configured with webpack-dev-server, eslint, and babel. For unit testing- Mocha, Enzyme & Expect is used.

### Development mode

In the development mode, we will have 2 servers running. The front end code will be served by the [webpack dev server](https://webpack.js.org/configuration/dev-server/) which helps with hot and live reloading. The server side Express code will be served by a node server using [nodemon](https://nodemon.io/) which helps in automatically restarting the server whenever server side code changes.

### Production mode

In the production mode, we will have only 1 server running. All the client side code will be bundled into static files using webpack and it will be served by the Node.js/Express application.

## Quick Start

```bash
# Clone the repository
git clone https://github.com/aldranvijay/forecast-app-full-stack.git

# Go inside the directory
cd forecast-app-full-stack

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Test
npm test

# Start production server
npm start
