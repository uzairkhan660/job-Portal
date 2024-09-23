import { CiSearch } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { GrAppsRounded } from "react-icons/gr";
import { HiMenuAlt4 } from "react-icons/hi";
import slash from "../assets/vector.png";

import Card2 from "./Card2";

import stripe from "../assets/stripe.png";
import truebil from "../assets/true.png";
import square from "../assets/square.png";
import visual from "../assets/visual.png";
import product from "../assets/product.png";
import canva from "../assets/Canva.png";
import brand from "../assets/Brand.png";
import skype from "../assets/skype.png";

import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import { useState } from "react";
const SearchJobs = () => {
  const cardsData2 = [
    {
      image: stripe,
      title: "Email Marketing",
      heading: "Revolut Madrid, Spain",
      description: "Revolut is looking for Email Marketing to help team ma ...",
      button1: "Marketing",
      button2: "Design",
    },

    {
      image: truebil,
      title: "Brand Designer",
      heading: "Revolut Madrid, Spain",
      description: "Revolut is looking for Email Marketing to help team ma ...",
      button1: "Marketing",
      button2: "Design",
    },
    {
      image: square,
      title: "Email Marketing",
      heading: "Revolut Madrid, Spain",
      description: "Revolut is looking for Email Marketing to help team ma ...",
      button1: "Marketing",
      button2: "Design",
    },
    {
      image: visual,
      title: "Visual Designer",
      heading: "Revolut Madrid, Spain",
      description: "Revolut is looking for Email Marketing to help team ma ...",
      button1: "Marketing",
      button2: "Design",
    },
    {
      image: product,
      title: "Email Marketing",
      heading: "Revolut Madrid, Spain",
      description: "Revolut is looking for Email Marketing to help team ma ...",
      button1: "Marketing",
      button2: "Design",
    },
    {
      image: canva,
      title: "Email Marketing",
      heading: "Revolut Madrid, Spain",
      description: "Revolut is looking for Email Marketing to help team ma ...",
      button1: "Marketing",
      button2: "Design",
    },
    {
      image: brand,
      title: "Email Marketing",
      heading: "Revolut Madrid, Spain",
      description: "Revolut is looking for Email Marketing to help team ma ...",
      button1: "Marketing",
      button2: "Design",
    },
    {
      image: skype,
      title: "Email Marketing",
      heading: "Revolut Madrid, Spain",
      description: "Revolut is looking for Email Marketing to help team ma ...",
      button1: "Marketing",
      button2: "Design",
    },

    // Add more items as needed
  ];

  // Pagination state
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4; // You can set how many cards you want to display per page

  // Get the current items based on the pagination
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedItems = cardsData2.slice(startIndex, endIndex);

  // Handle page change
  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  const [location, setLocation] = useState("");

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const [remote, setRemote] = useState("");

  const handleRemotechange = (e) => {
    setRemote(e.target.value);
  };

  const [job, setJob] = useState("");

  const handleJobchange = (e) => {
    setJob(e.target.value);
  };

  const [schedule, setSchedule] = useState("");

  const handleSchedulechange = (e) => {
    setSchedule(e.target.value);
  };

  const [career, setCareer] = useState("");

  const handleCareerchange = (e) => {
    setCareer(e.target.value);
  };

  const [category, setcategory] = useState("");

  const handleCategorychange = (e) => {
    setcategory(e.target.value);
  };
  return (
    <div className="bg-[#F8F8FD]  sm:px-20 px-10 py-10">
      <div className="items-center  flex flex-col">
        <h1 className="text-[40px] font-[600]">
          Find your{" "}
          <span className="text-[#26A4FF]">
            dream companies{" "}
            
          </span>
        </h1>
        <p>Find the dream companies you dream work for</p>
      </div>

      <div className="py-10">
        <div className="bg-white items-center flex flex-col align-middle md:flex-row gap-5  sm:pl-10 py-3 my-5 justify-between px-5 shadow-lg ">
          <div className="flex gap-5 items-center">
            <CiSearch size={20} />
            <input
              className="border-b-2"
              type="text"
              placeholder="Jobs Title and Key"
            />
          </div>

          <div className="flex gap-5 items-center">
            <CiLocationOn size={20} />

            <select
              id="location"
              className="border-b-2 py-1 "
              value={location}
              onChange={handleLocationChange}
            >
              <option value="" className="text-gray-300">
                Choose a Location
              </option>
              <option value="newyork">New York</option>
              <option value="london">London</option>
              <option value="paris">Paris</option>
              <option value="tokyo">Tokyo</option>
              <option value="sydney">Sydney</option>
            </select>
          </div>

          <div className="sm:ml-52 ">
            <button className="bg-[#4640DE] text-white font-[700] p-2">
              Search my Job
            </button>
          </div>
        </div>

        <div className="flex justify-between items-center px-10">
          <div className="p-3 border-dashed rounded-md border border-gray-400 bg-white">
            <select
              id="location"
              className=" py-1 "
              value={remote}
              onChange={handleRemotechange}
            >
              <option value="" className="text-gray-300">
                Remote
              </option>
              <option value="newyork">New York</option>
              <option value="london">London</option>
              <option value="paris">Paris</option>
              <option value="tokyo">Tokyo</option>
              <option value="sydney">Sydney</option>
            </select>
          </div>

          <div className="p-3 border-dashed rounded-md border border-gray-400 bg-white">
            <select id="location" value={job} onChange={handleJobchange}>
              <option value="" className="text-gray-300">
                Job Type
              </option>
              <option value="newyork">New York</option>
              <option value="london">London</option>
              <option value="paris">Paris</option>
              <option value="tokyo">Tokyo</option>
              <option value="sydney">Sydney</option>
            </select>
          </div>

          <div className="p-3 border-dashed rounded-md border border-gray-400 bg-white">
            <select
              id="location"
              className=" py-1 "
              value={schedule}
              onChange={handleSchedulechange}
            >
              <option value="" className="text-gray-300">
                Schedule
              </option>
              <option value="newyork">New York</option>
              <option value="london">London</option>
              <option value="paris">Paris</option>
              <option value="tokyo">Tokyo</option>
              <option value="sydney">Sydney</option>
            </select>
          </div>

          <div className="p-3 border-dashed rounded-md border border-gray-400 bg-white">
            <select
              id="location"
              className=" py-1 "
              value={career}
              onChange={handleCareerchange}
            >
              <option value="" className="text-gray-300">
                Career Level
              </option>
              <option value="newyork">New York</option>
              <option value="london">London</option>
              <option value="paris">Paris</option>
              <option value="tokyo">Tokyo</option>
              <option value="sydney">Sydney</option>
            </select>
          </div>

          <div>
            <HiAdjustmentsHorizontal size={40} />
          </div>
        </div>
      </div>

      <div className="bg-white py-10 px-32 flex justify-between sm:w-[100%]">
        {/* checkbox */}
        <div className="sm:w-[20%]">
          {/* Industry */}
          <div className=" flex flex-col gap-5">
            <h1 className="text-[18px] font-[700]">Industry</h1>

            <div className="flex gap-3">
              <input
                type="checkbox"
                className="bg-[#4640DE] size-5  text-white"
              />
              <label>Advertising</label>
            </div>

            <div className="flex gap-3">
              <input
                type="checkbox"
                className="bg-[#4640DE] size-5 text-white"
              />
              <label>Bussines Services</label>
            </div>

            <div className="flex gap-3">
              <input
                type="checkbox"
                className="bg-[#4640DE] size-5 text-white"
              />
              <label>Block chain</label>
            </div>

            <div className="flex gap-3">
              <input
                type="checkbox"
                className="bg-[#4640DE] size-5 text-white"
              />
              <label>Cloud</label>
            </div>

            <div className="flex gap-3">
              <input
                type="checkbox"
                className="bg-[#4640DE] size-5 text-white"
              />
              <label>Customer tec</label>
            </div>

            <div className="flex gap-3">
              <input
                type="checkbox"
                className="bg-[#4640DE] size-5 text-white"
              />
              <label>Education</label>
            </div>

            <div className="flex gap-3">
              <input
                type="checkbox"
                className="bg-[#4640DE] size-5 text-white"
              />
              <label>Fintech</label>
            </div>

            <div className="flex gap-3">
              <input
                type="checkbox"
                className="bg-[#4640DE] size-5 text-white"
              />
              <label>Gaming</label>
            </div>

            <div className="flex gap-3">
              <input
                type="checkbox"
                className="bg-[#4640DE] size-5 text-white"
              />
              <label>Food & Beverage</label>
            </div>

            <div className="flex gap-3">
              <input
                type="checkbox"
                className="bg-[#4640DE] size-5 text-white"
              />
              <label>Health Care</label>
            </div>

            <div className="flex gap-3">
              <input
                type="checkbox"
                className="bg-[#4640DE] size-5 text-white"
              />
              <label>Hosing</label>
            </div>

            <div className="flex gap-3">
              <input
                type="checkbox"
                className="bg-[#4640DE] size-5 text-white"
              />
              <label>Media</label>
            </div>
          </div>

          {/* Company Size */}
          <div className="pt-5 flex flex-col gap-5">
            <h1 className="text-[18px] font-[700]">Company Size</h1>
            <div className="flex gap-3">
              <input
                type="checkbox"
                className="bg-[#4640DE] size-5 text-white"
              />
              <label>51-150 (57)</label>
            </div>
            <div className="flex gap-3">
              <input
                type="checkbox"
                className="bg-[#4640DE] size-5 text-white"
              />
              <label>1-50 (25)</label>
            </div>

            <div className="flex gap-3">
              <input
                type="checkbox"
                className="bg-[#4640DE] size-5 text-white"
              />
              <label>151-250 (45)</label>
            </div>

            <div className="flex gap-3">
              <input
                type="checkbox"
                className="bg-[#4640DE] size-5 text-white"
              />
              <label>251-500 (4)</label>
            </div>
            <div className="flex gap-3">
              <input
                type="checkbox"
                className="bg-[#4640DE] size-5 text-white"
              />
              <label>501-1000 (43)</label>
            </div>

            <div className="flex gap-3">
              <input
                type="checkbox"
                className="bg-[#4640DE] size-5 text-white"
              />
              <label>1000 - above (23)</label>
            </div>
          </div>
        </div>

        {/* All Jobs */}

        <div className="sm:w-[80%]">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-[26px] font-[600]">All Jobs</h1>
              <p>Showing 73 results</p>
            </div>
            <div className="flex gap-5">
              <div className="flex  border-r-2">
                <p>Sort by :</p>
                <select
                  className=" "
                  id="relevent"
                  value={category}
                  onChange={handleCategorychange}
                >
                  <option value=""> Most Relevent</option>
                </select>
              </div>
              <div className="flex gap-5 ">
                <GrAppsRounded size={30} />

                <HiMenuAlt4 size={30} />
              </div>
            </div>
          </div>
          {/* card */}
          <Link to={"/socialmedia"}>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-20 gap-y-10 mt-8">
          

            {displayedItems.map((Cards, index) => (
              <Card2
                key={index}
                image={Cards.image}
                title={Cards.title}
                heading={Cards.heading}
                description={Cards.description}
                
                button1={Cards.button1} 
                button2={Cards.button2}
              />
              
            ))}
            
          </div>
          </Link>
          {/* Pagination Component */}
          <div className="flex justify-center mt-8">
            <ReactPaginate
              previousLabel={"<"}
              nextLabel={">"}
              pageCount={Math.ceil(cardsData2.length / itemsPerPage)}
              onPageChange={handlePageClick}
              containerClassName={"flex space-x-2"}
              pageClassName={
                "px-4 py-2 border rounded-md text-gray-600 hover:bg-gray-100"
              }
              activeClassName={"bg-blue-500 text-white"}
              previousClassName={"px-4 py-2 border rounded-md text-gray-600"}
              nextClassName={"px-4 py-2 border rounded-md text-gray-600"}
              disabledClassName={"opacity-50 cursor-not-allowed"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchJobs;
