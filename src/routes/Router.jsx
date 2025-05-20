import { createBrowserRouter } from "react-router";
import Header from "../components/Header";
import HomeLayout from "../layouts/HomeLayout";
import CategoryNews from "../pages/CategoryNews";
import Home from "../pages/Home";
const router = createBrowserRouter(
    [
        {
            path:'/',
            element:<HomeLayout/>,
            children:[
                {
                    path:"/",
                    element:<Home/>
                },
                 {
                    path:"/category/:id",
                    element:<CategoryNews/>
                }
            ]
        },
         {
            path:'/auth',
            element:<h2>This is Auth</h2>,
        },
         {
            path:'/news',
            element:<h2>This is News</h2>,
        },
         {
            path:'/*',
            element:<h2>This is Error</h2>,
        },

        
    ]
)
export default router;