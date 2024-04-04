import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Layout from "../Layout/Layout";
import About from "../pages/About/About";
import Projects from "../pages/Projects/Projects";
import Error404 from "../pages/Error404/Error404";

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
            },
            {
                path: '/projects',
                element: <Projects />
            }
        ],
    },
    {
        path: '*',
        element: <Error404 />
    }
])

export default route;