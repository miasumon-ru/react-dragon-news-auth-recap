import Header from "../shared/Header/Header";
import LeftSideNav from "../shared/LeftSideNav/LeftSideNav";
import Navbar from "../shared/Navbar/Navbar";
import RightSideNav from "../shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";

import NewsCard from "./NewsCard";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";



 
const Home = () => {

   const {news} = useContext(AuthContext)

    return (
        <div>

            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6" >
                <div className="border">
                    <LeftSideNav></LeftSideNav>
                </div>

                <div className="md:col-span-2 border space-y-4 p-5" >


                    {
                        news.map(aNews => <NewsCard key={aNews._id} news = {aNews}></NewsCard>)
                    }

                    
                </div>
                <div className="border">
                    <RightSideNav></RightSideNav>
                </div>
            </div>


       
        </div>
    );
};

export default Home;