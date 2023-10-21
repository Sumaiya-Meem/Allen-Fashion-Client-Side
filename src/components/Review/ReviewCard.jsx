/* eslint-disable react/prop-types */

import { BiSolidQuoteRight} from 'react-icons/bi';
const ReviewCard = ({reviews}) => {
    const {image,review,name}=reviews;
    console.log(image,review,name)

    
    return (
        <div className="bg-[#f2ddd8] rounded-lg p-2 ">
            <div className='flex gap-3'>
                <img src={image} alt=""  className="w-16 h-16 rounded-full"/>
                <div className='flex gap-5'>
                  <span className='text-[#41b497] text-3xl'><BiSolidQuoteRight></BiSolidQuoteRight></span>
                  <div>
                    <p className='text-[#666565]'>{review}</p>
                  </div>
                </div>
            </div>
           <div className='flex justify-end text-[#41b497]'> <h4> -{name}</h4></div>
            
        </div>
    );
};

export default ReviewCard;