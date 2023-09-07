import { months } from "@/app/helper/Util";

export const lineChartData = {
  labels: months({ count: 10 }),
  datasets: [
    {
      label: "NO",
      data: [65, 59],
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      tension: 0.1,
    },

    {
      label: "Retail Offers",
      data: [5, 13, 15, 11, 18, 20, 13, 13, 13, 4],
      fill: false,
      borderColor: "rgb(180, 192, 67)",
      tension: 0.1,
    },
    {
      label: "Retail Orders",
      data: [55, 45, 79, 58, 36, 44, 59, 23, 44, 30],
      fill: false,
      borderColor: "rgb(192, 67, 155)",
      tension: 0.1,
    },
    {
      label: "House Factories",
      data: [4, 3],
      fill: false,
      borderColor: "rgb(35, 191, 230)",
      tension: 0.1,
    },
    {
      label: "Elitfonster Pa Plats",
      data: [48, 37],
      fill: false,
      borderColor: "rgb(192, 67, 67)",
      tension: 0.1,
    },
  ],
};

export const hours_lbl = [
  "8:00",
  "9:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
];
//TODO:dataset is not properly set
export const doughnutChartData = {
  labels: [
    "8:00",
    "9:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
  ],
  datasets: [
    {
      label: "NO",
      data: [30, 50, 20, -20, -89, 45, -20, 5, 42, -50],
      backgroundColor: (ctx: {
        dataIndex: number;
        dataset: { data: number[] };
      }) => {
        const value = ctx.dataset.data[ctx.dataIndex];
        return value >= 0 ? "rgb(9, 255, 0)" : "rgb(165, 7, 42)";
      },
    },
    {
      label: "UK",
      data: [20, 90, -20, 20, 59, 45, -24, 55, 4, 50],
      backgroundColor: (ctx: {
        dataIndex: number;
        dataset: { data: number[] };
      }) => {
        const value = ctx.dataset.data[ctx.dataIndex];
        return value >= 0 ? "rgb(9, 255, 0)" : "rgb(165, 7, 42)";
      },
    },
    {
      label: "UK",
      data: [20, 90, -20, 20, 59, 45, -24, 55, 4, 50],
      backgroundColor: (ctx: {
        dataIndex: number;
        dataset: { data: number[] };
      }) => {
        const value = ctx.dataset.data[ctx.dataIndex];
        return value >= 0 ? "rgb(9, 255, 0)" : "rgb(165, 7, 42)";
      },
    },
    {
      label: "UK",
      data: [45, -24, 55, 4, 50],
      backgroundColor: (ctx: {
        dataIndex: number;
        dataset: { data: number[] };
      }) => {
        const value = ctx.dataset.data[ctx.dataIndex];
        return value >= 0 ? "rgb(9, 255, 0)" : "rgb(165, 7, 42)";
      },
    },
    {
      label: "UK",
      data: [20, 90, -20, 20, 59, 45, -24, 55, 4, 50],
      backgroundColor: (ctx: {
        dataIndex: number;
        dataset: { data: number[] };
      }) => {
        const value = ctx.dataset.data[ctx.dataIndex];
        return value >= 0 ? "rgb(9, 255, 0)" : "rgb(165, 7, 42)";
      },
    },
    {
      label: "UK",
      data: [20, 90, -20, 20],
      backgroundColor: (ctx: {
        dataIndex: number;
        dataset: { data: number[] };
      }) => {
        const value = ctx.dataset.data[ctx.dataIndex];
        return value >= 0 ? "rgb(9, 255, 0)" : "rgb(165, 7, 42)";
      },
    },
  ],
};

export const totalDayData = [
  {
    title: "NO",
    value: "55",
    description: "The total of NO positions in the current day",
    textColor: "red",
  },
  {
    title: "After Sale",
    value: "256",
    description: "The total of After Sale positions in the current day",
    textColor: "green",
  },
  {
    title: "Retail Offers",
    value: "74",
    description: "The total of Retail Offers positions in the current day",
    textColor: "red",
  },
  {
    title: "Retail Orders",
    value: "36",
    description: "The total of Retail Orders positions in the current day",
    textColor: "green",
  },
  {
    title: "House Factories",
    value: "89",
    description: "The total of House Factories positions in the current day",
    textColor: "red",
  },
  {
    title: "Elitfonster Pa Plats",
    value: "81",
    description:
      "The total of Elitfonster Pa Plats positions in the current day",
    textColor: "red",
  },
];
