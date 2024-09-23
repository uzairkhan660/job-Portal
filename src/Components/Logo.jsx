import Vodafone from "../assets/Vodafone.png"
import tesla from "../assets/tesla.png"
import talkit from "../assets/Talkit.png"
import intel from "../assets/intel.png"
import amdo from "../assets/Amdo.png"

const Logo = () => {
  return (
    <div className="flex flex-col gap-10 sm:px-20 px-5 py-10">
      <div className="text-gray-400">
        <h6>Companies we helped grow</h6>
      </div>
      <div className=" grid grid-cols-2  sm:grid-cols-5 gap-5  sm:gap-52 items-center">
<img src={Vodafone} alt="/" />
<img src={tesla} alt="/" />
<img src={talkit} alt="/" />
<img src={intel} alt="/" />
<img src={amdo} alt="/" />
      </div>
    </div>
  )
}

export default Logo
