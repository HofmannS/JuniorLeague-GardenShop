import BannerImage from '@assets/Banner.jpg'

import "@Banner.scss"

const Banner = () => {
    return (
        <div className="banner__wrapper">
            <div className="banner">
                <div className='banner__image'>
                    <img src={BannerImage} alt="Banner"
                        className='banner__image-item' />
                </div>
                <div className='banner__content'>
                    <div className="container">
                    <h1 className='banner__title'>Amazing Discounts on Garden Products!</h1>
                    <button className='banner__button'>Check out</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Banner 