import React from "react";
import Aside from "./Aside";
import MainView from "./MainView";

function Main() {
    return (
        <div className="grid grid-cols-[250px_1fr] overflow-auto">
            <Aside />
            <MainView />
        </div>
    );
}

export default Main;
