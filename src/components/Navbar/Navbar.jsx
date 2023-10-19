import { NavLink } from "react-router-dom";
import logoImg from "../../assets/logo.avif"
const Navbar = () => {


    const navLinks = <>
    < NavLink to="/" className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-[#1dd1a1] underline mr-4 font-semibold text-lg" : "mr-4 text-lg"
    }
    > Home </NavLink >

    < NavLink to="/addProducts" className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-[#1dd1a1] underline mr-4 font-semibold text-lg" : "mr-4 text-lg"
    }
    > AddProduct</NavLink >
    < NavLink to="/myCarts" className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-[#1dd1a1] underline mr-6 font-semibold text-lg" : "mr-6 text-lg"
    }
    > My Cart</NavLink >

</>



    return (
        <div className="shadow-lg">
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {navLinks}
      </ul>
    </div>
    <div className="flex flex-col lg:flex-row items-center">
    <img src={logoImg} alt="" className="w-[120px] h-[80px]"/>
    <a className="btn btn-ghost  text-xl">AL<span className="text-[#ee5253]">L</span>EN</a>
    </div>
  </div>
  <div className=" hidden lg:flex items-center">
    <ul className="menu menu-horizontal px-1">
      {navLinks}
    </ul>
  </div>
  <div className="flex gap-3 flex-col md:flex-row ml-16 lg:ml-10">
    <button className="btn text-[#1dd1a1] text-lg capitalize bg-white font-semibold">Login</button>
    <button className="btn text-[#1dd1a1] text-lg capitalize bg-white font-semibold">Register</button>
    <button className="btn text-[#1dd1a1] text-lg capitalize bg-white font-semibold">Dark</button>


  </div>
</div>
        </div>
    );
};

export default Navbar;