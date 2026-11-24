import {createBrowserRouter} from 'react-router-dom';
import Dashboard from '../features/auth/components/Dashboard';
import LoginForm from '../features/auth/components/LoginForm';
import RegisterForm from '../features/auth/components/RegisterForm'

 export const AppRouter = createBrowserRouter([
    {
        path: '/',
        element: <RegisterForm />,
    },
    {
        path: '/login',
        element: <LoginForm />,
    },
    {
        path: '/dashboard',
        element: <Dashboard />,
    },
]);