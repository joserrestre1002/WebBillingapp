import { createBrowserRouter } from 'react-router-dom';
import { LoginPage } from '../features/auth/pages/LoginPage';
import { HomePage } from '../features/home/pages/HomePage';
import { ProtectedRoute } from './ProtectedRoute';
import { PublicRoute } from "./PublicRoute";
export const router = createBrowserRouter([

    {
        path: '/',
        element: (
            <PublicRoute>
                <LoginPage />
            </PublicRoute>
        ),
    },
    {
        path: '/home',
        element: (
            <ProtectedRoute>
                <HomePage />
            </ProtectedRoute>
        )
    }
]);