
import { FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import  qZone1 from '../../../assets/qZone1.png'
import  qZone2 from '../../../assets/qZone2.png'
import  qZone3 from '../../../assets/qZone3.png'

const RightSideNav = () => {
    return (
        <div>

            <div className="space-y-2 p-4">
                <h2 className="text-center text-lg font-bold mb-5">Login With</h2>
                <button className="btn btn-outline w-full text-lg "> <FaGoogle className="text-lg" /><span> Google</span> </button>
                <button className="btn btn-outline w-full text-lg"><FaGithub className="text-lg" /><span> Github</span> </button>
            </div>

            <div className=" p-4">
                <h2 className="text-center text-lg font-bold mb-5">Find Us On</h2>

            <p className="border p-2 rounded-t-lg "><a className="flex flex-row items-center "  href=""> <FaFacebookF className="mr-3 rounded-full bg-[#F3F3F3]" /> <span>Facebook</span></a></p>

            <p className=" border-x p-2 "><a className="flex flex-row items-center "  href=""> <FaTwitter className="mr-3 rounded-full bg-[#F3F3F3]" /> <span>Twitter</span></a></p>

            <p className="border p-2 rounded-b-lg "><a className="flex flex-row items-center "  href=""> <FaInstagram className="mr-3 rounded-full bg-[#F3F3F3]" /> <span>Instagram</span></a></p>
              
            </div>

            <div className="bg-[#F3F3F3] space-y-3 p-3">

            <h2 className="text-center text-lg font-bold mb-5">Q-Zone</h2>

                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
            
            
        </div>
    );
};

export default RightSideNav;