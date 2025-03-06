import  { createBrowserRouter, RouterProvider} from 'react-router-dom';
import App from '../App';
import Home from '../components/Home';
import Shop from '../components/Shop';
import About from '../components/About';
import Blog from '../components/Blog';
import SingleBook from '../components/SingleBook';
import DashBoardLayout from '../components/DashBoardLayout';
import UploadBook from '../components/UploadBook';
import Dashboard from '../components/Dashboard';
import ManageBook from '../components/ManageBook';
import EditBook from '../components/EditBook';
import Signup from '../components/Signup';
import Documentation from '../Documentation';
Shop

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children:[
            {
                path: "/",
                element: <Home />,
            },
            {
                path:"/shop",
                element:<Shop />
            },
            {
                path:"/about",
                element:<About />
            },
            
            {
                path:"/blog",
                element:<Blog />
            },
            {
                path:"/book/:id",
                element:<SingleBook/>,
                loader: ({params}) => fetch(`http://localhost:5000/book/${params.id}`)
            },
        
        ]
    },
    {
        path: "/admin/dashboard",
        element:<DashBoardLayout />,

        children:[
            {
                path:"/admin/dashboard",
                element:<Dashboard />
            },
            {
                path:"/admin/dashboard/upload",
                element:<UploadBook />
            },
            {
                path:"/admin/dashboard/manage",
                element:<ManageBook />
            },
            {
                path:"/admin/dashboard/edit-books/:id",
                element:<EditBook />,
                loader: ({params}) => fetch(`http://localhost:5000/book/${params.id}`)
            },
            {
                path:"admin/dashboard/docs",
                element:<Documentation />

            }
            
        ]
    },
    {
        path:"signup",
        element:<Signup />
    }
]);

export default router;