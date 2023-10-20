import Swal from 'sweetalert2'
const AddProducts = () => {


    const handleAddProduct = (e)=>{
        e.preventDefault();

        const form = e.target;
        const name=form.name.value;
        const brandName=form.brandName.value;
        const type=form.type.value;
        const description=form.description.value;
        const price=form.price.value;
        const rating=form.rating.value;
        const image=form.image.value;

        const products={
            name,brandName,type,description,price,rating,image
        }
        // console.log(products)
        
        fetch('http://localhost:5000/addproducts', {
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
                        'Add New Product',
                        'success'
                    );
                    

                    
                    form.reset();
                }
            })
        
    }

    return (
        <div className="bg-[#f2ddd8] m-10 p-6 rounded-lg">
            <h1 className="text-center text-2xl text-[#e17055] font-semibold">Add New Product</h1>
            <form onSubmit={handleAddProduct}>
                <div className="md:flex  gap-6">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-semibold">Name</span>
                        </label>
                        <label className="input-group ">
                            <input type="text" name="name" placeholder="Name..." className="w-full input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-semibold">Brand Name</span>
                        </label>
                        <label className="input-group">
                            <select name="brandName" className="w-full input input-bordered">
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
                            <input type="text" name="type" placeholder="Type..." className="w-full input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-semibold">Short Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="description" placeholder="Description..." className="w-full input input-bordered" />
                        </label>
                    </div>
                </div>
                <div className="md:flex  gap-6">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text  font-semibold">Price</span>
                        </label>
                        <label className="input-group ">
                            <input type="text" name="price" placeholder="Price..." className="w-full input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-semibold">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" placeholder="Rating..." className="w-full input input-bordered" />
                        </label>
                    </div>
                </div>
                <div>
                <div className="form-control md:w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Image</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="image" placeholder="Image..." className="w-full input input-bordered" />
                        </label>
                    </div>
                </div>
                <button className="btn btn-block mt-4 bg-[#f6b09e] capitalize text-xl font-semibold hover:bg-[#f6b09e]">Add Product</button>
            </form>

        </div>
    );
};

export default AddProducts;