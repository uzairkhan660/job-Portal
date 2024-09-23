import AllJobs from "./AllJobs";
import HomePage from "./HomePage";
import SocialMedia from "./SocialMedia";
import { Routes ,Route } from "react-router-dom";


export default function App() {
  return (
    <div>

<Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/all-jobs" element={<AllJobs/>} />
      <Route path="/socialmedia" element={<SocialMedia/>} />
      

    </Routes>

     {/* <HomePage/>  */}
     {/* <AllJobs/> */}
     {/* <SocialMedia/> */}
    </div>
      
    
  )
}