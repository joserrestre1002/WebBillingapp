import { Navbar } from "../components/Navbar";
import { useNavigate } from "react-router-dom";

export const LandingPage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-slate-950 text-white">
            <Navbar />

            {/* Espacio para compensar navbar fija */}
            <div className="pt-24">

                {/* Hero */}
                <section className="mt-20 flex flex-col items-center px-6 text-center">
                    <h2 className="mb-6 text-5xl font-extrabold">
                        Gestiona tu negocio de forma inteligente
                    </h2>

                    <p className="mb-8 max-w-2xl text-slate-400">
                        Controla facturación, clientes y estadísticas en una sola plataforma moderna y eficiente.
                    </p>

                    <button
                        onClick={() => navigate("/login")}
                        className="bg-emerald-500 hover:bg-emerald-600 px-8 py-3 rounded-xl text-lg font-semibold"
                    >
                        Comenzar ahora
                    </button>
                </section>

            </div>
        </div>
    );
};