import logo from "../assets/white-logo.png"
import { BiLogoFacebook } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { IoBasketballOutline } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="sm:px-20 px-5 py-10 bg-black">
      <div className="div1  sm:flex justify-between pb-10">
<div className="1 ">
    <img src={logo} alt="/" />
    <p className="text-gray-400 flex flex-col pt-10">Great platform for the job seeker <span>that passionate about startups. Find your dream job</span>  easier.</p>
</div>
{/* 1 end up */}

<div className="2 sm:flex gap-20">
    <div>
        <ul className="flex flex-col gap-5">
        <li className="font-[600] text-white">About</li>

            <li className="text-gray-400">Companies</li>
            <li className="text-gray-400">Pricing</li>
            <li className="text-gray-400">Terms</li>
            <li className="text-gray-400">Advice</li>
            <li className="text-gray-400">Privacy Policy</li>

        </ul>
    </div>

    <div>
    <ul className="flex flex-col gap-5">
    <li className="font-[600] text-white">Resources</li>

            <li className="text-gray-400">Help Docs</li>
            <li className="text-gray-400">Guide</li>
            <li className="text-gray-400">Uodates</li>
            <li className="text-gray-400">Contact Us</li>

        </ul>
    </div>
</div>
{/* 2 end up */}

<div className="3 flex flex-col gap-10">
    <h1 className="font-[600] text-white">Get job notifications</h1>
    <p className="text-gray-400 flex flex-col">The latest job news, articles, sent <span> to your inbox weekly.</span> </p>
    <div className="sm:flex gap-5">
        <input className="p-3" type="email" placeholder="Email Address" />
        
        <button className="bg-[#4640DE] text-white mt-3 sm:mt-0 px-5 py-1">Subscribe</button>
    </div>
</div>
      </div>
      {/* div1 closed */}

      <div className="div2 border-t sm:flex justify-between sm:px-20 px-5 pt-10 items-center border-t-gray-600">
<div>
<p className="text-gray-600">2024 @ Solushyfy. All rights reserved.</p>

</div>

<div className="text-white flex gap-3">
<BiLogoFacebook className="size-8 bg-gray-800 rounded-full " />
<FaInstagram className="size-8 p-1 bg-gray-800 rounded-full " />
<IoBasketballOutline className="size-8 p-1 bg-gray-800 rounded-full " />
<FaLinkedinIn className="size-8 p-1 bg-gray-800 rounded-full " />
<FaTwitter className="size-8 p-1 bg-gray-800 rounded-full " />

</div>

      </div>
    </div>
  )
}

export default Footer
