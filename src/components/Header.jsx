import React from "react";
import Rectangle from "../images/Rectangle 531.png";
import SearchIcon from "../images/icon-search.png";
import Night from "../images/Night.png";
import toggleTheme from "../images/Vector.png";
import Day from "../images/Day.png";
import Notifications from "../images/Notifications.png";
import Settings from "../images/Settings.png";
import AFEXLogo from "../images/AFEX-logo.png";

function Header() {
    return (
        <header className="flex justify-between items-center py-[23px] pl-[27px] pr-[39px]">
            <div className="flex items-center">
                <img src={Rectangle} alt="workbench logo" />
                <div className="flex items-center gap-[10px]">
                    <div className="flex flex-col justify-between whitespace-nowrap">
                        <small>
                            <strong>Pages</strong>{" "}
                            <span className="text-[#C9C8C6]">
                                / Plant Work-In-Progress
                            </span>
                        </small>
                        <h2 className="text-[24px]">Plant WIP</h2>
                    </div>
                    <div className="w-[360px] px-[20px] py-[17px] rounded-[15px] flex justify-between items-center border border-solid border-[EBEBEB] bg-[#F9F9F9]">
                        <input
                            type="search"
                            className="bg-[transparent]"
                            placeholder="Search"
                            id=""
                        />
                        <img src={SearchIcon} alt="" />
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-[43px]">
                <div className="flex items-center gap-[10px]">
                    <img src={Night} alt="" />
                    <img src={toggleTheme} alt="" />
                    <img src={Day} className="mt-[-13px]" alt="" />
                </div>
                <img src={Notifications} alt="" />
                <img src={Settings} alt="" />
                <img src={AFEXLogo} alt="" />
            </div>
        </header>
    );
}

export default Header;
