import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { monthlyPerformance } from '../data/mockData';

const RevenueChart = () => {
    return (
        <div className="card card-custom p-4 h-100">
            <h5 className="mb-4 text-white">Revenue vs Operating Costs</h5>
            <div style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                        data={monthlyPerformance}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                    >
                        <defs>
                            <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorCost" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="#f59e0b" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#a0a0ab', fontSize: 12 }}
                            dy={10}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#a0a0ab', fontSize: 12 }}
                            dx={-10}
                            tickFormatter={(value) => new Intl.NumberFormat('en-IN', {
                                style: 'currency',
                                currency: 'INR',
                                maximumSignificantDigits: 3
                            }).format(value)}
                        />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: '#161a29',
                                border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: '8px',
                                color: '#fff'
                            }}
                            itemStyle={{ color: '#fff' }}
                            formatter={(value) => new Intl.NumberFormat('en-IN', {
                                style: 'currency',
                                currency: 'INR',
                                maximumFractionDigits: 0
                            }).format(value)}
                        />
                        <Area
                            type="monotone"
                            dataKey="revenue"
                            stroke="#3b82f6"
                            strokeWidth={3}
                            fillOpacity={1}
                            fill="url(#colorRev)"
                        />
                        <Area
                            type="monotone"
                            dataKey="costs"
                            stroke="#f59e0b"
                            strokeWidth={3}
                            fillOpacity={1}
                            fill="url(#colorCost)"
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default RevenueChart;
