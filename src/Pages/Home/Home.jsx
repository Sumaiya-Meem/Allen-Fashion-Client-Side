import { useLoaderData } from "react-router-dom";
import { CiDark} from 'react-icons/ci';
import bannerImg from "../../assets/banner.avif"
import DisplayBrand from "./DisplayBrand";
import About from "../../components/About/About";
import Review from "../../components/Review/Review";
import { useState } from "react";

const Home = () => {
    
    const loadedBrands =useLoaderData();
    // console.log(loadedBrands);
    const [darkMode, setDarkMode] = useState(false);

    const handleDarkMode = () => {
      setDarkMode(!darkMode);
    };
  
    const pageStyle = {
      backgroundColor: darkMode ? "#000" : "#fff",
      color: darkMode ? "#fff" : "#000",
    };
    return (
        <div style={pageStyle}>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${bannerImg})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <div >
                            <h1 className="mb-5 text-5xl font-bold">Elevate Your Style, Discover the Latest Trends</h1>
                            <p className="mb-5">Experience the essence of fashion. Unveil a collection that defines your individuality. Discover Allen Fashion – Where Style Meets You.</p>
                            <button onClick={handleDarkMode} className="btn border-2 border-[#69a6ce] text-lg  text-[#347dad] rounded-lg p-2 font-semibold capitalize"><span className="bg-[#347dad] text-black text-xl rounded-lg"><CiDark></CiDark></span>
                            {darkMode ? "Light Mode" : "Dark Mode"}
                            
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-10">
                <h1 className="text-center text-3xl font-semibold">Our Brands</h1>
                <div className="grid grid-cols-3   md:grid-cols-6 gap-1 p-3 mt-10">
                    {
                        loadedBrands.map(brand => <DisplayBrand brand={brand} key={brand.id}></DisplayBrand>)
                    }
                </div>
            </div>
            <About></About>
            <Review></Review>
        </div>
    );
};

export default Home;