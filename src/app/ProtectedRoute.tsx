import type React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from "../features/auth/context/useAuth";

export const ProtectedRoute = ({ children }: {children: React.ReactNode} ) => {

    const { isAuthenticated, isLoading } = useAuth();


    if (isLoading) {
        return (<div className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
            Cargando...
        </div>)
    }

    if (!isAuthenticated) {
        return <Navigate to="/" replace/>
    }

    return <>{ children}</>
}

