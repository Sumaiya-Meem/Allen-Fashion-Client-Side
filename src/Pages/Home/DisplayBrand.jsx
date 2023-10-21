/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const DisplayBrand = ({ brand }) => {
    console.log(brand)
    const { brand_logo, brand_name } = brand;
   console.log(brand_logo);
    return (
        <div className="w-[120px] lg:w-[200px] h-[120px] ">
            <Link to={`/products/${brand_name}`} key={brand.id}>
                <div className=" text-center shadow-lg rounded-lg">
                    <div className="flex justify-center items-center">
                        <img src={brand_logo} alt="" className="w-[100px] h-[80px]" /></div>
                    <h1 className="text-lg">Brand: {brand_name}</h1>
                </div>
            </Link>

        </div>
    );
};

export default DisplayBrand;