import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";

const Review = () => {
    const [clientReview,setClientReview] =useState([]);

    useEffect(()=>{
        fetch('reviewData.json')
        .then(res=>res.json())
        .then(data=>setClientReview(data))
    },[])
    // console.log(clientReview)

    return (
        <div className="mt-10 px-0 lg:px-8">
            <h1 className="text-center text-3xl font-semibold mb-10"> Clients Says</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 shadow-md mx-4">
                {
                    clientReview.map(reviews => <ReviewCard key={reviews.id} reviews={reviews}></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default Review;