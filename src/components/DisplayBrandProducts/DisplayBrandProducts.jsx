import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DisplayBrandProducts = () => {
    const { brand_name} = useParams();
    const [productLocal,setProductLocal]=useState([]);
    
    
    useEffect(() => {
        fetch('../../../public/brandsData.json')
            .then(res => res.json())
            .then(data => {
                setProductLocal(data);
            });
    }, []);
    // console.log(productLocal)
    const brandImages = productLocal.find(brand => brand.brand_name === brand_name)?.brand_image;

    console.log(brandImages)

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
            
        </div>
    );
};

export default DisplayBrandProducts;