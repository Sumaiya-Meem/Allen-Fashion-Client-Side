import aboutImg from "../../assets/about.webp"
import { FaLocationDot} from 'react-icons/fa6';

import { AiFillPhone,AiOutlineMail} from 'react-icons/ai';

const About = () => {
    return (
        <div className=" mx-4">
            <div className="flex flex-col md:flex-row gap-2 mx-4 mt-14 mb-4"> 
                <div className="w-full md:w-2/4" >
                    <img src={aboutImg} alt="" />
                </div>
                <div className="w-full md:w-2/4" >
                    <h1 className="text-3xl font-semibold mb-2">
                    About Us</h1>
                    <p className="text-[#a1a0a0] mb-2"> Welcome to Allen ,we invite you to explore the heart and soul behind our curation of iconic brands like Gucci, Zara, Levi's, Adidas, Nike, and more. With an unwavering passion for fashion and a dedication to delivering top-tier products, we bring the world's most renowned brands to your fingertips. Join us on a journey through our history, values, and commitment to making your style aspirations a reality</p>
                    <div className="space-y-3">
                      <p className="flex gap-2 items-center"><span className="text-[#FF444A]">< AiFillPhone></AiFillPhone></span> Phone: 01423186549</p>
                      <p className="flex gap-2 items-center"><span className="text-[#FF444A]"><AiOutlineMail></AiOutlineMail></span> Email: attire@gmail.com</p>
                      <p className="flex gap-2 items-center"><span className="text-[#FF444A]"><FaLocationDot></FaLocationDot></span> Location: Dhaka,Bangldesh</p>
                                          
                    </div>
                    
                    <button className="btn btn-outline btn-info text-lg capitalize mt-4">Purchase Product</button>
                </div>

            </div>
        </div>
    );
};

export default About;