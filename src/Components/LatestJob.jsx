import { FaArrowRightLong } from "react-icons/fa6";

import Card3 from "./Card3"
import { Link } from "react-router-dom";

import R from "../assets/R.png"
import drop from "../assets/DropBox.png"
import pitch from "../assets/Pitch.png"
import visual from "../assets/visual.png"
import product from "../assets/product.png"
import canva from "../assets/Canva.png"
import brand from "../assets/Brand.png"
import skype from "../assets/skype.png"
import gray from "../assets/graybg.png"
import pattern from "../assets/pattern.png"

const LatestJob = () => {

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

  return (
    <div className=" bg-white pt-10">
    <div className=" sm:px-20 px-5 bg-cover bg-center py-10"style={{ backgroundImage: `url(${gray})` }}>
<div className="bg-contain bg-no-repeat bg-right"style={{backgroundImage:`url(${pattern})`}}>

<div className="flex flex-col sm:flex-row justify-between">
        <h1 className="text-[40px] font-[600]">Latest   <span className='text-[#26A4FF]'>jobs open</span></h1>
        <Link to={"/all-jobs"}> 
        <h1 className="text-[#4640DE] flex items-center gap-2 text-[16px] font-[600]">Show All Jobs <FaArrowRightLong /></h1>
        </Link>

      </div>

{/* card */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-7 mt-8 ">
       

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
    </div>
  );
}

export default LatestJob;
