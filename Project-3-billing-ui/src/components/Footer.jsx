import React from 'react';

const Footer = () => {
    return (
        <footer className="py-4 mt-auto border-top bg-white">
            <div className="container-fluid px-4">
                <div className="d-flex align-items-center justify-content-between small">
                    <div className="text-muted">
                        Copyright &copy; {new Date().getFullYear()} Torry Harris. All rights reserved.
                    </div>
                    <div>
                        <a href="#" className="text-decoration-none text-muted me-3">Privacy Policy</a>
                        <a href="#" className="text-decoration-none text-muted">Terms &amp; Conditions</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
