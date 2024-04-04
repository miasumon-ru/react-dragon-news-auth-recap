

import { Link } from 'react-router-dom';
import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    return (
        <div>

            <div className='flex'>
                <button className='btn btn-primary'>Latest</button>
                <Marquee pauseOnHover={true} speed={150}>
                <Link to='/' className='mr-12'> Match Highlight - Germany vs Spain </Link>
                <Link to='/' className='mr-12'> Match Highlight - Germany vs Spain </Link>
                <Link to='/home' className='mr-12'> Match Highlight - Germany vs Spain </Link>
                </Marquee>
 
            </div>


        </div>
    );
};

export default BreakingNews;