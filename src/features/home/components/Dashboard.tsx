import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer,
} from "recharts";

const data = [
    { name: "Ene", value: 400 },
    { name: "Feb", value: 300 },
    { name: "Mar", value: 500 },
    { name: "Abr", value: 700 },
    { name: "May", value: 600 },
];

export const DashboardChart = () => {
    return (
        <div className="rounded-2xl bg-slate-900 p-6 shadow-lg">
            <h3 className="mb-4 text-lg font-semibold text-white">
                Ventas Mensuales
            </h3>

            <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="rounded-2xl bg-slate-900 p-6">
                    <p className="text-slate-400">Usuarios</p>
                    <h2 className="text-3xl font-bold">1,234</h2>
                </div>
            </div>

            <div className="h-72 w-full">
                <ResponsiveContainer>
                    <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                        <XAxis dataKey="name" stroke="#94a3b8" />
                        <YAxis stroke="#94a3b8" />
                        <Tooltip />
                        <Line
                            type="monotone"
                            dataKey="value"
                            stroke="#10b981"
                            strokeWidth={3}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};