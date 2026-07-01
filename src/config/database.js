import 'dotenv/config';

import { neon, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

let sqlInstance = null;
let dbInstance = null;

if (process.env.NODE_ENV === 'development') {
  neonConfig.fetchEndpoint = 'http://neon-local:5432/sql';
  neonConfig.useSecureWebSocket = false;
  neonConfig.poolQueryViaFetch = true;
}

const getSql = () => {
  if (!sqlInstance) {
    if (!process.env.DATABASE_URL) {
      throw new Error(
        'No database connection string was provided to `neon()`. Perhaps an environment variable has not been set?'
      );
    }

    sqlInstance = neon(process.env.DATABASE_URL);
  }

  return sqlInstance;
};

const getDb = () => {
  if (!dbInstance) {
    dbInstance = drizzle(getSql());
  }

  return dbInstance;
};

const db = new Proxy(
  {},
  {
    get(_target, prop) {
      return getDb()[prop];
    },
  }
);

export { db, getDb, getSql };
