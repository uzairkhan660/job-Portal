import vector from "../assets/vector.png"
import background from "../assets/background.png"
import boy from "../assets/boy mian.png"
import { CiSearch } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";

import { useState } from 'react';

const Section1 = () => {

    const [location, setLocation] = useState('');

    const handleLocationChange = (e) => {
      setLocation(e.target.value);
    };

  return (
    <div className="sm:px-20 px-5  bg-[#F8F8FD]">
        {/* main */}
        <div className="flex flex-col  sm:flex-row ">
                {/* content div */}
      <div className=" pt-20">
<h1 className='sm:text-[72px] font-[600] text-[40px]  font-[Inter] sm:leading-[79.2px] flex flex-col'>Discover <span> more than </span><span className='text-[#26A4FF]'>5000+ Jobs</span> </h1>
<img src={vector} alt="/" />
<p className="text-[#515B6F] font-[400] text-[20px] pt-10 leading-[32px]">Great platform for the job seeker that searching for new career heights and passionate about startups.</p>

<div className="bg-white items-center flex flex-col align-middle md:flex-row gap-5  sm:pl-10 py-3 my-5 relative shadow-lg ">
<div className="flex gap-5 items-center">
<CiSearch size={20} />
    <input className="border-b-2" type="text" placeholder="Jobs Title and Key"/>
</div>

<div className="flex gap-5 items-center">
<CiLocationOn size={20}/>

<select
        id="location"
        className="border-b-2 py-1 "
        value={location}
        onChange={handleLocationChange}
      >
        <option value="" className="text-gray-300">Choose a Location</option>
        <option value="newyork">New York</option>
        <option value="london">London</option>
        <option value="paris">Paris</option>
        <option value="tokyo">Tokyo</option>
        <option value="sydney">Sydney</option>
      </select>
</div>

<div className="sm:ml-52">
<button className="bg-[#4640DE] text-white font-[700] p-2">Search my Job</button>
</div>
</div>

<div className="text-gray-500">
    <p>Popular : UI Designer, UX Researcher, Android, Admin</p>
</div>

</div>



{/* image div */}
<div className=" bg-cover bg-center flex justify-end align-middle "
          style={{ backgroundImage: `url(${background})` }}>

            <img src={boy} alt="/" className=""/>


            
          </div>
        </div>


    
    </div>
  )
}

export default Section1
