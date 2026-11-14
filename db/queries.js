import { pool } from "./pool.js";

const createQueries = (dbPool) => {
    const getAllMessages = async () => {
        const { rows } = await dbPool.query(
            "SELECT * FROM messages ORDER BY added DESC",
        );
        return rows;
    };

    const insertMessage = async (author, text) => {
        await dbPool.query(
            "INSERT INTO messages (author, text) VALUES ($1, $2)",
            [author, text],
        );
    };

    const getMessageById = async (id) => {
        const { rows } = await dbPool.query(
            "SELECT * FROM messages WHERE id = $1",
            [id],
        );
        return rows[0];
    };

    return {
        getAllMessages,
        insertMessage,
        getMessageById,
    };
};

export const db = createQueries(pool);
