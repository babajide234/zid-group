import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Landing from './pages/Landing';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                path:"/",
                element:<Landing/>
            }
        ]
    }
]);

export default router;