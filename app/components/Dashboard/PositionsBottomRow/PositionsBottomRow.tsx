import React, { useEffect, useState } from "react";
import { Grid, Paper } from "@mui/material";
import { useTheme } from "@mui/material/styles"; // Import the useTheme hook
import scss from "./PositionsBottomRow.module.scss";
import { hours_lbl } from "@/app/components/mockData";
import DataChartVert from "@/app/components/DataChartVert";
import { DataCardItem } from "@/app/interfaces/DataCardItem";
import axios from "axios";

const PositionsBottomRow = () => {
  const theme = useTheme(); // Get the current theme

  const [data, setData] = useState<DataCardItem[]>([]);
  const officeIds = [19, 2, 4, 18, 15, 22];
  interface Dataset {
    label: string;
    data: number[];
    backgroundColor: (ctx: {
      dataIndex: number;
      dataset: { data: number[] };
    }) => string;
  }

  // Grouping data by office_ID and creating a map
  const dataMap = new Map<number, DataCardItem[]>();
  data.forEach((data) => {
    if (!dataMap.has(data.office_ID)) {
      dataMap.set(data.office_ID, []);
    }
    dataMap.get(data.office_ID)?.push(data);
  });

  // Creating datasets
  const datasets: Dataset[] = Array.from(dataMap).map(
    ([office_ID, officeData]) => {
      const label = officeData[0].title; // Assuming title is the label
      const data: number[] = [];

      // Initialize data array with 0 for each hour from 8 to 15
      for (let i = 8; i <= 15; i++) {
        data.push(0);
      }

      // Fill data array with values from rawData
      officeData.forEach((dataEntry) => {
        const hour = parseInt(dataEntry.hour.split(":")[0], 10);
        const value = parseInt(dataEntry.positions, 10);
        data[hour - 8] = value;
      });

      const backgroundColor = (ctx: {
        dataIndex: number;
        dataset: { data: number[] };
      }) => {
        const value = ctx.dataset.data[ctx.dataIndex];
        return value >= 0 ? "rgb(9, 255, 0)" : "rgb(165, 7, 42)";
      };

      return { label, data, backgroundColor };
    }
  );

  // console.log(datasets); // Output the transformed datasets

  const fetchData = () => {
    // const url = `http://localhost:3000/api/positions/hour?officeIds=${officeIds}`;
    const url = `http://localhost:3000/api/positions/hour`;

    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    fetchData(); // Fetch data immediately

    const intervalId = setInterval(fetchData, 100000); // Fetch data every 10 seconds

    return () => {
      clearInterval(intervalId); // Clear the interval when component is unmounted
    };
  }, []);

  const numColumns = datasets.length;

  const chartOptions = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        ticks: {
          color: theme.palette.text.primary, // Use the text color from the theme
        },
      },
      y: {
        ticks: {
          color: theme.palette.text.primary,
        },
      },
    },
    // ... other options ...
  };

  return (
    <Grid
      container
      className={scss.bottomRow}
      style={{
        gridTemplateColumns: `repeat(${numColumns}, 1fr)`, // Set the number of columns dynamically
      }}
    >
      {datasets.map((dataset, index) => (
        <Grid key={index}>
          <Paper className={scss.dataCard}>
            <DataChartVert
              type={"bar"}
              data={{
                labels: hours_lbl,
                datasets: [dataset],
              }}
              options={{
                ...chartOptions,
                plugins: {
                  ...chartOptions.plugins,
                  title: {
                    display: true,
                    text: dataset.label,
                    color: theme.palette.text.primary, // Use the text color from the theme
                    font: {
                      size: 20,
                      weight: "bold",
                    },
                  },
                },
              }}
            />
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default PositionsBottomRow;
