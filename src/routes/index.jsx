import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Inicio from '../Pages/Inicio/Inicio';
import Doados from '../Pages/Doados/Doados';
import QueroDoar from '../Pages/QueroDoar/QueroDoar';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Inicio />
            },
            {
                path: '/doados',
                element: <Doados />
            },
            {
                path: '/quero-doar',
                element: <QueroDoar />
            }
        ]
    }
]);
