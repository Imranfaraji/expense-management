import React from 'react';
import { ShoppingBag, Receipt, Calendar } from 'lucide-react';

const TodayExpense = ({ todayItems }) => {
    // Default or sample data without category
    const defaultItems = [
        { id: 1, item: "কলা (Banana)", amount: 10 },
        { id: 2, item: "নাস্তা (Breakfast)", amount: 180 },
        { id: 3, item: "কাগজ (Paper/Stationery)", amount: 400 },
    ];

    const itemList = todayItems || defaultItems;
    
    // Calculate total expense dynamically
    const totalExpense = itemList.reduce((sum, current) => sum + current.amount, 0);

    return (
        <div className="w-full px-4 sm:px-6 py-6">
            {/* Outer wrapper container restricted to md:w-10/12 and centered */}
            <div className="w-full md:w-10/12 mx-auto">
                
                {/* Section Header */}
                <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                            <ShoppingBag className="w-6 h-6 text-emerald-400" />
                            Today's Expense Breakdown
                        </h2>
                        <p className="text-sm text-slate-400">Detailed list of all expenses recorded for today.</p>
                    </div>
                    <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg text-xs text-slate-300">
                        <Calendar className="w-4 h-4 text-emerald-400" />
                        <span>Today, Nov 4, 2026</span>
                    </div>
                </div>

                {/* Table Container */}
                <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-xl overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-slate-800 bg-slate-950/50 text-slate-400 text-xs uppercase tracking-wider font-semibold">
                                    <th className="py-4 px-6 w-16">#</th>
                                    <th className="py-4 px-6">Expense Item / Description</th>
                                    <th className="py-4 px-6 text-right">Amount</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-800/60 text-sm text-slate-300">
                                {itemList.map((entry, index) => (
                                    <tr 
                                        key={entry.id || index} 
                                        className="hover:bg-slate-800/40 transition-colors group"
                                    >
                                        {/* Serial Number */}
                                        <td className="py-4 px-6 text-slate-500 font-mono text-xs">
                                            0{index + 1}
                                        </td>

                                        {/* Item Description */}
                                        <td className="py-4 px-6 font-medium text-white flex items-center gap-2">
                                            <Receipt className="w-4 h-4 text-emerald-400/80" />
                                            {entry.item}
                                        </td>

                                        {/* Amount */}
                                        <td className="py-4 px-6 text-right font-semibold text-rose-400">
                                            ৳{entry.amount.toLocaleString()}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>

                            {/* Table Footer: Total Expense */}
                            <tfoot>
                                <tr className="bg-slate-950/80 border-t border-slate-800 font-bold">
                                    <td colSpan="2" className="py-4 px-6 text-white text-right uppercase tracking-wider text-xs">
                                        Total Today's Expense:
                                    </td>
                                    <td className="py-4 px-6 text-right text-emerald-400 text-base sm:text-lg">
                                        ৳{totalExpense.toLocaleString()}
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>

                    {/* Empty State */}
                    {itemList.length === 0 && (
                        <div className="py-12 text-center text-slate-500">
                            No expenses recorded for today yet.
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

export default TodayExpense;
