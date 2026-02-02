import React from 'react';
import { LayoutDashboard, Cloud, BarChart2, MessageSquare, Settings, Users, Briefcase } from 'lucide-react';

const Sidebar = () => {
    const navItems = [
        { name: 'Dashboard', icon: <LayoutDashboard size={20} />, active: true },
        { name: 'Cloud Projects', icon: <Cloud size={20} /> },
        { name: 'Clients', icon: <Users size={20} /> },
        { name: 'Services', icon: <Briefcase size={20} /> },
        { name: 'Analytics', icon: <BarChart2 size={20} /> },
        { name: 'Support', icon: <MessageSquare size={20} /> },
        { name: 'Settings', icon: <Settings size={20} /> },
    ];

    return (
        <div className="sidebar">
            <div className="d-flex align-items-center mb-5 px-3">
                <img src="/zymr-logo.png" alt="Zymr Logo" style={{ width: '100%', height: 'auto', maxWidth: '180px' }} />
            </div>
            <nav>
                {navItems.map((item, index) => (
                    <a
                        key={index}
                        href="#"
                        className={`nav-link-custom ${item.active ? 'active' : ''}`}
                    >
                        {item.icon}
                        {item.name}
                    </a>
                ))}
            </nav>

            <div className="mt-auto px-1 pt-5">
                <div className="card-custom p-3 glass-effect">
                    <p className="small mb-1 text-secondary text-uppercase fw-bold">Cloud Usage</p>
                    <div className="d-flex justify-content-between mb-2">
                        <span className="small">Storage</span>
                        <span className="small fw-bold">78%</span>
                    </div>
                    <div className="progress" style={{ height: '6px', backgroundColor: '#333' }}>
                        <div className="progress-bar" style={{ width: '78%', backgroundColor: '#3b82f6' }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
