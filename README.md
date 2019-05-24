# GraphQL Backend

A generic backend build with Node.js and GraphQL.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development.

### Prerequisites

You need these prerequisites installed and running before starting the application. 

* MongoDB
* Node and npm

#### Set environment variables

You need environment variables set for this application to work. You can find an example file containing all variables
in the root folder, name `.env.example`. You can rename that file to `.env` and save it in the same location. Edit the
properties to match your environment.

### Installing

In the root directory of the project you only need to run

```
npm install
```

### Running in development mode

To start the application in development mode with hot module reloading you run

```
npm run dev
```

## Contributing

Due to having commit linting it can be difficult to know how to write commit messages the first times. Instead of typing
`commit` in the terminal we can use _commitizen_ instead. 

Just type `npx git-cz` in the terminal and an interactive guide will help you. Super simple 🤩
