/**
 * @swagger
 * /api/positions/day:
 *   get:
 *     summary: Get Data
 *     description: Returns the data for a specific date.
 *     responses:
 *       200:
 *         description: Data retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   hour:
 *                     type: string
 *                     description: The hour of the data.
 *                   positions:
 *                     type: string
 *                     description: The number of positions.
 *                   title:
 *                     type: string
 *                     description: The title of the data.
 *                   description:
 *                     type: string
 *                     description: The description of the data.
 *                   date:
 *                     type: string
 *                     description: The date of the data.
 *                   office_ID:
 *                     type: integer
 *                     description: The office ID.
 */

import { query } from "@/app/database/mysql";
import { positions } from "@/app/models/positions";

export async function GET(NextApiRequest: Request, NextApiResponse: Response) {
  // const officeIds = req.query.officeIds; // Assuming you pass officeIds as an array in the query parameters

  let officeFilter = ""; // Initialize the filter string
  let startHour; // Initialize the filter string
  let endHour; // Initialize the filter string
  let date = "CURDATE()";

  startHour = 8; // Add the filter only if officeIds are provided
  endHour = 17; // Add the filter only if officeIds are provided

  // if (officeIds && officeIds.length > 0) {
  //   // console.log("Formatted Office IDs:", officeIds); // Log the formattedOfficeIds to the console
  //   // const formattedOfficeIds = officeIds.join(", "); // Convert the array to a comma-separated string
  //   officeFilter = `AND q.office_ID IN (${officeIds})`; // Add the filter only if officeIds are provided
  // }

  // const sqlQuery = `
  //   SELECT office.name AS title, SUM(posNo) AS value
  //   FROM quotation_exec
  //   LEFT JOIN users ON quotation_exec.users_ID = users.ID
  //   LEFT JOIN users_office ON users_office.users_ID = users.ID
  //   LEFT JOIN office ON users_office.office_ID = office.ID
  //   WHERE
  //     DATE(statusDate) = CURDATE()
  //     ${officeFilter}
  //   GROUP BY office.ID;
  // `;
  try {
    const positions = await query(`
  
    
        SELECT
            'Full Day' AS hour,
            SUM(qe.posNO) AS positions,
            o.name AS title,
            CONCAT('The total of ', o.name, ' positions on ', DATE_FORMAT(qe.statusDate, '%Y-%m-%d'), ' for the full day') AS description,
            DATE_FORMAT(qe.statusDate, '%Y-%m-%d') AS date,
            q.office_ID AS office_ID
        FROM
            quotation_exec qe
            LEFT OUTER JOIN quotation q ON qe.quotation_ID = q.ID
            LEFT OUTER JOIN office o ON q.office_ID = o.ID
        WHERE
            qe.statusDate >= ${date}   AND
            qe.statusDate < ${date} + INTERVAL 1 DAY AND
            HOUR(qe.statusDate) >= ${startHour} AND
            HOUR(qe.statusDate) <= ${endHour}
            ${officeFilter}
        GROUP BY
            q.office_ID, DATE_FORMAT(qe.statusDate, '%Y-%m-%d')

    `);
    const formattedPositions: positions[] = positions as positions[];

    // Return the users data as JSON response
    return new Response(JSON.stringify(formattedPositions), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    // Handle errors here
    console.error("Error:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
