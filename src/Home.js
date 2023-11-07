import {BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import hero3 from  "./Assets/images/hero3.jpg"

const Home = () => {
    return ( 
        <div className="home relative w-full    ">
            <div className="hero-wrapper flex w-full">
                <div className="hero-texts pl-8 absolute z-10 pt-36">
                    <h1 className="hero-title font-bold 
                    text-[70px]/[76px] w-[400px] lg:w-[600px] lg:text-[120px]/[120px]">
                        The Look Gallery
                    </h1>
                    <p className="hero-desc
                    text-base font-bold text-gray-500
                    mt-2">
                        John Doe Showcase 
                    </p>
                    <p className="hero-desc
                    text-base font-bold text-gray-500
                    mt-2">
                        23 January - 14 February
                    </p>
                    <button className="hero-cta flex gap-2 items-center
                    text-sm font-bold text-gray-500 py-2 pr-4">
                        <span className='uppercase text-xs'>Read More</span> <BsArrowRight />
                    </button>
                </div>
                <div className="ml-[31vw] hero-img-wrapper w-[68vw] 
                    max-h-[90vh] justify-end  ">
                    <img src={hero3} alt="" className="grayscale  
                    hero-img w-full max-h-[80vh] " />
                    <button className="preview">
                    <BsArrowLeft />04
                    </button>
                    <button className="next">
                        <BsArrowRight /> 03
                    </button>
                </div>
            </div>
        </div>
     );
}
 
export default Home;