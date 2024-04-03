import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Layout from "../Layout/Layout";
import About from "../pages/About/About";

const route = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            }
        ]
    }
])

export default route;