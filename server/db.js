import knex from "knex";

export const db = knex({
    client: "better-sqlite3",
    connection: {
        filename: "./data/db.sqlite3",
    },
    useNullAsDefault: true,
});
db.on("query", ({ sql, bindings }) => {
    console.log(sql, bindings);
});
