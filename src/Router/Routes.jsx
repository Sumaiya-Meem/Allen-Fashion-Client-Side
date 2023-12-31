import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../Pages/MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import AddProducts from "../Pages/AddProducts/AddProducts";
import ErrorPages from "../Pages/ErrorPages/ErrorPages";
import MyCarts from "../Pages/MyCarts/MyCarts";
import DisplayBrandProducts from "../components/DisplayBrandProducts/DisplayBrandProducts";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import UpdateProduct from "../components/UpdateProduct/UpdateProduct";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<ErrorPages></ErrorPages>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader:()=>fetch('/brandsData.json')

        },
        {
            path: "/addProducts",
            element: <PrivateRoute><AddProducts></AddProducts></PrivateRoute>,
  
        },
        {
            path: "/myCarts",
            element: <PrivateRoute><MyCarts></MyCarts></PrivateRoute>,
            loader:()=>fetch('https://fashion-website-server-jx5pf6k71-meems-projects.vercel.app/addCart')
  
        },
        {
            path: "/products/:brand_name",
            element: <DisplayBrandProducts></DisplayBrandProducts>,
            loader:()=>fetch('https://fashion-website-server-jx5pf6k71-meems-projects.vercel.app/addproducts')
        },
        {
                path:"/detailsProducts/:id",
                element:<PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
                loader:({params})=>fetch(`https://fashion-website-server-jx5pf6k71-meems-projects.vercel.app/addproducts/${params.id}`)

        },
        {
          path:'/updateProduct/:id',
          element:<PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
          loader:({params})=>fetch(`https://fashion-website-server-jx5pf6k71-meems-projects.vercel.app/addproducts/${params.id}`)
        },
        {
          path: "/login",
          element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
    },
        
      ],
    },
  ]);
  export default router
