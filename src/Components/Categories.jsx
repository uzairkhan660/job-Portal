import { FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineDesignServices, MdOutlineStackedBarChart } from "react-icons/md";
import { TbSpeakerphone } from "react-icons/tb";
import { RxCamera } from "react-icons/rx";
import { FaDisplay } from "react-icons/fa6";
import { IoCodeSlash } from "react-icons/io5";
import { BiSolidShoppingBags } from "react-icons/bi";
import { Link } from "react-router-dom";


import Card from "./Card";

const Categories = () => {

  const cardsData = [
    {
      icon: MdOutlineDesignServices,
      title: 'Design',
      description: '235 jobs available',
    },
    {
      icon: MdOutlineStackedBarChart,
      title: 'Marketing',
      description: '120 jobs available',
    },
    {
      icon: TbSpeakerphone,
      title: 'Development',
      description: '320 jobs available',
    },
    {
      icon: RxCamera,
      title: 'Sales',
      description: '150 jobs available',
    },
    {
      icon: FaDisplay,
      title: 'Finance',
      description: '80 jobs available',
    },
    {
      icon: IoCodeSlash,
      title: 'Finance',
      description: '80 jobs available',
    },
    {
      icon: FaDisplay,
      title: 'Finance',
      description: '80 jobs available',
    },
    {
      icon: BiSolidShoppingBags,
      title: 'Finance',
      description: '80 jobs available',
    },
    // Add more items as needed
  ];

  return (
    <div className="sm:px-20 px-5 py-10">
      <div className="flex flex-col sm:flex-row justify-between">
        <h1 className="text-[40px] font-[600]">Explore by <span className='text-[#26A4FF]'>category</span></h1>
       <Link to="/all-jobs">
        <h1 className="text-[#4640DE] flex items-center gap-2 text-[16px] font-[600]">Show All Jobs <FaArrowRightLong /></h1>
        </Link>
      </div>

{/* card */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 ">
       
        {cardsData.map((card,index)=>(
          <Card
          key={index}
          icon={card.icon}
          title={card.title}
          description={card.description}
          
          />
        )
      )}
      </div>
    </div>
  );
}

export default Categories;
