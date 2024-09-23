
const Card2 = ({image,title,heading,description,button1,button2}) => {
  return (
    <div className="border border-gray-300 p-4">
      <div className="flex justify-between items-center">
        <div>
          <img src={image} alt="/" />
        </div>
        <div className="border border-[#4640DE] text-[#4640DE]  p-3 items-center">
          <button className=" ">Full Time</button>
        </div>
      </div>

      <div className="pt-5">
        <h1 className="text-[18px] font-[600]">{title}</h1>
        <h1 className="text-[16px] font-[400]">{heading}</h1>
        <p className="text-[16px] font-[400] text-gray-600 pt-4">{description}</p>

        <div className="flex gap-5 pt-5">
          <button className="bg-[#FDF3EB] text-[#FFB836] rounded-3xl py-2 px-5">{button1}</button>
          <button className="bg-[#EEFAF7] text-[#69D3B6] rounded-3xl py-2 px-5">{button2}</button>
        </div>
      </div>
    </div>
  );
};

export default Card2;
