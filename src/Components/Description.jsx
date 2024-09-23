import stripe from "../assets/stripe.png";
import { IoShareSocialOutline } from "react-icons/io5";
import { FaRegCircleCheck } from "react-icons/fa6";

import { TbStethoscope ,TbPool } from "react-icons/tb";
import { IoVideocamOutline } from "react-icons/io5";
import { FaAsymmetrik } from "react-icons/fa";
import { PiCoffee } from "react-icons/pi";
import { RiHotelLine } from "react-icons/ri";
import { FaHandHoldingHeart } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import D6 from "../assets/download (6).png"
import D7 from "../assets/download (7).png"
import D8 from "../assets/download (8).png"

import Card4 from "./card4";

import Card3 from "./Card3"

import R from "../assets/R.png"
import drop from "../assets/DropBox.png"
import pitch from "../assets/Pitch.png"
import visual from "../assets/visual.png"
import product from "../assets/product.png"
import canva from "../assets/Canva.png"
import brand from "../assets/Brand.png"
import skype from "../assets/skype.png"
import back from "../assets/pattern.png"
import { Link } from "react-router-dom";
const Description = () => {

  const cardsData3 = [
    {image: R ,
        title : "Email Marketing",
        heading : "Revolut Madrid, Spain",
        button1 : "Marketing",
        button2 : "Full Time",
        button3 : "Design",

    },

    {image: drop ,
        title : "Brand Designer",
        heading : "Revolut Madrid, Spain",
        button1 : "Marketing",
        button2 : "Full Time",
        button3 : "Design",

    },
    {image: pitch ,
        title : "Email Marketing",
        heading : "Revolut Madrid, Spain",
        button1 : "Marketing",
        button2 : "Full Time",
        button3 : "Design",

    },
    {image: visual ,
        title : "Visual Designer",
        heading : "Revolut Madrid, Spain",
        button1 : "Marketing",
        button2 : "Full Time",
        button3 : "Design",

    },
    {image: product ,
        title : "Email Marketing",
        heading : "Revolut Madrid, Spain",
        button1 : "Marketing",
        button2 : "Full Time",
        button3 : "Design",

    },
    {image: canva ,
        title : "Email Marketing",
        heading : "Revolut Madrid, Spain",
        button1 : "Marketing",
        button2 : "Full Time",
        button3 : "Design",

    },
    {image: brand ,
        title : "Email Marketing",
        heading : "Revolut Madrid, Spain",
        button1 : "Marketing",
        button2 : "Full Time",
        button3 : "Design",

    },
    {image: skype ,
        title : "Email Marketing",
        heading : "Revolut Madrid, Spain",
        button1 : "Marketing",
        button2 : "Full Time",
        button3 : "Design",

    },


    // Add more items as needed
  ];



    const cardsData = [
        {
          icon: TbStethoscope,
          title: 'Full Healthcare',
          description: 'We believe in thriving communities and that starts with our team being happy and healthy.',
        },
        {
          icon: TbPool,
          title: 'Unlimited Vacation',
          description: 'We believe you should have a flexible schedule that makes space for family, wellness, and fun.',
        },
        {
          icon: IoVideocamOutline,
          title: 'Skill Development',
          description: 'We believe in always learning and leveling up our skills. Whether its a conference or online course.',
        },
        {
          icon: FaAsymmetrik,
          title: 'Team Summits',
          description: 'Every 6 months we have a full team summit where we have fun, reflect, and plan for the upcoming quarter.',
        },
        {
          icon: PiCoffee,
          title: 'Remote Working',
          description: 'You know how you perform your best. Work from home, coffee shop or anywhere when you feel like it.',
        },
        {
          icon: RiHotelLine,
          title: 'Commuter Benefits',
          description: 'We’re grateful for all the time and energy each team member puts into getting to work every day.',
        },
        {
          icon: FaHandHoldingHeart,
          title: 'We give back.',
          description: 'We anonymously match any donation our employees make (up to $/€ 600) so they can support the organizations they care about most—times two. ',
        },
       
      ];
    

  return (
    <div className="bg-[#F8F8FD] sm:px-20 px-10 py-10">
      <div className="bg-white">
        <div className="border p-4 flex justify-between items-center  gap-5 bg-white">
          <div className="flex gap-5">
            <img src={stripe} alt="/" />
            <div>
              <h1 className="text-[32px] font-[600]">Social Media Assistant</h1>
              <div>
                <ul className="flex gap-6 list-disc">
                  <li className="list-none">Stripe</li>
                  <li>Paris, France</li>
                  <li>Full-Time</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="pr-5 hover:cursor-pointer">
              <IoShareSocialOutline size={35} />
            </div>

            <div className="border-l text-gray-400 px-5">
              <button className="bg-[#4640DE] py-3 px-10 text-white">
                Apply
              </button>
            </div>
          </div>
        </div>
        {/* Content div */}
        <div className="p-20 flex w-[100%] border-b ">
          {/* Description div */}
          <div className="flex flex-col gap-10 w-[70%]">
            {/* describe */}
            <div>
              <h1 className="text-[26px] font-[600]">Description</h1>
              <p>
                Stripe is looking for Social Media Marketing expert to help
                manage our online networks. You will be responsible for
                monitoring our social media channels, creating content, finding
                effective ways to engage the community and incentivize others to
                engage on our channels.
              </p>
            </div>

            {/* responsible */}
            <div className="flex flex-col gap-2">
              <h1 className="text-[26px] font-[600]">Responsibilities</h1>
              <p className="flex items-center gap-3 ">
                <span className="text-[#56CDAD]">
                  <FaRegCircleCheck />
                </span>
                Community engagement to ensure that is supported and actively
                represented online
              </p>

              <p className="flex items-center gap-3">
                <span className="text-[#56CDAD]">
                  <FaRegCircleCheck />
                </span>
                Focus on social media content development and publication
              </p>

              <p className="flex items-center gap-3">
                <span className="text-[#56CDAD]">
                  <FaRegCircleCheck />
                </span>
                Marketing and strategy support
              </p>

              <p className="flex items-center gap-3">
                <span className="text-[#56CDAD]">
                  <FaRegCircleCheck />
                </span>
                Stay on top of trends on social media platforms, and suggest
                content ideas to the team
              </p>

              <p className="flex items-center gap-3">
                <span className="text-[#56CDAD]">
                  <FaRegCircleCheck />
                </span>
                Engage with online communities
              </p>
            </div>

            {/* who u are */}
            <div className="flex flex-col gap-2">
              <h1 className="text-[26px] font-[600]">Who You Are</h1>
              <p className="flex items-center gap-3 ">
                <span className="text-[#56CDAD]">
                  <FaRegCircleCheck />
                </span>
                You get energy from people and building the ideal work
                environment
              </p>

              <p className="flex items-center gap-3">
                <span className="text-[#56CDAD]">
                  <FaRegCircleCheck />
                </span>
                You have a sense for beautiful spaces and office experiences
              </p>

              <p className="flex items-center gap-3">
                <span className="text-[#56CDAD]">
                  <FaRegCircleCheck />
                </span>
                You are a confident office manager, ready for added
                responsibilities
              </p>

              <p className="flex items-center gap-3">
                <span className="text-[#56CDAD]">
                  <FaRegCircleCheck />
                </span>
                You're detail-oriented and creative
              </p>

              <p className="flex items-center gap-3">
                <span className="text-[#56CDAD]">
                  <FaRegCircleCheck />
                </span>
                You're a growth marketer and know how to run campaigns
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h1 className="text-[26px] font-[600]">Nice-To-Haves</h1>
              <p className="flex items-center gap-3 ">
                <span className="text-[#56CDAD]">
                  <FaRegCircleCheck />
                </span>
                Fluent in English
              </p>

              <p className="flex items-center gap-3">
                <span className="text-[#56CDAD]">
                  <FaRegCircleCheck />
                </span>
                Project management skills
              </p>

              <p className="flex items-center gap-3">
                <span className="text-[#56CDAD]">
                  <FaRegCircleCheck />
                </span>
                Copy editing skills
              </p>
            </div>
          </div>
          {/* Description end */}

          {/* about this  role */}
          <div className="p-4 w-[30%]">
            {/* role-start */}
            <div className="border-b pb-5">
              <h1 className="text-[26px] font-[600]">About this role</h1>
              {/* progessbar start */}
              <div className="bg-gray-100 flex gap-2 flex-col p-3">
                <label htmlFor="loadinglabel">5 applied of 10 capacity</label>
                <progress
                  className="h-2 w-full"
                  id="loadinglabel"
                  max="100"
                  value="40"
                  style={{
                    // For WebKit browsers (Chrome, Safari)
                    WebkitAppearance: "none",
                    appearance: "none",
                  }}
                ></progress>

                <style>
                  {`
          /* Customizing progress bar appearance */
          progress {
            background-color: #DDDDDD; /* Stroke color */
          }

          progress::-webkit-progress-bar {
            background-color: #DDDDDD;
          }

          progress::-webkit-progress-value {
            background-color: #56CDAD; /* Fill color */
          }

          progress::-moz-progress-bar {
            background-color: #56CDAD; /* Fill color for Firefox */
          }
        `}
                </style>
              </div>
              {/* progessbar end */}

              <div className="flex flex-col gap-5 pt-5 ">
                <div className="flex justify-between">
                  <h1 className="">Apply Before</h1>
                  <p className="font-[700]">July 31, 2021</p>
                </div>

                <div className="flex justify-between">
                  <h1>Job Posted On</h1>
                  <p className="font-[700]">July 31, 2021</p>
                </div>

                <div className="flex justify-between">
                  <h1>Job Type</h1>
                  <p className="font-[700]">Full-Time</p>
                </div>

                <div className="flex justify-between">
                  <h1>Salary</h1>
                  <p className="font-[700]">$75k-$85k USD</p>
                </div>
              </div>
            </div>
            {/* role end */}

            {/* category start */}
            <div className="border-b p-5 pl-0 flex flex-col gap-5">
              <h1 className="text-[26px] font-[600]">Categories</h1>

              <div className="flex gap-3">
                <button className="bg-[#FDF3EB] text-[#FFB836] rounded-3xl py-2 px-5">
                  Marketing
                </button>
                <button className="bg-[#EEFAF7] text-[#69D3B6] rounded-3xl py-2 px-5">
                  Design
                </button>
              </div>
            </div>
            {/* category end */}

            {/* skill start */}
            <div className="py-5">
              <h1 className="text-[26px] font-[600]">Required Skills</h1>
              <div className="">
                <div className="flex p-1 gap-2">
                  <button className="bg-gray-100 text-[#4640DE] p-2">
                    Project Management
                  </button>
                  <button className="bg-gray-100 text-[#4640DE] p-2 ">
                    Copywriting
                  </button>
                </div>

                <div className="flex p-1 gap-2">
                  <button className="bg-gray-100 text-[#4640DE] p-2">
                    Socail Media Marketing
                  </button>
                  <button className="bg-gray-100 text-[#4640DE] p-2">
                    English
                  </button>
                </div>
                <div className="p-1">
                  <button className="bg-gray-100 text-[#4640DE] p-2 ">
                    Copy Editing
                  </button>
                </div>
              </div>
            </div>
            {/* skill end */}
          </div>
        </div>
        {/* content end */}

        {/* perks benefits */}
        <div className="p-20">
<div className="">
<h1 className="text-[26px] font-[600]">Perks & Benefits</h1>
<p>This job comes with several perks and benefits</p>
</div>
{/* card */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 ">
       
        {cardsData.map((card,index)=>(
          <Card4
          key={index}
          icon={card.icon}
          title={card.title}
          description={card.description}
          
          />
        )
      )}
      </div>
{/* card-end */}
        </div>
{/* perks benefits end */}

<div className="p-20 flex justify-between ">
  <div className=" flex flex-col gap-10">
    <div className="flex gap-4">
      <img src={stripe} alt="/" />

      <div>
      <h1 className="text-[26px] font-[600]">About this role</h1>
      <Link to="/socialmedia">
<p className="flex items-center gap-2 text-[#4640DE]">Read more about Stripe <span className=""><FaArrowRightLong />
</span></p>
</Link>
      </div>
    </div>

    <div >
      <p className="flex flex-col">Stripe is a technology company that builds economic infrastructure for <span>the internet. Businesses of every size—from new startups to public</span> <span>companies—use our software to accept payments and manage their </span> businesses online.</p>
    </div>
  </div>

<div className="flex gap-3">
  <div>
    <img src={D6} alt="" />
  </div>

<div className="flex flex-col gap-3">
  <img src={D7} alt="" />
  <img src={D8} alt="" />
</div>

</div>

</div>
      </div>
      {/* white end */}

{/* card */}
<div className="sm:px-40 py-10 bg-no-repeat bg-right" style={{ backgroundImage: `url(${back})` }}>

<div className="py-10">
<Link to="/all-jobs">
<p className="flex items-center justify-end gap-2 text-[#4640DE]">Show All Jobs <span className=""><FaArrowRightLong />
</span></p>
</Link>
</div>
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-7 ">
       

      {cardsData3.map((Cards,index)=>(
        
        <Card3
        key={index}
        image={Cards.image}
        title={Cards.title}
        heading={Cards.heading}
        button1={Cards.button1}
        button2={Cards.button2}
        button3={Cards.button3}


        />
      ))}
      </div>

</div>


    </div>
  );
};

export default Description;
