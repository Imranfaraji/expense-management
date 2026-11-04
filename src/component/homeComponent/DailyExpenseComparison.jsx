import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Cell } from 'recharts';

const data = [
  { day: 'Sat', expense: 1200 },
  { day: 'Sun', expense: 800 },
  { day: 'Mon', expense: 1450 },
  { day: 'Tue', expense: 950 },
  { day: 'Wed', expense: 1400 },
  { day: 'Thu', expense: 1250 },
  { day: 'Fri', expense: 1350 },
];

const customTicks = [0, 300, 600, 900, 1200, 1500];

export default function ExpenseChart() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl md:w-10/12 mx-auto"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-white">Weekly Expense Analytics</h3>
        
      </div>
      
      <div className="w-full h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
            <XAxis dataKey="day" stroke="#94a3b8" tick={{ fontSize: 12 }} />
            
            <YAxis 
              stroke="#94a3b8" 
              tick={{ fontSize: 11 }} 
              ticks={customTicks} 
              domain={[0, 1500]} 
            />

            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#0f172a', 
                borderColor: '#334155', 
                borderRadius: '8px', 
                color: '#fff' 
              }}
              cursor={{ fill: 'rgba(51, 65, 85, 0.4)' }}
            />

            <Bar 
              dataKey="expense" 
              radius={[6, 6, 0, 0]}
              isAnimationActive={true}
              animationBegin={300}
              animationDuration={1500}
              animationEasing="ease-out"
            >
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={entry.day === 'Fri' ? '#34d399' : '#10b981'} 
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}