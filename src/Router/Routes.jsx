import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../Pages/MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import AddProducts from "../Pages/AddProducts/AddProducts";
import ErrorPages from "../Pages/ErrorPages/ErrorPages";
import MyCarts from "../Pages/MyCarts/MyCarts";
import DisplayBrandProducts from "../components/DisplayBrandProducts/DisplayBrandProducts";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<ErrorPages></ErrorPages>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader:()=>fetch('../../public/brandsData.json')

        },
        {
            path: "/addProducts",
            element: <AddProducts></AddProducts>,
  
        },
        {
            path: "/myCarts",
            element: <MyCarts></MyCarts>,
  
        },
        {
            path: "/products/:brand_name",
            element: <DisplayBrandProducts></DisplayBrandProducts>,
          },
        
      ],
    },
  ]);
  export default router
