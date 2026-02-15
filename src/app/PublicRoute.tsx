import { Navigate } from "react-router-dom";
import { useAuth } from "../features/auth/context/useAuth";

export const PublicRoute = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const { isAuthenticated, isLoading } = useAuth();

    if (isLoading) return null;

    if (isAuthenticated) {
        return <Navigate to="/home" replace />;
    }

    return <>{children}</>;
};