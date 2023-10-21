import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import { useContext, useState } from "react";
import { FcRating } from 'react-icons/fc';
import Swal from "sweetalert2";

const MyCarts = () => {

    

    const { user } = useContext(AuthContext);
    const userEmail = user.email;

    const cartProduct = useLoaderData();
    // console.log(loadedCartProduct);
    const [loadedCartProduct,setLoadedCartProduct]=useState(cartProduct);

    const userCartProducts = loadedCartProduct.filter((product) => product.userEmail === userEmail);

    // console.log(userCartProducts)

    const handleDelete = (_id) => {
        console.log(_id)

        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#ee5253',
            cancelButtonColor: '#2e86de',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://fashion-website-server-jx5pf6k71-meems-projects.vercel.app/addCart/${_id}`, {
                    method:'DELETE'

                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        const cartProductWithoutDelete =loadedCartProduct.filter((products)=>products._id!==_id) 
                        setLoadedCartProduct(cartProductWithoutDelete )
                        if (data.deletedCount > 0) {
                              Swal.fire(
                                'Deleted!',
                                'success'
                              )
                        }
                    })
            }
        })
    }

    return (
        <div>

            <div className="mt-10">
                <h1 className="flex justify-center text-2xl font-semibold mb-8 text-[#da5555]">Your Cart Products</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                    {userCartProducts.length > 0 ?
                        (userCartProducts.map((product) => (
                            <div key={product._id}>


                                <div className="card h-[500px]  shadow-xl bg-[#fcf4f2]">
                                    <figure><img src={product.image} alt="" className="w-[90%] rounded-lg" /></figure>
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
                                        <div className="flex justify-center">
                                            <Link >
                                                <button
                                                    onClick={() => handleDelete(product._id)}
                                                    className="btn bg-red-500 hover:bg-red-500 text-white">Delete</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )))
                        :
                        (

                            <h1 className="text-2xl flex justify-center">No Cart Product available</h1>
                        )}
                </div>
            </div>
        </div>
    );
};

export default MyCarts;