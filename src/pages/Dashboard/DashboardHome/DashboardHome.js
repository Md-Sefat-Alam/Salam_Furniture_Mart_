import React from "react";
import { Link, Outlet } from "react-router-dom";

const DashboardHome = () => {
  return (
    <div style={{ minHeight: "50vh" }}>
      <nav>
        <Link to={"link1"}>link1</Link>
        <Link to={"link2"}>link2</Link>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardHome;
