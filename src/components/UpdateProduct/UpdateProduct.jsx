

import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateProduct = () => {
    const selectedUpdateProduct=useLoaderData();
    const{_id,name,brandName,price,type,rating,image}=selectedUpdateProduct;
    // console.log(selectedUpdateProduct);
 
    const handleUpdateProduct = (e)=>{
        e.preventDefault();

        const form = e.target;
        const name=form.name.value;
        const brandName=form.brandName.value;
        const type=form.type.value;
        const price=form.price.value;
        const rating=form.rating.value;
        const image=form.image.value;

        const updateProduct={
            name,brandName,type,price,rating,image
        }
        // console.log(products)
        
        fetch(`https://fashion-website-server-jx5pf6k71-meems-projects.vercel.app/addproducts/${_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updateProduct),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount>0) {
                    Swal.fire(
                        'Update Product successfully',
                        'success'
                    );
                    form.reset();
                }
            })
        
    }
    return (
        <div>
             <div className="bg-[#f2ddd8] m-10 p-6 rounded-lg">
            <h1 className="text-center text-2xl text-[#e17055] font-semibold">Update Product</h1>
            <form onSubmit={handleUpdateProduct}>
                <div className="md:flex  gap-6">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-semibold">Name</span>
                        </label>
                        <label className="input-group ">
                            <input type="text" name="name" defaultValue={name} placeholder="Name..." className="w-full input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-semibold">Brand Name</span>
                        </label>
                        <label className="input-group">
                            <select name="brandName" className="w-full input input-bordered" defaultValue={brandName}>
                                <option value="">Choose Brand</option>
                                <option value="Gucci">Gucci</option>
                                <option value="Zara">Zara</option>
                                <option value="H&M">H&M</option>
                                <option value="Levi's">Levis</option>
                                <option value="Nike">Nike</option>
                                <option value="Adidas">Adidas</option>
                            </select>
                        </label>
                    </div>
                </div>
                <div className="md:flex  gap-6">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text  font-semibold">Type</span>
                        </label>
                        <label className="input-group ">
                            <input type="text" name="type" defaultValue={type} placeholder="Type..." className="w-full input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                    <label className="label">
                            <span className="label-text font-semibold">Image</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="image" defaultValue={image}  placeholder="Image..." className="w-full input input-bordered" />
                        </label>
                    </div>
                </div>
                <div className="md:flex  gap-6">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text  font-semibold">Price</span>
                        </label>
                        <label className="input-group ">
                            <input type="text" name="price" defaultValue={price}  placeholder="Price..." className="w-full input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-semibold">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" defaultValue={rating}  placeholder="Rating..." className="w-full input input-bordered" />
                        </label>
                    </div>
                </div>
                <div>
               
                </div>
                <button className="btn btn-block mt-4 bg-[#f6b09e] capitalize text-xl font-semibold hover:bg-[#f6b09e]">Submit</button>
            </form>

        </div>
        </div>
    );
};

export default UpdateProduct;