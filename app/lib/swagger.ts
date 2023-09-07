///app/lib/swagger
import { createSwaggerSpec } from "next-swagger-doc";

export const getApiDocs = async () => {
  try {
    const spec = createSwaggerSpec({
      apiFolder: "app/api",
      definition: {
        openapi: "3.0.0",
        info: {
          title: "WinBas API Documentation",
          version: "1.0",
        },
        security: [],
      },
    });
    return spec;
  } catch (error) {
    console.error("Error generating Swagger spec:", error);
    throw error; // Rethrow the error to handle it elsewhere if needed.
  }
};
