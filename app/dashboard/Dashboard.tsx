import React from "react";
import { Box, Grid, Paper } from "@mui/material";
import scss from "./Dashboard.module.scss";
import DataRibbon from "@/app/components/Dashboard/DataRibbon/DataRibbon";
import PositionsPerDay from "@/app/components/Dashboard/PositionsPerDay/PositionsPerDay";
import PositionsBottomRow from "@/app/components/Dashboard/PositionsBottomRow/PositionsBottomRow";

const Dashboard = () => {
  return (
    <Box>
      {" "}
      {/* Set the height of the Box to 100% */}
      <Grid container gap={4} marginTop={2}>
        {" "}
        {/* Set the height of the container to 100vh */}
        {/* <DataRibbon /> */}
        {/* <PositionsPerDay /> */}
        {/* <PositionsBottomRow /> */}
      </Grid>
    </Box>
  );
};

export default Dashboard;
