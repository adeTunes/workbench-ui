import React from "react";
import Arrow from "../images/arrow.svg";

function MainView() {
    return (
        <main className="px-[36px] py-[58px] grid overflow-auto grid-rows-[auto_1fr] gap-[34px]">
            <nav className="border-b border-solid border-[#C9C8C6]">
                <ul className="flex items-center gap-[45px]">
                    <li className="flex flex-col gap-[8px] items-center">
                        <span className="flex gap-[5px] items-center text-[#38CB89]">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="21"
                                viewBox="0 0 20 21"
                                fill="none">
                                <path
                                    d="M8.74163 2.35833L4.58331 3.91666C3.62497 4.275 2.84164 5.40833 2.84164 6.43333V12.625C2.84164 13.6083 3.49165 14.9 4.28332 15.4917L7.86664 18.1667C9.04164 19.05 10.975 19.05 12.15 18.1667L15.7333 15.4917C16.525 14.9 17.175 13.6083 17.175 12.625V6.43333C17.175 5.40833 16.3916 4.275 15.4333 3.91666L11.275 2.35833C10.5666 2.1 9.4333 2.1 8.74163 2.35833Z"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M10 13.4167C11.841 13.4167 13.3333 11.9243 13.3333 10.0833C13.3333 8.24238 11.841 6.75 10 6.75C8.15906 6.75 6.66667 8.24238 6.66667 10.0833C6.66667 11.9243 8.15906 13.4167 10 13.4167Z"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-miterlimit="10"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M10.2083 9.04166V9.81666C10.2083 10.1083 10.0583 10.3833 9.80001 10.5333L9.16667 10.9167"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-miterlimit="10"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                            Pending Requests
                        </span>
                        <span className="w-[40px] border rounded-[30px] border-solid border-[#38CB89]"></span>
                    </li>
                    <li className="flex flex-col gap-[8px] items-center">
                        <span className="flex gap-[5px] items-center text-[#9FA19C]">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="21"
                                viewBox="0 0 20 21"
                                fill="none">
                                <path
                                    d="M8.74167 2.35833L4.58333 3.925C3.625 4.28333 2.84167 5.41666 2.84167 6.43333V12.625C2.84167 13.6083 3.49167 14.9 4.28333 15.4917L7.86667 18.1667C9.04167 19.05 10.975 19.05 12.15 18.1667L15.7333 15.4917C16.525 14.9 17.175 13.6083 17.175 12.625V6.43333C17.175 5.40833 16.3917 4.275 15.4333 3.91666L11.275 2.35833C10.5667 2.1 9.43333 2.1 8.74167 2.35833Z"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M7.54167 10.3917L8.88333 11.7333L12.4667 8.14999"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                            Approved Requests
                        </span>
                        <span className="w-[40px] border rounded-[30px] border-solid border-[transparent]"></span>
                    </li>
                    <li className="flex flex-col gap-[8px] items-center">
                        <span className="flex gap-[5px] items-center text-[#9FA19C]">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="21"
                                viewBox="0 0 20 21"
                                fill="none">
                                <path
                                    d="M7.50001 18.8333H12.5C16.6667 18.8333 18.3333 17.1667 18.3333 13V7.99999C18.3333 3.83332 16.6667 2.16666 12.5 2.16666H7.50001C3.33334 2.16666 1.66667 3.83332 1.66667 7.99999V13C1.66667 17.1667 3.33334 18.8333 7.50001 18.8333Z"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M15 5.5L5 15.5"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M15 8.83333V5.5H11.6667"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M5 12.1667V15.5H8.33333"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                            Review
                        </span>
                        <span className="w-[40px] border rounded-[30px] border-solid border-[transparent]"></span>
                    </li>
                </ul>
            </nav>
            <div className="pt-[30px] grid grid-cols-[1fr] pb-[35px] rounded-[20px] px-[30px] bg-[#F9F9F9]">
                <div className="bg-white rounded-[20px] pt-[39px] px-[25px] grid gap-[56px] grid-rows-[1fr_auto]">
                    <div className="grid grid-rows-[auto_1fr] gap-[25px]">
                        <div className="flex justify-between pb-[14px] items-center px-[5px] border-b border-[#F3F3F3] border-solid">
                            <h2>Requests</h2>
                            <button className="bg-[#38CB89] px-[11px] py-[7px] border-solid text-[#ffffff] rounded-[8px]">
                                Create Request
                            </button>
                        </div>
                        <div className="flex flex-col gap-[13px]">
                            <div className="flex flex-col gap-[20px] items pl-[53px] pt-[25px] pb-[15px] pr-[30px] rounded-[50px] border border-solid border-[rgba(32, 32, 35, 0.04)]">
                                <div className="grid grid-cols-[auto_auto_auto_auto_auto] gap-x-[10px] gap-y-[20px] grid-rows-[auto_auto] text-center">
                                    <div className="grid gap-[4px] text-left">
                                        <small>Contract-ID</small>
                                        <p className="flex items-center gap-[6px]">
                                            <strong>
                                                PW-353554-164597137...{" "}
                                            </strong>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="13"
                                                height="13"
                                                viewBox="0 0 13 13"
                                                fill="none">
                                                <path
                                                    d="M8.66667 6.9875V9.2625C8.66667 11.1583 7.90834 11.9167 6.0125 11.9167H3.7375C1.84167 11.9167 1.08334 11.1583 1.08334 9.2625V6.9875C1.08334 5.09167 1.84167 4.33334 3.7375 4.33334H6.0125C7.90834 4.33334 8.66667 5.09167 8.66667 6.9875Z"
                                                    stroke="#54565B"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                                <path
                                                    d="M11.9167 3.7375V6.0125C11.9167 7.90834 11.1583 8.66667 9.2625 8.66667H8.66667V6.9875C8.66667 5.09167 7.90834 4.33334 6.0125 4.33334H4.33334V3.7375C4.33334 1.84167 5.09167 1.08334 6.9875 1.08334H9.2625C11.1583 1.08334 11.9167 1.84167 11.9167 3.7375Z"
                                                    stroke="#54565B"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                            </svg>
                                        </p>
                                    </div>
                                    <div className="grid text-left grid-cols-[1fr_1fr_1fr] whitespace-nowrap">
                                        <div className="grid grid-rows-[auto_auto] gap-[4px]">
                                            <small>Community</small>
                                            <p>
                                                <strong>Sesame</strong>
                                            </p>
                                        </div>
                                        <div className="grid grid-rows-[auto_auto] gap-[4px]">
                                            <div></div>
                                            <img
                                                src={Arrow}
                                                alt=""
                                                className="mt-[15px]"
                                            />
                                        </div>
                                        <div className="grid grid-rows-[auto_auto] gap-[4px]">
                                            <small>End Product</small>
                                            <p>
                                                <strong>Cleaned Sesame</strong>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="grid text-left gap-[4px]">
                                        <small>Grade</small>
                                        <p>
                                            <strong>2</strong>
                                        </p>
                                    </div>
                                    <div className="grid text-left gap-[4px]">
                                        <small>Purity Level</small>
                                        <p>
                                            <strong>98%</strong>
                                        </p>
                                    </div>
                                    <div className="grid text-center gap-[4px]">
                                        <small>Status</small>
                                        <p className="text-[#DD5A56] font-bold text-[12px] italic">
                                            Pending
                                        </p>
                                    </div>
                                    <div className="grid gap-[4px] text-left">
                                        <small>LPO Quote</small>
                                        <p className="flex items-center gap-[6px]">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="17"
                                                height="18"
                                                viewBox="0 0 17 18"
                                                fill="none">
                                                <path
                                                    d="M14.296 5.70673V12.5143C14.296 14.5566 13.2748 15.9181 10.8922 15.9181H5.44608C3.06342 15.9181 2.04228 14.5566 2.04228 12.5143V5.70673C2.04228 3.66445 3.06342 2.30293 5.44608 2.30293H10.8922C13.2748 2.30293 14.296 3.66445 14.296 5.70673Z"
                                                    stroke="#38CB89"
                                                    stroke-width="1.11397"
                                                    stroke-miterlimit="10"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                                <path
                                                    d="M9.87102 4.00483V5.36635C9.87102 6.11518 10.4837 6.72786 11.2325 6.72786H12.5941"
                                                    stroke="#38CB89"
                                                    stroke-width="1.11397"
                                                    stroke-miterlimit="10"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                                <path
                                                    d="M5.44608 9.79128H8.16911"
                                                    stroke="#38CB89"
                                                    stroke-width="1.11397"
                                                    stroke-miterlimit="10"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                                <path
                                                    d="M5.44608 12.5143H10.8922"
                                                    stroke="#38CB89"
                                                    stroke-width="1.11397"
                                                    stroke-miterlimit="10"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                            </svg>
                                            <span>
                                                <strong>
                                                    Tunner Report.pdf
                                                </strong>
                                                <br />
                                                <small>2MB document</small>
                                            </span>
                                        </p>
                                    </div>
                                    <div className="grid text-left grid-cols-[1fr_1fr_1fr] whitespace-nowrap">
                                        <div className="grid grid-rows-[auto_auto] gap-[4px]">
                                            <small>Warehouse</small>
                                            <p>
                                                <strong>Anchau-AFTL</strong>
                                            </p>
                                        </div>
                                        <div className="grid grid-rows-[auto_auto] gap-[4px]">
                                            <div></div>
                                            <div></div>
                                        </div>
                                        <div className="grid grid-rows-[auto_auto] gap-[4px]">
                                            <small>Volume (MT)</small>
                                            <p>
                                                <strong>3000</strong>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="grid text-left gap-[4px]">
                                        <small>Date</small>
                                        <p>
                                            <strong>May 01, 2022</strong>
                                        </p>
                                    </div>
                                    <div className="grid text-left gap-[4px]">
                                        <div></div>
                                        <div></div>
                                    </div>
                                    <div
                                        style={{ marginInline: "auto" }}
                                        className="grid text-left gap-[4px]">
                                        <div></div>
                                        <button className="text-white w-[97px] bg-[#38CB89] px-[30px] py-[3px] rounded-[6px]">
                                            Modify
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-[20px] items pl-[53px] pt-[25px] pb-[15px] pr-[30px] rounded-[50px] border border-solid border-[rgba(32, 32, 35, 0.04)]">
                                <div className="grid grid-cols-[auto_auto_auto_auto_auto] gap-x-[10px] gap-y-[20px] grid-rows-[auto_auto] text-center">
                                    <div className="grid gap-[4px] text-left">
                                        <small>Contract-ID</small>
                                        <p className="flex items-center gap-[6px]">
                                            <strong>
                                                PW-353554-164597137...{" "}
                                            </strong>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="13"
                                                height="13"
                                                viewBox="0 0 13 13"
                                                fill="none">
                                                <path
                                                    d="M8.66667 6.9875V9.2625C8.66667 11.1583 7.90834 11.9167 6.0125 11.9167H3.7375C1.84167 11.9167 1.08334 11.1583 1.08334 9.2625V6.9875C1.08334 5.09167 1.84167 4.33334 3.7375 4.33334H6.0125C7.90834 4.33334 8.66667 5.09167 8.66667 6.9875Z"
                                                    stroke="#54565B"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                                <path
                                                    d="M11.9167 3.7375V6.0125C11.9167 7.90834 11.1583 8.66667 9.2625 8.66667H8.66667V6.9875C8.66667 5.09167 7.90834 4.33334 6.0125 4.33334H4.33334V3.7375C4.33334 1.84167 5.09167 1.08334 6.9875 1.08334H9.2625C11.1583 1.08334 11.9167 1.84167 11.9167 3.7375Z"
                                                    stroke="#54565B"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                            </svg>
                                        </p>
                                    </div>
                                    <div className="grid text-left grid-cols-[1fr_1fr_1fr] whitespace-nowrap">
                                        <div className="grid grid-rows-[auto_auto] gap-[4px]">
                                            <small>Community</small>
                                            <p>
                                                <strong>Sesame</strong>
                                            </p>
                                        </div>
                                        <div className="grid grid-rows-[auto_auto] gap-[4px]">
                                            <div></div>
                                            <img
                                                src={Arrow}
                                                alt=""
                                                className="mt-[15px]"
                                            />
                                        </div>
                                        <div className="grid grid-rows-[auto_auto] gap-[4px]">
                                            <small>End Product</small>
                                            <p>
                                                <strong>Cleaned Sesame</strong>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="grid text-left gap-[4px]">
                                        <small>Grade</small>
                                        <p>
                                            <strong>2</strong>
                                        </p>
                                    </div>
                                    <div className="grid text-left gap-[4px]">
                                        <small>Purity Level</small>
                                        <p>
                                            <strong>98%</strong>
                                        </p>
                                    </div>
                                    <div className="grid text-center gap-[4px]">
                                        <small>Status</small>
                                        <p className="text-[#DD5A56] font-bold text-[12px] italic">
                                            Pending
                                        </p>
                                    </div>
                                    <div className="grid text-left gap-[4px]">
                                        <small>LPO Quote</small>
                                        <p className="flex items-center gap-[6px]">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="17"
                                                height="18"
                                                viewBox="0 0 17 18"
                                                fill="none">
                                                <path
                                                    d="M14.296 5.70673V12.5143C14.296 14.5566 13.2748 15.9181 10.8922 15.9181H5.44608C3.06342 15.9181 2.04228 14.5566 2.04228 12.5143V5.70673C2.04228 3.66445 3.06342 2.30293 5.44608 2.30293H10.8922C13.2748 2.30293 14.296 3.66445 14.296 5.70673Z"
                                                    stroke="#38CB89"
                                                    stroke-width="1.11397"
                                                    stroke-miterlimit="10"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                                <path
                                                    d="M9.87102 4.00483V5.36635C9.87102 6.11518 10.4837 6.72786 11.2325 6.72786H12.5941"
                                                    stroke="#38CB89"
                                                    stroke-width="1.11397"
                                                    stroke-miterlimit="10"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                                <path
                                                    d="M5.44608 9.79128H8.16911"
                                                    stroke="#38CB89"
                                                    stroke-width="1.11397"
                                                    stroke-miterlimit="10"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                                <path
                                                    d="M5.44608 12.5143H10.8922"
                                                    stroke="#38CB89"
                                                    stroke-width="1.11397"
                                                    stroke-miterlimit="10"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                            </svg>
                                            <span>
                                                <strong>
                                                    Tunner Report.pdf
                                                </strong>
                                                <br />
                                                <small>2MB document</small>
                                            </span>
                                        </p>
                                    </div>
                                    <div className="grid text-left grid-cols-[1fr_1fr_1fr] whitespace-nowrap">
                                        <div className="grid grid-rows-[auto_auto] gap-[4px]">
                                            <small>Warehouse</small>
                                            <p>
                                                <strong>Anchau-AFTL</strong>
                                            </p>
                                        </div>
                                        <div className="grid grid-rows-[auto_auto] gap-[4px]">
                                            <div></div>
                                            <div></div>
                                        </div>
                                        <div className="grid grid-rows-[auto_auto] gap-[4px]">
                                            <small>Volume (MT)</small>
                                            <p>
                                                <strong>3000</strong>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="grid text-left gap-[4px]">
                                        <small>Date</small>
                                        <p>
                                            <strong>May 01, 2022</strong>
                                        </p>
                                    </div>
                                    <div className="grid text-left gap-[4px]">
                                        <div></div>
                                        <div></div>
                                    </div>
                                    <div
                                        style={{ marginInline: "auto" }}
                                        className="grid text-left gap-[4px]">
                                        <div></div>
                                        <button className=" whitespace-nowrap text-white w-[97px] bg-[#38CB89] py-[3px] rounded-[6px]">
                                            View Comment
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-[20px] items pl-[53px] pt-[25px] pb-[15px] pr-[30px] rounded-[50px] border border-solid border-[rgba(32, 32, 35, 0.04)]">
                                <div className="grid grid-cols-[auto_auto_auto_auto_auto] gap-x-[10px] gap-y-[20px] grid-rows-[auto_auto] text-center">
                                    <div className="grid gap-[4px] text-left">
                                        <small>Contract-ID</small>
                                        <p className="flex items-center gap-[6px]">
                                            <strong>
                                                PW-353554-164597137...{" "}
                                            </strong>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="13"
                                                height="13"
                                                viewBox="0 0 13 13"
                                                fill="none">
                                                <path
                                                    d="M8.66667 6.9875V9.2625C8.66667 11.1583 7.90834 11.9167 6.0125 11.9167H3.7375C1.84167 11.9167 1.08334 11.1583 1.08334 9.2625V6.9875C1.08334 5.09167 1.84167 4.33334 3.7375 4.33334H6.0125C7.90834 4.33334 8.66667 5.09167 8.66667 6.9875Z"
                                                    stroke="#54565B"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                                <path
                                                    d="M11.9167 3.7375V6.0125C11.9167 7.90834 11.1583 8.66667 9.2625 8.66667H8.66667V6.9875C8.66667 5.09167 7.90834 4.33334 6.0125 4.33334H4.33334V3.7375C4.33334 1.84167 5.09167 1.08334 6.9875 1.08334H9.2625C11.1583 1.08334 11.9167 1.84167 11.9167 3.7375Z"
                                                    stroke="#54565B"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                            </svg>
                                        </p>
                                    </div>
                                    <div className="grid text-left grid-cols-[1fr_1fr_1fr] whitespace-nowrap">
                                        <div className="grid grid-rows-[auto_auto] gap-[4px]">
                                            <small>Community</small>
                                            <p>
                                                <strong>Sesame</strong>
                                            </p>
                                        </div>
                                        <div className="grid grid-rows-[auto_auto] gap-[4px]">
                                            <div></div>
                                            <img
                                                src={Arrow}
                                                alt=""
                                                className="mt-[15px]"
                                            />
                                        </div>
                                        <div className="grid grid-rows-[auto_auto] gap-[4px]">
                                            <small>End Product</small>
                                            <p>
                                                <strong>Cleaned Sesame</strong>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="grid text-left gap-[4px]">
                                        <small>Grade</small>
                                        <p>
                                            <strong>2</strong>
                                        </p>
                                    </div>
                                    <div className="grid text-left gap-[4px]">
                                        <small>Purity Level</small>
                                        <p>
                                            <strong>98%</strong>
                                        </p>
                                    </div>
                                    <div className="grid text-center gap-[4px]">
                                        <small>Status</small>
                                        <p className="text-[#DD5A56] font-bold text-[12px] italic">
                                            Pending
                                        </p>
                                    </div>
                                    <div className="grid text-left gap-[4px]">
                                        <small>LPO Quote</small>
                                        <p className="flex items-center gap-[6px]">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="17"
                                                height="18"
                                                viewBox="0 0 17 18"
                                                fill="none">
                                                <path
                                                    d="M14.296 5.70673V12.5143C14.296 14.5566 13.2748 15.9181 10.8922 15.9181H5.44608C3.06342 15.9181 2.04228 14.5566 2.04228 12.5143V5.70673C2.04228 3.66445 3.06342 2.30293 5.44608 2.30293H10.8922C13.2748 2.30293 14.296 3.66445 14.296 5.70673Z"
                                                    stroke="#38CB89"
                                                    stroke-width="1.11397"
                                                    stroke-miterlimit="10"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                                <path
                                                    d="M9.87102 4.00483V5.36635C9.87102 6.11518 10.4837 6.72786 11.2325 6.72786H12.5941"
                                                    stroke="#38CB89"
                                                    stroke-width="1.11397"
                                                    stroke-miterlimit="10"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                                <path
                                                    d="M5.44608 9.79128H8.16911"
                                                    stroke="#38CB89"
                                                    stroke-width="1.11397"
                                                    stroke-miterlimit="10"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                                <path
                                                    d="M5.44608 12.5143H10.8922"
                                                    stroke="#38CB89"
                                                    stroke-width="1.11397"
                                                    stroke-miterlimit="10"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                            </svg>
                                            <span>
                                                <strong>
                                                    Tunner Report.pdf
                                                </strong>
                                                <br />
                                                <small>2MB document</small>
                                            </span>
                                        </p>
                                    </div>
                                    <div className="grid text-left grid-cols-[1fr_1fr_1fr] whitespace-nowrap">
                                        <div className="grid grid-rows-[auto_auto] gap-[4px]">
                                            <small>Warehouse</small>
                                            <p>
                                                <strong>Anchau-AFTL</strong>
                                            </p>
                                        </div>
                                        <div className="grid grid-rows-[auto_auto] gap-[4px]">
                                            <div></div>
                                            <div></div>
                                        </div>
                                        <div className="grid grid-rows-[auto_auto] gap-[4px]">
                                            <small>Volume (MT)</small>
                                            <p>
                                                <strong>3000</strong>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="grid text-left gap-[4px]">
                                        <small>Date</small>
                                        <p>
                                            <strong>May 01, 2022</strong>
                                        </p>
                                    </div>
                                    <div className="grid text-left gap-[4px]">
                                        <div></div>
                                        <div></div>
                                    </div>
                                    <div
                                        style={{ marginInline: "auto" }}
                                        className="grid text-center gap-[4px]">
                                        <div></div>
                                        <button className="text-white w-[97px] bg-[#38CB89] py-[3px] rounded-[6px]">
                                            View Comment
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#F9F9F9] mb-[25px] px-[24px] py-[14px] rounded-[15px] items-center flex justify-between">
                        <small>1 - 3 Of 40 Entries</small>
                        <div className="flex gap-[14px] items-center">
                            <button className="p-[11px] bg-[#f3f3f3] rounded-[10px]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="9"
                                    height="14"
                                    viewBox="0 0 9 14"
                                    fill="none">
                                    <path
                                        d="M7.88672 1L1.9241 7L7.88672 13"
                                        stroke="#9FA19C"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </button>
                            <small className="flex gap-[14px]">
                                <span>1</span>
                                <span>2</span>
                                <span>3</span>
                                <span>...</span>
                                <span>6</span>
                            </small>
                            <button className="p-[11px] rounded-[10px] bg-[#38CB89]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="9"
                                    height="14"
                                    viewBox="0 0 9 14"
                                    fill="none">
                                    <path
                                        d="M1.65625 1L7.61887 7L1.65625 13"
                                        stroke="white"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default MainView;
