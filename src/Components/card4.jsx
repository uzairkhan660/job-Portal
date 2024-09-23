
const Card = ({ icon: Icon, title, description }) => {
  return (
    <div className="p-4 flex flex-col gap-4">
      {/* icon */}
      <div className="text-3xl text-[#4640DE]  ">
        <Icon />
      </div>
      <h1 className="text-xl font-bold ">{title}</h1>
      <div className=" ">
        <h1 className="text-gray-400">{description}</h1>
      </div>
      
    </div>
  );
}

export default Card;
