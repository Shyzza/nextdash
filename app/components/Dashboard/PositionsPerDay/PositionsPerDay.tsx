import { Card, Grid, Paper, Typography, useTheme } from "@mui/material";
import React from "react";
import scss from "./PositionsPerDay.module.scss";
import DataChart from "@/app/components/DataChart";
import { lineChartData } from "@/app/components/mockData";

export type PositionsPerDayCardType = {
  title: string;
  value: string;
  changeValue: string;
};

const PositionsPerDay = () => {
  const theme = useTheme();

  return (
    <Grid container gap={2} className={scss.wrapper}>
      <Paper className={scss.transactions}>
        <div className={scss.chart}>
          <Typography>Positions per hour</Typography>
          <DataChart type={"line"} data={lineChartData} />
        </div>
        <div className={scss.cardWrapper}>
          <Card className={scss.card} variant={"outlined"}>
            <div>
              <Typography className={scss.cardTitle}>NO</Typography>
              <Typography className={scss.cardAvr}>Avg./Hour</Typography>
            </div>

            <div>
              <Typography
                color={theme.palette.success.main}
                className={scss.cardValue}
              >
                5
              </Typography>
            </div>
          </Card>
          <Card className={scss.card} variant={"outlined"}>
            <div>
              <Typography className={scss.cardTitle}>After Sale</Typography>
              <Typography className={scss.cardAvr}>Avg./Hour</Typography>
            </div>

            <div>
              <Typography color={"red"} className={scss.cardValue}>
                9
              </Typography>
            </div>
          </Card>
          <Card className={scss.card} variant={"outlined"}>
            <div>
              <Typography className={scss.cardTitle}>Retail Offers</Typography>
              <Typography className={scss.cardAvr}>Avg./Hour</Typography>
            </div>

            <div>
              <Typography color={"red"} className={scss.cardValue}>
                15
              </Typography>
            </div>
          </Card>
          <Card className={scss.card} variant={"outlined"}>
            <div>
              <Typography className={scss.cardTitle}>Retail Orders</Typography>
              <Typography className={scss.cardAvr}>Avg./Hour</Typography>
            </div>

            <div>
              <Typography
                color={theme.palette.success.main}
                className={scss.cardValue}
              >
                40
              </Typography>
            </div>
          </Card>
          <Card className={scss.card} variant={"outlined"}>
            <div>
              <Typography className={scss.cardTitle}>
                House Factories
              </Typography>
              <Typography className={scss.cardAvr}>Avg./Hour</Typography>
            </div>

            <div>
              <Typography
                className={scss.cardValue}
                color={theme.palette.success.main}
              >
                36
              </Typography>
            </div>
          </Card>
          <Card className={scss.card} variant={"outlined"}>
            <div>
              <Typography className={scss.cardTitle}>
                Elitfonster Pa Plats
              </Typography>
              <Typography className={scss.cardAvr}>Avg./Hour</Typography>
            </div>

            <div>
              <Typography color={"red"} className={scss.cardValue}>
                25
              </Typography>
            </div>
          </Card>
        </div>
      </Paper>
    </Grid>
  );
};

export default PositionsPerDay;
