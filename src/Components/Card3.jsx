
const Card3 = ({image,title,heading,button1,button2,button3}) => {
    return (
      <div className=" bg-white p-4">
        <div className=" flex gap-5">
          <div>
            <img src={image} alt="/" />
          </div>
          {/* <div className="border border-[#4640DE] text-[#4640DE]  p-3 items-center">
            <button className=" ">Full Time</button>
          </div> */}

<div>
          <h1 className="text-[18px] font-[600]">{title}</h1>
          <h1 className="text-[16px] font-[400]">{heading}</h1>
          {/* <p className="text-[16px] font-[400] text-gray-600 pt-4">{description}</p> */}
  
         
        </div>

        </div>

        <div className="flex sm:gap-5 gap-2 pt-5">
            <button className=" text-[#FFB836] border border-[#FFB836] rounded-3xl sm:py-2 px-1 sm:px-5">{button1}</button>
            <button className="bg-[#EEFAF7] text-[#69D3B6] rounded-3xl sm:py-2 px-1  sm:px-5">{button2}</button>
            <button className=" text-[#4640DE] border border-[#4640DE] rounded-3xl sm:py-2 px-1 sm:px-5">{button3}</button>

          </div>
  
       
      </div>
    );
  };
  
  export default Card3;
  