import React from 'react';
import { Wallet, ArrowDownRight, TrendingDown, PiggyBank } from 'lucide-react';

const DisplayExpense = ({ summaryData }) => {
    // ডামি বা ফলব্যাক ডেটা (যদি ব্যাকএন্ড থেকে ডেটা না আসে)
    const defaultData = {
        totalDeposit: 0,
        todaysExpense: 0,
        monthlyExpense: 0,
        remainingBalance: 0
    };

    // যদি প্রপস বা ব্যাকএন্ড থেকে ডেটা আসে তা ব্যবহার করবে, না হলে ডিফল্ট ডেটা দেখাবে
    const data = summaryData || defaultData;

    // টেমপ্লেটের জন্য কার্ড কনফিগারেশন অ্যারে
    const stats = [
        {
            title: "Total Deposit This Month",
            amount: `৳${(data.totalDeposit || 0).toLocaleString()}`,
            change: "+12% from last month",
            icon: Wallet,
            borderColor: "border-emerald-500/20",
            bgColor: "bg-emerald-500/10",
            textColor: "text-emerald-400",
            badgeBg: "bg-emerald-500/10 text-emerald-400"
        },
        {
            title: "Today's Expense",
            amount: `৳${(data.todaysExpense || 0).toLocaleString()}`,
            change: "Updated today",
            icon: ArrowDownRight,
            borderColor: "border-blue-500/20",
            bgColor: "bg-blue-500/10",
            textColor: "text-blue-400",
            badgeBg: "bg-blue-500/10 text-blue-400"
        },
        {
            title: "This Month's Expense",
            amount: `৳${(data.monthlyExpense || 0).toLocaleString()}`,
            change: "Expense tracked",
            icon: TrendingDown,
            borderColor: "border-amber-500/20",
            bgColor: "bg-amber-500/10",
            textColor: "text-amber-400",
            badgeBg: "bg-amber-500/10 text-amber-400"
        },
        {
            title: "Remaining Balance",
            amount: `৳${(data.remainingBalance || 0).toLocaleString()}`,
            change: "Safe zone",
            icon: PiggyBank,
            borderColor: "border-teal-500/20",
            bgColor: "bg-teal-500/10",
            textColor: "text-teal-400",
            badgeBg: "bg-teal-500/10 text-teal-400"
        }
    ];

    return (
        <div className="w-full px-4 sm:px-6 py-6">
            {/* Outer wrapper container restricted to md:w-10/12 and centered */}
            <div className="w-full md:w-10/12 mx-auto">
                
                {/* Section Header */}
                <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Dashboard Overview</h2>
                        <p className="text-sm text-slate-400">Here is your financial summary for the current period.</p>
                    </div>
                </div>

                {/* 4 Stat Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    {stats.map((stat, index) => {
                        const IconComponent = stat.icon;
                        return (
                            <div 
                                key={index} 
                                className={`bg-slate-900 border ${stat.borderColor} rounded-2xl p-5 shadow-lg transition-all hover:border-slate-700 hover:shadow-xl group`}
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-sm font-medium text-slate-400">{stat.title}</span>
                                    <div className={`p-2.5 rounded-xl ${stat.bgColor} ${stat.textColor} transition-transform group-hover:scale-110`}>
                                        <IconComponent className="w-5 h-5" />
                                    </div>
                                </div>

                                <div className="flex items-baseline justify-between">
                                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                                        {stat.amount}
                                    </h3>
                                </div>

                                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${stat.badgeBg}`}>
                                        {stat.change}
                                    </span>
                                    <span className="text-xs text-slate-500">Live API</span>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </div>
    );
};

export default DisplayExpense;