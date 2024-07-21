
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import GlobalLayout from "./layout";
import ErrorPage from "./pages/ErrorPage";
import { createBrowserRouter } from "react-router-dom";


const routes = [
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/about",
        element: <About />,
    },
    {
        path: "/contact",
        element: <Contact />,
    }
]

const router = createBrowserRouter([
    {
        path: "/",
        element: <GlobalLayout />,
        errorElement: <ErrorPage />,
        children: routes 
    },
   
]);


export default router;

