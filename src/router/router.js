import { createBrowserRouter } from 'react-router-dom';

import Default from "../screens/Default";
import Product from "../screens/Product";
import LoginForm from "../screens/Forms/LoginForm";
import Dictionary from '../screens/Dictionary/components/Dictionary';

import App from "../App";

const basename = process.env.NODE_ENV === 'production' ? '/desarrollo-react' : '/';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/default',
                element: <Default />,
            },
            {
                path: '/products',
                element: <Product />,
            },
            {
                path: '/login',
                element: <LoginForm />,
            },
            {
                path: '/dictionary',
                element: <Dictionary />,
            },
        ]
    }
],
    {
        basename:    basename
    }
);

export default routes;