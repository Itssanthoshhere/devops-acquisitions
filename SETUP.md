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

Install ESLint and Prettier as dev dependencies:

```bash
npm install eslint @eslint/js prettier eslint-config-prettier -D
```

Install Drizzle and Neon support:

```bash
npm i @neondatabase/serverless drizzle-orm
npm i -D drizzle-orm
```

Install logging and middleware packages:

```bash
npm i winston
npm i cookie-parser cors
npm i cookie-parser helmet
npm i cookie-parser helmet morgan
```

Install authentication and validation packages:

```bash
npm i jsonwebtoken bcrypt zod
```

Install `drizzle-kit` (CLI) as a dev dependency and run common DB tasks with `npx` or the provided npm scripts:

```bash
# install the CLI (optional but recommended)
npm install -D drizzle-kit

# generate a SQL migration from your schema/config
npx drizzle-kit generate

# run pending migrations against the configured database
npx drizzle-kit migrate

# you can also use the npm scripts shipped in this project:
npm run db:generate   # runs `drizzle-kit generate`
npm run db:migrate    # runs `drizzle-kit migrate`
npm run db:studio     # runs `drizzle-kit studio` (if configured)
```

Notes about running Drizzle Kit:

- `drizzle-kit generate` reads your `drizzle.config.js` (default) and writes a SQL migration file under `drizzle/` (for example `drizzle/0000_breezy_iron_lad.sql`).
- `drizzle-kit migrate` runs migrations against the database configured in `drizzle.config.js`. When using the `@neondatabase/serverless` driver you may see a warning that it connects via websocket — this driver can only connect to remote Neon/Vercel Postgres/Supabase instances over websocket connections.
- If you prefer not to install the CLI, use `npx drizzle-kit <command>` which runs the package on demand.

If you already have a project with dependencies, install them as usual:

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

## Code quality

This project includes lint and format scripts for developer workflow:

```bash
npm run lint       # check JavaScript code for ESLint issues
npm run lint:fix   # automatically fix fixable ESLint issues
npm run format     # format code with Prettier
npm run format:check # verify that code is already formatted
```

## Project structure

- `package.json` — npm metadata and scripts
- `src/index.js` — application entrypoint
- `src/server.js` — server startup
- `src/app.js` — Express application setup

## Notes

- This project uses ES modules (`type: "module"`)
- The default route returns a simple greeting message
