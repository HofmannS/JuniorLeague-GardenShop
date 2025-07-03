import BannerImage from '../../assets/Banner.jpg'

import "./Banner.scss"

const Banner = () => {
    return (
        <div className="banner__wrapper">
            <div className="banner">
                <img src={BannerImage} alt="Banner" className='banner__image' />

                <div className='banner__bg'>
                    <div className='banner__content'>
                        <h1 className='banner__title'><span>Amazing Discounts on Garden Products!</span></h1>
                        <button className='banner__btn'>Check out</button>
                    </div>
                </div>

            </div>
        </div>
    );
};
export default Banner

