import { FaArrowRightLong } from "react-icons/fa6";

import Card2 from "./Card2"

import R from "../assets/R.png"
import drop from "../assets/DropBox.png"
import pitch from "../assets/Pitch.png"
import visual from "../assets/visual.png"
import product from "../assets/product.png"
import canva from "../assets/Canva.png"
import brand from "../assets/Brand.png"
import skype from "../assets/skype.png"
import { Link } from "react-router-dom";
const Featured = () => {

  const cardsData2 = [
    {image: R ,
        title : "Email Marketing",
        heading : "Revolut Madrid, Spain",
        description : "Revolut is looking for Email Marketing to help team ma ...",
        button1 : "Marketing",
        button2 : "Design",
    },

    {image: drop ,
        title : "Brand Designer",
        heading : "Revolut Madrid, Spain",
        description : "Revolut is looking for Email Marketing to help team ma ...",
        button1 : "Marketing",
        button2 : "Design",
    },
    {image: pitch ,
        title : "Email Marketing",
        heading : "Revolut Madrid, Spain",
        description : "Revolut is looking for Email Marketing to help team ma ...",
        button1 : "Marketing",
        button2 : "Design",
    },
    {image: visual ,
        title : "Visual Designer",
        heading : "Revolut Madrid, Spain",
        description : "Revolut is looking for Email Marketing to help team ma ...",
        button1 : "Marketing",
        button2 : "Design",
    },
    {image: product ,
        title : "Email Marketing",
        heading : "Revolut Madrid, Spain",
        description : "Revolut is looking for Email Marketing to help team ma ...",
        button1 : "Marketing",
        button2 : "Design",
    },
    {image: canva ,
        title : "Email Marketing",
        heading : "Revolut Madrid, Spain",
        description : "Revolut is looking for Email Marketing to help team ma ...",
        button1 : "Marketing",
        button2 : "Design",
    },
    {image: brand ,
        title : "Email Marketing",
        heading : "Revolut Madrid, Spain",
        description : "Revolut is looking for Email Marketing to help team ma ...",
        button1 : "Marketing",
        button2 : "Design",
    },
    {image: skype ,
        title : "Email Marketing",
        heading : "Revolut Madrid, Spain",
        description : "Revolut is looking for Email Marketing to help team ma ...",
        button1 : "Marketing",
        button2 : "Design",
    },


    // Add more items as needed
  ];

  return (
    <div className="sm:px-20 px-5 py-10">
      <div className="flex flex-col sm:flex-row justify-between">
        <h1 className="text-[40px] font-[600]">Featured  <span className='text-[#26A4FF]'>jobs</span></h1>
        <Link to={"/all-jobs"}>
        <h1 className="text-[#4640DE] flex items-center gap-2 text-[16px] font-[600]">Show All Jobs <FaArrowRightLong /></h1>
        </Link>
      </div>

{/* card */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 ">
       

      {cardsData2.map((Cards,index)=>(
        
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
    </div>
  );
}

export default Featured;
