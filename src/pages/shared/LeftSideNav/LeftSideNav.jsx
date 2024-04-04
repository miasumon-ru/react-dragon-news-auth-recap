import { useEffect, useState } from "react";
import {  NavLink } from "react-router-dom";



const LeftSideNav = () => {

    const [catagories, setCatagories] = useState([])

    useEffect(() => {

        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCatagories(data))

    }, [])

    return (
        <div className="p-4">

            <h2 className="text-center text-lg font-bold mb-5">All Categories</h2>

            <div>
                {
                    catagories.map(category => <NavLink className={ ({isActive})=> isActive ? 'border  block p-3' : 'block p-3' } to={`category/${category.id}`} key={category.id}> {category.name} </NavLink>)
                }
            </div>


        </div>
    );
};

export default LeftSideNav;