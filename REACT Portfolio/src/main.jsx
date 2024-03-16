import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './pages/About.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Resume from './pages/Resume.jsx';
import Contact from './pages/Contact.jsx';
import './index.css';


const router = createBrowserRouter([

    {
        path: '/About', 
        element: <About />,

    }, 
    {
        path: '/Portfolio', 
        element: <Portfolio />,
    }, 
    {
        path: '/Resume', 
        element: <Resume />,
    }, 
    {
        path: '/Contact', 
        element: <Contact />,
    },
]);


ReactDOM.createRoot(document.getElementById('root')).render(

<RouterProvider router={router} />

)
