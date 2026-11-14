import pg from "pg";

const { Pool } = pg;

const createDbPool = () => {
    return new Pool({ connectionString: process.env.DATABASE_URL });
};

export const pool = createDbPool();
