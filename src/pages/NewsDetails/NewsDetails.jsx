

import { useContext } from 'react';
import Header from '../shared/Header/Header';
import RightSideNav from '../shared/RightSideNav/RightSideNav';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider/AuthProvider';
import Navbar from '../shared/Navbar/Navbar';

const NewsDetails = () => {

    const { id } = useParams()
    console.log(id)

    const { news } = useContext(AuthContext)
    console.log(news)

    const description = news.find(aNews => aNews._id == id)

    const {image_url, title, details} = description

    console.log(description)
  

    return (
        <div>

            <Header></Header>
            <Navbar></Navbar>

            <div className='grid grid-cols-1 md:grid-cols-4'>
                <div className='md:col-span-3 mr-4'>

                    <div className="card card-compact border p-5">
                        <figure><img src={image_url} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">  {title} </h2>
                            <p>
                               {
                                details
                               }
                            </p>
                           
                        </div>
                    </div>


                </div>
                <div>

                    <RightSideNav></RightSideNav>

                </div>

            </div>

        </div>
    );
};

export default NewsDetails;