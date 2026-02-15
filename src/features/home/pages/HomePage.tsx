import { useNavigate } from "react-router-dom";
import { DashboardChart } from "../components/Dashboard";
import { useAuth } from "../../auth/context/useAuth";

export const HomePage = () => {

    const { logout } = useAuth();

    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/", { replace: true });
    };


    return (
        <div className="min-h-screen bg-slate-950 p-10 text-white">
            <div className="mb-8 flex items-center justify-between">
                <h1 className="text-3xl font-bold">Home</h1>

                <button
                    onClick={handleLogout}
                    className="rounded-lg bg-red-200 px-4 py-2 hover:bg-green-300"
                >
                    Logout
                </button>
            </div>

            <div className="rounded-xl bg-slate-900 p-6">
                Bienvenido al sistema ??
            </div>

            <div className="grid grid-cols-12 gap-4 bg-amber-200 p-4">
                <div className="col-span-12 rounded-xl bg-white p-4 md:col-span-6">
                    <DashboardChart />
                </div>
                <div className="col-span-12 rounded-xl bg-white p-4 md:col-span-6">
                    <DashboardChart />
                </div>
            </div>

            <div className="grid grid-cols-12 gap-4 bg-red-100 p-4">

              

                <div className="col-span-12 rounded-xl bg-white p-4 md:col-span-4">
                    <DashboardChart />
                </div>

                <div className="col-span-12 rounded-xl bg-white p-4 md:col-span-4">
                    <DashboardChart />
                </div>

                <div className="col-span-12 rounded-xl bg-white p-4 md:col-span-4">
                    <DashboardChart />
                </div>
            </div>
          
        </div>
    );
};