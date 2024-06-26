import React, { useState } from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import { softwareSupportData } from "../data/softwaresupport.js";
import dayjs from "dayjs";
import { FiCalendar } from "react-icons/fi";
import { GoGoal } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import { MdAdd } from "react-icons/md";
import AddSupportPopup from "../components/AddSupportPopup.jsx";

const OngoingSupport = () => {
  const [openCreatePopup, setOpenCreatePopup] = useState(false);
  const breadcrumbLinks = [
    { to: "/dashboard", label: "Home" },
    { to: "", label: "Ongoing Support" }
  ];
  const navigate = useNavigate();

  const handleViewDetails = (id, color) => {
    navigate(`/ongoing-support/subscription-support-details/${id}`, {
      state: { color }
    });
    window.scrollTo({ top: 0 });
  };

  const calculateProgress = (startDate, endDate) => {
    const currentYear = dayjs().year();
    const start = dayjs(`${startDate} ${currentYear}`, "MMM D YYYY");
    const end = dayjs(`${endDate} ${currentYear}`, "MMM D YYYY");
    const today = dayjs();

    if (end.isBefore(start)) {
      end.add(1, "year");
    }

    if (today.isAfter(end)) return 100;
    if (today.isBefore(start)) return 0;

    const totalDuration = end.diff(start, "day");
    const elapsedDuration = today.diff(start, "day");

    return Math.round(elapsedDuration / totalDuration * 100);
  };

  const handleOpenCreate = () => {
    setOpenCreatePopup(true);
  };

  const colors = [
    "bg-red-500",
    "bg-green-500",
    "bg-blue-500",
    "bg-yellow-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-indigo-500",
    "bg-teal-500"
  ];

  return (
    <div className="mx-4 md:mx-12 my-20 md:my-8">
      <div>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="my-4">
            <p className="text-3xl font-semibold">Support and Maintenance</p>
          </div>
        </div>
        <Breadcrumbs links={breadcrumbLinks} />

        <div className="flex justify-end gap-4 mt-4 ">
          <div className="relative w-full md:w-60">
            <input
              placeholder="Search..."
              className="form-control w-full pl-4 py-2 rounded-full border  text-sm sm:text-base pr-8 bg-white"
            />
            <div className="absolute inset-y-0 right-2 flex items-center pr-2 cursor-pointer text-gray-500">
              <IoMdSearch />
            </div>
          </div>
          <div
            onClick={handleOpenCreate}
            className="bg-primary text-white p-3 rounded-full cursor-pointer hover:opacity-75 "
          >
            <MdAdd className="self-center" size={20} />
          </div>
        </div>

        <div className="mt-2">
          <div className="bg-white p-4 rounded-xl flex flex-col lg:flex-row justify-between">
            <div className="w-full lg:w-1/2 flex">
              <div className="w-full">
                <div className="border-l-2 px-4">
                  <p className="text-base font-semibold">Ongoing Support</p>
                  <p className="text-gray-500 text-sm">this month</p>
                </div>
                <p className="mt-2 mx-4 text-3xl font-semibold">13</p>
              </div>
              <div className="w-full">
                <div className="border-l-2 px-4">
                  <p className="text-base font-semibold">Software Issues</p>
                  <p className="text-gray-500 text-sm">this month</p>
                </div>
                <p className="mt-2 mx-4 text-3xl font-semibold">7</p>
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex">
              <div className="w-full">
                <div className="border-l-2 px-4">
                  <p className="text-base font-semibold">Solve Issues</p>
                  <p className="text-gray-500 text-sm">this month</p>
                </div>
                <p className="mt-2 mx-4 text-3xl font-semibold">5</p>
              </div>
              <div className="w-full">
                <div className="border-l-2 px-4">
                  <p className="text-base font-semibold">
                    Expired Subscription
                  </p>
                  <p className="text-gray-500 text-sm">in the last 4 months</p>
                </div>
                <p className="mt-2 mx-4 text-3xl font-semibold">2</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse lg:flex-row w-full gap-4">
          <div className="w-full flex flex-wrap mt-2">
            {softwareSupportData.map((supportItem, index) =>
              <div
                key={supportItem.id}
                className="w-full sm:w-full md:w-1/2 2xl:w-1/3 px-0 md:px-2 py-2"
              >
                <div
                  onClick={() =>
                    handleViewDetails(
                      supportItem.id,
                      colors[index % colors.length]
                    )}
                  className="bg-white rounded-lg p-6 shadow-sm cursor-pointer hover:shadow-xl transform transition-transform duration-300 hover:scale-95"
                >
                  <div className="flex justify-start">
                    <div
                      className={`${colors[
                        index % colors.length
                      ]} rounded-lg text-white p-2 w-auto`}
                    >
                      {supportItem.logo}
                    </div>
                  </div>
                  <p className="my-4 font-semibold text-lg">
                    {supportItem.title}
                  </p>
                  <div className="flex justify-between">
                    <p className="flex gap-2">
                      <FiCalendar className="self-center" />
                      Start: {dayjs(supportItem.startDate).format("MMM D")}
                    </p>
                    <p className="flex gap-2">
                      <GoGoal className="self-center" />
                      End: {dayjs(supportItem.endDate).format("MMM D")}
                    </p>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-700 mt-4">
                    <div
                      className="bg-green-500 h-1 rounded-full"
                      style={{
                        width: `${calculateProgress(
                          supportItem.startDate,
                          supportItem.endDate
                        )}%`
                      }}
                    />
                  </div>
                  <div className="flex justify-between mt-6">
                    {supportItem.updateStatus === "Subscription expired"
                      ? <div className="bg-gray-200 py-1 px-2 text-gray-500 text-sm rounded-md">
                          Subscription expired
                        </div>
                      : <div>
                          Last updated: {supportItem.updateStatus}
                        </div>}
                    <div className="flex -space-x-2 overflow-hidden">
                      {supportItem.teamAssigned
                        .slice(0, 2)
                        .map((member, index) =>
                          <img
                            key={index}
                            src={member.image}
                            alt="team member"
                            className="w-8 h-8 rounded-full mx-1"
                          />
                        )}
                      {supportItem.teamAssigned.length > 3 &&
                        <div className="w-8 h-8 rounded-full bg-gray-300 font-semibold text-gray-700 flex items-center justify-center mx-1">
                          +{supportItem.teamAssigned.length - 2}
                        </div>}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <AddSupportPopup
        openCreatePopup={openCreatePopup}
        setOpenCreatePopup={setOpenCreatePopup}
      />
    </div>
  );
};

export default OngoingSupport;
