

import logo from '../../../assets/logo.png'
import moment from 'moment';


const Header = () => {
    return (
        <div>

            <div className='space-y-4'>
                <img className='mx-auto' src={logo} alt="" />
                <p className='text-center'>Journalism Without Fear or Favour</p>
                <p className='text-center'> {moment().format("dddd, MMMM D, YYYY")} </p>
            </div>


        </div>
    );
};

export default Header;