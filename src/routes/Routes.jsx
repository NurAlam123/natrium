import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Layout from "../Layout/Layout";
import About from "../pages/About/About";
import Projects from "../pages/Projects/Projects";

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
    }
])

export default route;