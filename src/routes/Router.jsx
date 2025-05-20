import { createBrowserRouter } from "react-router";
import Header from "../components/Header";
import HomeLayout from "../layouts/HomeLayout";
import CategoryNews from "../pages/CategoryNews";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Authentication from "../layouts/Authentication";
const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <HomeLayout />,
            children: [
                {
                    path: "/",
                    element: <Home />
                },
                {
                    path: "/category/:id",
                    element: <CategoryNews />,
                    loader: () => fetch('/news.json')
                }
            ]
        },
        {
            path: '/auth',
            element: <Authentication/>,
            children: [
                {
                    path: "login",
                    element: <Login></Login>,
                },
                {
                    path:"registration",
                    element:<Register></Register>
                }
            ]
        },
        {
            path: '/news',
            element: <h2>This is News</h2>,
        },
        {
            path: '/*',
            element: <h2>This is Error</h2>,
        },


    ]
)
export default router;