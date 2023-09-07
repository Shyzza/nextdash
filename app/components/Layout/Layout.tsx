import Head from "next/head";
import SideMenu from "../SideMenu/SideMenu";
import scss from "./Layout.module.scss";
import React from "react";
//import {useSession} from "next-auth/react";

const Layout = (props: any) => {
  //  const {data: session} = useSession();

  return (
    <>
      <Head>
        <title>WinBas - Data Dashboard</title>
        <meta name="description" content="Data Dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={scss.layout}>
        {<SideMenu />}
        {props.children}
      </main>
    </>
  );
};

export default Layout;
