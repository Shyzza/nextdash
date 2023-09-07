export interface user {
  ID: number;
  login: string;
  password: string;
  status: string;
}

export const userHeaders = {
  id: "ID",
  login: "Login",
  password: "Password", // Example header name for password (adjust as needed)
  status: "Status",
};
