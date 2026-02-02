import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

const SummaryCard = ({ title, value, trend, color, icon }) => {
    const isPositive = trend.startsWith('+');

    return (
        <div className="card card-custom p-4 h-100">
            <div className="d-flex justify-content-between align-items-start mb-3">
                <div>
                    <p className="text-secondary small mb-1">{title}</p>
                    <h3 className="mb-0 fw-bold text-white">{value}</h3>
                </div>
                <div className="p-2 rounded-circle" style={{ backgroundColor: `${color}20` }}>
                    <div style={{ color }}>{icon}</div>
                </div>
            </div>
            <div className="d-flex align-items-center gap-1">
                <span className={`small ${isPositive ? 'text-success' : 'text-danger'} d-flex align-items-center`}>
                    {isPositive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                    {trend}
                </span>
                <span className="text-secondary small">vs last month</span>
            </div>
        </div>
    );
};

export default SummaryCard;
