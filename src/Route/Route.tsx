import Layout from "../Layout/Layout"
import Home from "../Pages/LandingPage/Home"
import WorkSpace from "../Pages/LandingPage/WorkSpace"
import Resources from "../Pages/LandingPage/Resources";
import Cohort from "../Pages/Internal/WorkSpace/Cohort";




export const Route = [
    {
        path:"/",
        element: <Layout/>,
        children: [
            {
                path:"/",
                element: <Home/>
            },
            {
                path:"/workspace",
                element: <WorkSpace/>
            },
            {
                path:"/resources",
                element: <Resources/>
            }
            
        ]
    }  

]