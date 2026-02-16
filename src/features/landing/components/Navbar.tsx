import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <header className="fixed top-0 left-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

                {/* Logo */}
                <h1
                    onClick={() => navigate("/")}
                    className="text-2xl font-bold text-emerald-400 cursor-pointer"
                >
                    Cree en ti Centro pscicoterapeutico
                </h1>

                {/* Desktop Menu */}
                <nav className="hidden items-center gap-8 md:flex">
                    <a href="#features" className="transition hover:text-emerald-400">
                        Features
                    </a>
                    <a href="#pricing" className="transition hover:text-emerald-400">
                        Pricing
                    </a>

                    <button
                        onClick={() => navigate("/login")}
                        className="bg-emerald-500 hover:bg-emerald-600 px-4 py-2 rounded-lg font-medium"
                    >
                        Login
                    </button>
                </nav>

                {/* Mobile Button */}
                <button
                    className="text-2xl md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    ☰
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="space-y-4 bg-slate-900 px-6 pb-4 md:hidden">
                    <a href="#features" className="block">
                        Features
                    </a>
                    <a href="#pricing" className="block">
                        Pricing
                    </a>
                    <button
                        onClick={() => navigate("/login")}
                        className="w-full bg-emerald-500 py-2 rounded-lg"
                    >
                        Login
                    </button>
                </div>
            )}
        </header>
    );
};