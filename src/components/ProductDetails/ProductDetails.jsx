import { Link, useLoaderData } from "react-router-dom";
import { FcRating } from 'react-icons/fc';


const ProductDetails = () => {
    const selectedUpdateProduct=useLoaderData();
    console.log(selectedUpdateProduct)
    
    return (
        <div className="flex justify-center ">
            <div className="card max-w-[600px] h-auto shadow-xl mt-10 bg-[#f2ddd8]">
                                <figure><img src={selectedUpdateProduct.image} alt="" className="w-[60%] rounded-lg"/></figure>
                                <div className="card-body">
                                    
                                    <h2 className="text-xl ">Name: <span className="font-semibold">{selectedUpdateProduct.name}</span></h2>
                                    <h2 className="text-xl ">Brand Name: <span className="font-semibold">{selectedUpdateProduct.brandName}</span></h2>
                                    <p className="text-xl ">Description:  <span className="text-[#706f6f]">{selectedUpdateProduct.description}</span></p>
                                    <p className="text-xl ">Type: <span className="font-semibold"> {selectedUpdateProduct.type}</span></p>
                                   <p className="text-xl ">Price:  <span className="font-semibold">${selectedUpdateProduct.price}</span></p>
                                  
                                   <div className="flex">
                                            {Array.from({ length: selectedUpdateProduct.rating }, (_, index) => (
                                                <FcRating key={index} />
                                            ))}
                                        </div>
                                    <div className="flex justify-between">
                                    <Link >
                                        <button className="btn bg-[#10ac84] text-white">Add to Cart</button>
                                    </Link>

                                        <Link >
                                        <button className="btn bg-[#01a3a4] text-white">Delete</button>
                                        </Link>
                                    </div>
                                </div>
            </div>
        </div>
    );
};

export default ProductDetails;