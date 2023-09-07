import { IconButton, Paper, Tooltip, Typography } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { title } from "process";
import React from "react";
import scss from "./DataCard.module.scss";

export type DataCardProps = {
  title: string;
  value: string;
  description: string;
  textColor?: string;
};

const DataCard = (props: DataCardProps) => {
  const {
    title,
    value,
    description = "No description",
    textColor = "white",
  } = props;
  return (
    <Paper className={scss.dataCard}>
      <div className={scss.header}>
        <Typography fontSize={"h6"} color={"lightslategrey"}>
          Total Positions
        </Typography>
        <Typography fontSize={"h6"} color={"white"}>
          {title}
        </Typography>
        <Tooltip
          title={
            <Typography fontSize={16}>
              {description + " which is " + value}
            </Typography>
          }
        >
          <IconButton>
            <InfoOutlinedIcon />
          </IconButton>
        </Tooltip>
      </div>
      <Typography fontSize={36} style={{ color: textColor }}>
        {value}
      </Typography>
    </Paper>
  );
};

export default DataCard;
