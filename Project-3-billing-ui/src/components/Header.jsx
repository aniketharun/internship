import React from 'react';

const Header = () => {
    return (
        <nav className="navbar navbar-dark bg-primary shadow-sm mb-4">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1 fw-bold">
                    <i className="bi bi-receipt me-2"></i>
                    Billing Management
                </span>
            </div>
        </nav>
    );
};

export default Header;
