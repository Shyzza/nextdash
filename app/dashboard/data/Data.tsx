"use client";
import { DataGrid } from "@mui/x-data-grid";
import LinearProgress from "@mui/material/LinearProgress";
import { user, userHeaders } from "@/app/models/users";
import { useEffect, useState } from "react";

const Data = () => {
  const [userData, setUserData] = useState<user[]>([]);
  const [loading, setLoading] = useState(true);
  const [timer, setTimer] = useState(10); // Initial timer value in seconds

  const fetchData = () => {
    fetch("/api/users")
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData(); // Initial fetch
    const interval = setInterval(() => {
      fetchData(); // Fetch data every 10 seconds
      setTimer(10); // Reset timer to 10 seconds on each fetch
    }, 10000); // 10 seconds in milliseconds

    const countdown = setInterval(() => {
      setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0)); // Decrease timer every second
    }, 1000);

    return () => {
      clearInterval(interval);
      clearInterval(countdown); // Clear the countdown interval when the component unmounts
    };
  }, []);

  const columns = [
    { field: "ID", headerName: userHeaders.id, width: 100 },
    { field: "login", headerName: userHeaders.login, width: 150 },
    { field: "status", headerName: userHeaders.status, width: 120 },
    // Add more columns as needed
  ];

  return (
    <>
      <h1>Data</h1>
      <p>
        The bestest of data available here at your fingertip in table form. This
        could be a whole section of data that is available for users to deep
        dive further into the numbers/stats.
      </p>
      <div>
        <p>Next fetch in: {timer} seconds</p>
      </div>
      <div style={{ height: "700px", width: "100%" }}>
        <DataGrid
          loading={loading}
          columns={columns}
          rows={userData}
          getRowId={(row) => row.ID}
          slots={{
            loadingOverlay: LinearProgress,
          }}
        />
      </div>
    </>
  );
};

export default Data;
