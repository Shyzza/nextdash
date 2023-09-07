import Dashboard from "@/app/dashboard/Dashboard";
import scss from "./Home.module.scss";
import React from "react";

const Home: React.FC = () => {
  //const {data: session} = useSession();

  return (
    <>
      <main className={scss.main}>
        <Dashboard />
        {/* {session && <Dashboard/>} */}
        {/* {!session && <login/>} */}
      </main>
    </>
  );
};

export default Home;
