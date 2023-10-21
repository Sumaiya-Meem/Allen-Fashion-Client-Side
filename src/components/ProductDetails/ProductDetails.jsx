import { useLoaderData, useNavigate } from "react-router-dom";
import { FcRating } from 'react-icons/fc';
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import Swal from "sweetalert2";


const ProductDetails = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    // console.log(user.email);
 
    const selectedUpdateProduct=useLoaderData();
    // console.log(selectedUpdateProduct)
    const {name,brandName,type,price,rating,image,description}=selectedUpdateProduct

   
    const products={
        name,brandName,type,description,price,rating,image,userEmail: user.email
    }
    console.log(products);

    const handleCart=()=>{
        fetch('https://fashion-website-server-jx5pf6k71-meems-projects.vercel.app/addCart', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(products),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire(
                        'Product add to your cart',
                        'success'
                    );
                  
                }
                navigate('/');
            })
    }

    
    return (
        <div className="flex justify-center ">
            <div className="card max-w-[600px] h-auto shadow-xl mt-10 bg-[#f2ddd8]">
                                <figure><img src={image} alt="" className="w-[60%] rounded-lg"/></figure>
                                <div className="card-body">
                                    
                                    <div className="flex justify-between">
                                        <h2 className="text-xl ">Name: <span className="font-semibold text-[#10ac84]">{name}</span></h2>
                                    <h2 className="text-xl ">Brand Name: <span className="font-semibold text-[#10ac84]">{brandName}</span></h2>
                                    </div>
                                    <div className="flex justify-between">
                                    <p className="text-xl ">Type: <span className="font-semibold text-[#10ac84]"> {type}</span></p>
                                   <p className="text-xl ml-44">Price:  <span className="font-semibold text-[#10ac84]">${price}</span></p>
                                    </div>
                                    <p className="text-xl ">Description:  <span className="text-[#706f6f]">{description}</span></p>
                                    
                                  
                                   <div className="flex">
                                            {Array.from({ length: rating }, (_, index) => (
                                                <FcRating key={index} />
                                            ))}
                                        </div>
                                    <div className="flex justify-center">
                                    
                                        <button className="btn bg-[#10ac84] hover:bg-[#10ac84] text-white" onClick={handleCart}>Add to Cart</button>
                                 

                                        
                                    </div>
                                </div>
            </div>
        </div>
    );
};

export default ProductDetails;