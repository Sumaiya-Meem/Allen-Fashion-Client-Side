import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../Pages/MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import AddProducts from "../Pages/AddProducts/AddProducts";
import ErrorPages from "../Pages/ErrorPages/ErrorPages";
import MyCarts from "../Pages/MyCarts/MyCarts";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<ErrorPages></ErrorPages>,
      children: [
        {
          path: "/",
          element: <Home></Home>,

        },
        {
            path: "/addProducts",
            element: <AddProducts></AddProducts>,
  
        },
        {
            path: "/myCarts",
            element: <MyCarts></MyCarts>,
  
        },
        
      ],
    },
  ]);
  export default router
