import { NavLink } from "react-router-dom";
import footerImg from "../../assets/footer.avif"
import { AiFillYoutube,AiFillFacebook,AiFillTwitterCircle} from 'react-icons/ai';

const Footer = () => {

    const navLinks = <>
        < NavLink to="/" 
        > Home </NavLink >
        < NavLink to="/addProducts" 
        > AddProduct</NavLink >
        < NavLink to="/myCarts" 
        > MyCart</NavLink >

    </>
    return (
        <div className="">
            <div className="hero " style={{ backgroundImage: `url(${footerImg})` }}>
                <div className="hero-overlay bg-opacity-80"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md flex flex-col lg:flex-row ite gap-2 lg:gap-72 items-center">
                       <div>
                       <a className="capitalize text-4xl font-semibold  text-white">A<span className="text-[#FF444A]">L</span>LEN</a>
                       </div>
                      
                    <nav>
                <header className="text-2xl text-white font-semibold">Quick Links</header>
                    <div className="grid grid-flow-col gap-6">
                    <ul className="flex gap-4  text-gray-200 text-base">
                        {navLinks}
                    </ul> 
                       
                    </div>
                    <header className="text-2xl text-white">Follow Us</header>
                    <div className="grid grid-flow-col gap-4 text-white text-3xl">
                        <a ><AiFillFacebook></AiFillFacebook></a>
                        <a><AiFillTwitterCircle></AiFillTwitterCircle></a>
                        <a><AiFillYoutube></AiFillYoutube></a>
                    </div>
                </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;