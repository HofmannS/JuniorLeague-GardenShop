import BannerImage from '../../assets/Banner.jpg'
import { Link } from 'react-router-dom'
import "./Banner.scss"

const Banner = () => {
    return (
        <div className="banner__wrapper">
            <div className="banner">
                
                <div className='banner__bg'>
                   <div className="container">
                   <div className='banner__content' >
                        <h1 className='banner__title'>Amazing Discounts on Garden Products!</h1>
                       <Link to="/discount"><button className='banner__btn'>Check out</button></Link>
                    </div>
                   </div>
                </div>

            </div>
        </div>
    );
};
export default Banner

