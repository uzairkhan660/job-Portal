import { FaArrowRightLong } from "react-icons/fa6";

const Card = ({ icon: Icon, title, description }) => {
  return (
    <div className="p-4 border flex flex-col gap-7 hover:bg-[#4640DE] hover:text-white">
      {/* icon */}
      <div className="text-3xl  ">
        <Icon />
      </div>
      <h1 className="text-xl font-bold ">{title}</h1>
      <div className="  flex items-center  gap-3">
        <h1>{description}</h1>
        <FaArrowRightLong className="" />
      </div>
      
    </div>
  );
}

export default Card;
