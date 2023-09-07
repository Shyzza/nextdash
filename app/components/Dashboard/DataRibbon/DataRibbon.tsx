"use client";
import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import DataCard from "../DataCard/DataCard";
import { useTheme } from "@mui/material/styles";
import { DataCardItem } from "@/app/interfaces/DataCardItem";
import axios from "axios"; // Import axios

const DataRibbon = () => {
  const theme = useTheme();
  const [data, setData] = useState<DataCardItem[]>([]);
  const officeIds = [19, 2, 4, 18, 15, 22];

  const fetchData = () => {
    fetch("/api/positions/day")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  };

  useEffect(() => {
    fetchData(); // Fetch data immediately

    const intervalId = setInterval(fetchData, 100000); // Fetch data every 10 seconds

    return () => {
      clearInterval(intervalId); // Clear the interval when component is unmounted
    };
  }, []);

  const numColumns = data.length;
  const fullDayData = data.filter((item) => item.hour === "Full Day");

  // console.log(fullDayData);

  return (
    <Grid
      container
      gap={2}
      style={{
        gridTemplateColumns: `repeat(${numColumns}, 1fr)`,
      }}
    >
      {fullDayData &&
        fullDayData.map((cardData: DataCardItem, index: number) => (
          <Grid key={index}>
            <div className={theme.palette.text.primary}>
              <DataCard
                title={cardData.title}
                value={cardData.positions}
                description={cardData.description}
                textColor={cardData.textColor}
              />
            </div>
          </Grid>
        ))}
    </Grid>
  );
};

export default DataRibbon;
