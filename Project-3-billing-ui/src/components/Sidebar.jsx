import React from 'react';
import logo from '../assets/company-logo.png';


const Sidebar = () => {
    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 bg-white" style={{ width: '250px', height: '100vh', borderRight: '1px solid #eee' }}>
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                <img src={logo} alt="Company Logo" style={{ maxWidth: '180px', height: 'auto', padding: '10px' }} />
            </a>
            <br />
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <a href="#" className="nav-link link-dark" aria-current="page">
                        <i className="bi bi-house-door me-2"></i>
                        Dashboard
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link link-dark">
                        <i className="bi bi-inbox me-2"></i>
                        Intake
                        <span className="badge bg-brand ms-auto float-end">2</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link link-dark">
                        <i className="bi bi-briefcase me-2"></i>
                        Matters
                    </a>
                </li>
                <li>
                    <div className="text-secondary small fw-bold mt-3 mb-2 px-3">FINANCE</div>
                </li>
                <li>
                    <a href="#" className="nav-link active">
                        <i className="bi bi-currency-rupee me-2"></i>
                        Billing
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link link-dark">
                        <i className="bi bi-bar-chart me-2"></i>
                        Report
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link link-dark">
                        <i className="bi bi-calendar3 me-2"></i>
                        Calendar
                    </a>
                </li>
            </ul>
            <hr />
            <ul className="nav nav-pills flex-column">
                <li>
                    <a href="#" className="nav-link link-dark">
                        <i className="bi bi-gear me-2"></i>
                        Settings
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link link-dark">
                        <i className="bi bi-question-circle me-2"></i>
                        Help & Support
                    </a>
                </li>
            </ul>
            <hr />
            <div className="dropdown">
                <a href="#" className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
                    <div className="profile-pic-container bg-secondary bg-opacity-25 rounded-circle d-flex align-items-center justify-content-center me-2" style={{ width: '32px', height: '32px' }}>
                        <i className="bi bi-person-fill text-secondary"></i>
                    </div>
                    <div>
                        <strong>John Doe</strong>
                        <div className="text-muted small">Admin</div>
                    </div>
                </a>
                <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
                    <li><a className="dropdown-item" href="#">Profile</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Sign out</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
