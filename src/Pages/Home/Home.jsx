import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import DisplayBrand from "./DisplayBrand";
import About from "../../components/About/About";

const Home = () => {
    
    const loadedBrands =useLoaderData();
    // console.log(loadedBrands);
    return (
        <div className="">
            <Banner></Banner>
            <div className="mt-10">
                <h1 className="text-center text-3xl font-semibold">Our Brands</h1>
                <div className="grid grid-cols-3   md:grid-cols-6 gap-1 p-3 mt-10">
                    {
                        loadedBrands.map(brand => <DisplayBrand brand={brand} key={brand.id}></DisplayBrand>)
                    }
                </div>
            </div>
            <About></About>
        </div>
    );
};

export default Home;