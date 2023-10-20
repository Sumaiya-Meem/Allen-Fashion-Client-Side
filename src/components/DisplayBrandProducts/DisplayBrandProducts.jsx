import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { FcRating } from 'react-icons/fc';

const DisplayBrandProducts = () => {
    const { brand_name } = useParams();
    const [productLocal, setProductLocal] = useState([]);
    const loadedProducts = useLoaderData();

    const selectedBrandProducts = loadedProducts.filter((product) => product.brandName === brand_name);


    useEffect(() => {
        fetch('../../../public/brandsData.json')
            .then(res => res.json())
            .then(data => {
                setProductLocal(data);
            });
    }, []);
    // console.log(productLocal)
    const brandImages = productLocal.find(brand => brand.brand_name === brand_name)?.brand_image;

    // console.log(brandImages)

    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full h-[300px]">
                    <img src={brandImages && brandImages[1]} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full h-[300px]">
                    <img src={brandImages && brandImages[0]} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full h-[300px]">
                    <img src={brandImages && brandImages[2]} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>

            <div className="mt-10">
                <h1 className="flex justify-center text-2xl font-semibold mb-8 text-[#da5555]">Products</h1>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
               {selectedBrandProducts.length > 0 ?
                    (selectedBrandProducts.map((product) => (
                        <div key={product._id}>

                            <div className="card h-[450px] bg-base-100 shadow-xl ">
                                <figure><img src={product.image} alt="" className="w-[90%] rounded-lg"/></figure>
                                <div className="card-body">
                                    
                                    <h2 className="text-xl ">Name: <span className="font-semibold">{product.name}</span></h2>
                                    <h2 className="text-xl ">Brand Name: <span className="font-semibold">{product.brandName}</span></h2>
                                    <p className="text-xl ">Type: <span className="font-semibold"> {product.type}</span></p>
                                   <p className="text-xl ">Price:  <span className="font-semibold">${product.price}</span></p>
                                  
                                   <div className="flex">
                                            {Array.from({ length: product.rating }, (_, index) => (
                                                <FcRating key={index} />
                                            ))}
                                        </div>
                                    <div className="flex justify-between">
                                        <button className="btn bg-[#10ac84] text-white">View Details</button>
                                        <button className="btn bg-[#01a3a4] text-white">Update</button>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    )))
                    :
                    (

                        <h1 className="text-2xl flex justify-center">No products found for the brand: {brand_name}</h1>
                    )}
               </div>
            </div>

        </div>
    );
};

export default DisplayBrandProducts;