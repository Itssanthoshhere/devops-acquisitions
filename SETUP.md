# Project Setup

## Prerequisites

- Node.js (v18 or later recommended)
- npm

## Install dependencies

If the project is not already initialized, run:

```bash
cd /Users/sandy/Developer/Projects/devops-acquisitions
npm init -y
npm install express dotenv
```

Then install dependencies for an existing project:

```bash
npm install
```

## Environment

Create a `.env` file in the project root if you want to customize the port:

```bash
PORT=3000
```

## Run the app

```bash
npm run dev
```

The app will start using `src/index.js` and listen on the value of `PORT` if set, or fallback to `3000`.

Open your browser at:

```text
http://localhost:3000
```

## Project structure

- `package.json` — npm metadata and scripts
- `src/index.js` — application entrypoint
- `src/server.js` — server startup
- `src/app.js` — Express application setup

## Notes

- This project uses ES modules (`type: "module"`)
- The default route returns a simple greeting message
