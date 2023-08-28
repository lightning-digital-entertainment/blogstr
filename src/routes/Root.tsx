import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components";

function Root() {
    return (
        <div className="absolute inset-0 flex flex-col items-center">
            <Navbar />
            <Outlet />
        </div>
    );
}

export default Root;
