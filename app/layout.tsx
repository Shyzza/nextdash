"use client";
import "./globals.css";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import React from "react";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import darkTheme from "@/app/theme/darkTheme";
import lightTheme from "@/app/theme/lightTheme";
import Header from "@/app/components/Header";
import Layout from "@/app/components/Layout";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mode, setMode] = React.useState<"light" | "dark">("dark");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );
  const darkThemeChosen = React.useMemo(
    () =>
      createTheme({
        ...darkTheme,
      }),
    []
  );
  const lightThemeChosen = React.useMemo(
    () =>
      createTheme({
        ...lightTheme,
      }),
    []
  );

  return (
    <html lang="en">
      <body className={inter.className}>
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider
            theme={mode === "dark" ? darkThemeChosen : lightThemeChosen}
          >
            <Header ColorModeContex={ColorModeContext} />
            <Layout>{children}</Layout>
          </ThemeProvider>
        </ColorModeContext.Provider>
      </body>
    </html>
  );
}
