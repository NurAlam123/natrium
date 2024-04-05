import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../Layout/Root";
import About from "../pages/About/About";
import Projects from "../pages/Projects/Projects";
import Error404 from "../pages/Error404/Error404";
import Contact from "../pages/Contact/Contact";

const route = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/projects',
                element: <Projects />
            },
        ]
    },
    {
        path: '/contact',
        element: <Contact />
    },
    {
        path: '*',
        element: <Error404 />
    }
])

export default route;