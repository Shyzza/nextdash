/**
 * @swagger
 * /api/hello:
 *   get:
 *     description: Returns the Hello
 *     responses:
 *       200:
 *         description: Hello!
 */

import { query } from "@/app/database/mysql";
import { user } from "@/app/models/users";

export async function GET(NextApiRequest: Request, NextApiResponse: Response) {
  try {
    const users = await query("SELECT * FROM users");
    const formattedUsers: user[] = users as user[];

    // Return the users data as JSON response
    return new Response(JSON.stringify(formattedUsers), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    // Handle errors here
    console.error("Error:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
