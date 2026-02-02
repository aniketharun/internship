import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { serviceCategoryData } from '../data/mockData';

const ServiceDistributionChart = () => {
    return (
        <div className="card card-custom p-4 h-100">
            <h5 className="mb-4 text-white">Service Category Allocation</h5>
            <div style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={serviceCategoryData}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={85}
                            paddingAngle={8}
                            dataKey="value"
                            stroke="none"
                        >
                            {serviceCategoryData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                        <Tooltip
                            contentStyle={{
                                backgroundColor: '#161a29',
                                border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: '8px',
                                color: '#fff'
                            }}
                            itemStyle={{ color: '#fff' }}
                        />
                        <Legend
                            verticalAlign="bottom"
                            align="center"
                            wrapperStyle={{ paddingTop: '20px' }}
                            formatter={(value) => <span style={{ color: '#a0a0ab', fontSize: '13px' }}>{value}</span>}
                        />
                    </PieChart>
                </ResponsiveContainer>
            </div>
            <div className="text-center mt-3">
                <h4 className="mb-0 text-white">1,200</h4>
                <p className="small text-secondary fw-medium">Services provided this month</p>
            </div>
        </div>
    );
};

export default ServiceDistributionChart;
