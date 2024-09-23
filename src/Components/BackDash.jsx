import back from "../assets/blue.png";
import dash from "../assets/dashboard.png";
import { Link } from "react-router-dom";

const BackDash = () => {
  return (
    <div className="sm:p-20">
      <div className="flex justify-between flex-col sm:flex-row bg-cover bg-center py-20 sm:pt-20 sm:py-0 px-5 sm:px-20" style={{ backgroundImage: `url(${back})` }}>
        <div className="flex flex-col gap-10">
            <h1 className="flex flex-col text-[48px] text-white font-[600] leading-[53px]">Start posting <span>jobs today</span> </h1>
            <p className="text-[16px] text-white font-[500] leading-[25px]">Start posting jobs for only $10.</p>
            <div className="flex justify-center sm:justify-start pb-5">

            <Link to={"/all-jobs"}> 
            <button className="text-[#4640DE] bg-white font-[700]  p-2">Search my Job</button>
            </Link>
            </div>
           

        </div>

        <div>
            <img src={dash} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default BackDash;
