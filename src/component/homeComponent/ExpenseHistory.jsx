import React from 'react';
import { Calendar, ReceiptText } from 'lucide-react';

const ExpenseHistory = ({ expenses }) => {
    // Dummy / Fallback data for this month's expense history (without category)
    const defaultExpenses = [
        { id: 1, date: "Nov 03, 2026", day: "Tuesday", amount: "৳1,250" },
        { id: 2, date: "Nov 02, 2026", day: "Monday", amount: "৳450" },
        { id: 3, date: "Nov 01, 2026", day: "Sunday", amount: "৳1,800" },
        { id: 4, date: "Oct 30, 2026", day: "Friday", amount: "৳2,400" },
        { id: 5, date: "Oct 28, 2026", day: "Wednesday", amount: "৳3,500" },
    ];

    const expenseList = expenses || defaultExpenses;

    return (
        <div className="w-full px-4 sm:px-6 py-6">
            {/* Outer wrapper container restricted to md:w-10/12 and centered */}
            <div className="w-full md:w-10/12 mx-auto">
                
                {/* Section Header */}
                <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                            <ReceiptText className="w-6 h-6 text-emerald-400" />
                            This Month's Expense History
                        </h2>
                        <p className="text-sm text-slate-400">A detailed log of all your expenses recorded for this month.</p>
                    </div>
                </div>

                {/* Table Container */}
                <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-xl overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-slate-800 bg-slate-950/50 text-slate-400 text-xs uppercase tracking-wider font-semibold">
                                    <th className="py-4 px-6">Date</th>
                                    <th className="py-4 px-6">Day</th>
                                    <th className="py-4 px-6 text-right">Expense Amount</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-800/60 text-sm text-slate-300">
                                {expenseList.map((item, index) => (
                                    <tr 
                                        key={item.id || index} 
                                        className="hover:bg-slate-800/40 transition-colors group"
                                    >
                                        {/* Date */}
                                        <td className="py-4 px-6 font-medium text-white flex items-center gap-2">
                                            <Calendar className="w-4 h-4 text-emerald-400/80" />
                                            {item.date}
                                        </td>

                                        {/* Day */}
                                        <td className="py-4 px-6 text-slate-400">
                                            <span className="px-2.5 py-1 bg-slate-800/80 rounded-md text-xs font-medium text-slate-300">
                                                {item.day}
                                            </span>
                                        </td>

                                        {/* Expense Amount */}
                                        <td className="py-4 px-6 text-right font-bold text-rose-400">
                                            -{item.amount}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Empty State Handler */}
                    {expenseList.length === 0 && (
                        <div className="py-12 text-center text-slate-500">
                            No expense records found for this month.
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

export default ExpenseHistory;