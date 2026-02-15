import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from '../context/useAuth'
export const LoginPage = () => {

    const { isAuthenticated, login } = useAuth();

    const navigate = useNavigate();

    useEffect(() => {
       
        if (isAuthenticated) {
            navigate("/home");
        }
    }, [isAuthenticated])

   
    const handleLogin = () => {

        login('fake-token');

        // luego aquí irá la lógica real
        navigate("/home", { replace: true });
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-slate-950">
            <div className="w-full max-w-md rounded-2xl bg-slate-900 p-8 shadow-xl">
                <h2 className="mb-6 text-center text-3xl font-bold text-white">
                    Login
                </h2>

                <input
                    type="email"
                    placeholder="Email"
                    className="mb-4 w-full rounded-lg bg-slate-800 p-3 text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="mb-6 w-full rounded-lg bg-slate-800 p-3 text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                />

                <button
                    onClick={handleLogin}
                    className="w-full rounded-lg bg-emerald-500 p-3 font-semibold text-white transition-colors hover:bg-emerald-600"
                >
                    Acceder
                </button>
            </div>
        </div>
    );
};