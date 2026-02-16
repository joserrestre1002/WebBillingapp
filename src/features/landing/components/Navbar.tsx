import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <header className="fixed top-0 left-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

                {/* Logo */}
                <h1
                    onClick={() => navigate("/")}
                    className="text-2xl font-bold text-emerald-400 cursor-pointer"
                >
                    BillingApp
                </h1>

                {/* Desktop Menu */}
                <nav className="relative hidden items-center gap-8 md:flex">

                    {/* Dropdown Trigger */}
                    <div className="relative">
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="flex items-center gap-1 hover:text-emerald-400 transition"
                        >
                            Features
                            <span className="text-sm">▾</span>
                        </button>

                        {/* Dropdown Menu */}
                        {isDropdownOpen && (
                            <div className="absolute top-10 left-0 w-48 rounded-xl border border-slate-700 bg-slate-900 py-2 shadow-lg">
                                <button
                                    onClick={() => {
                                        navigate("/login");
                                        setIsDropdownOpen(false);
                                    }}
                                    className="block w-full text-left px-4 py-2 hover:bg-slate-800"
                                >
                                    Facturación
                                </button>

                                <button
                                    onClick={() => {
                                        navigate("/login");
                                        setIsDropdownOpen(false);
                                    }}
                                    className="block w-full text-left px-4 py-2 hover:bg-slate-800"
                                >
                                    Clientes
                                </button>
                            </div>
                        )}
                    </div>

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
                    <button
                        onClick={() => navigate("/login")}
                        className="block w-full text-left"
                    >
                        Facturación
                    </button>

                    <button
                        onClick={() => navigate("/login")}
                        className="block w-full text-left"
                    >
                        Clientes
                    </button>

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