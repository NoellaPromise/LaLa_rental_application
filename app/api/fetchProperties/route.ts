import { Pool } from "pg";

// PostgreSQL connection configuration
const pool = new Pool({
  user: "postgres", // Replace with your PostgreSQL username
  host: "localhost", // Replace with your database host
  database: "LalaDB", // Replace with your database name
  password: "promise1", // Replace with your PostgreSQL password
  port: 5432, // Default PostgreSQL port
});

export default async function handler(
  req: { method: string },
  res: {
    status: (arg0: number) => {
      (): any;
      new (): any;
      json: { (arg0: any[]): void; new (): any };
    };
  }
) {
  if (req.method === "GET") {
    try {
      // Query the database
      const { rows } = await pool.query("SELECT * FROM properties");

      // Return the data as JSON
      res.status(200).json(rows);
    } catch (error) {
      console.error("Error fetching properties:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
