import React from 'react';
import { Search, Bell, Moon, Sun, User, LogOut, UserCircle } from 'lucide-react';

const Navbar = ({ onSearch }) => {
    const [showDropdown, setShowDropdown] = React.useState(false);

    return (
        <nav className="navbar-custom">
            <h5 className="mb-0 text-white">Analytics Dashboard</h5>
            <div className="d-flex align-items-center">
                <div className="position-relative me-4">
                    <input
                        type="text"
                        className="search-bar"
                        placeholder="Search activities..."
                        onChange={(e) => onSearch(e.target.value)}
                    />
                    <Search size={18} className="position-absolute" style={{ right: '12px', top: '10px', color: '#a0a0ab' }} />
                </div>
                <div className="d-flex gap-3 align-items-center">
                    <button className="btn btn-link p-0 text-secondary"><Bell size={20} /></button>
                    <button className="btn btn-link p-0 text-secondary"><Sun size={20} /></button>

                    <div className="ms-2 position-relative">
                        <button
                            className="btn btn-link p-0 d-flex align-items-center gap-2 text-decoration-none border-0"
                            onClick={() => setShowDropdown(!showDropdown)}
                        >
                            <span className="small d-none d-md-block text-white">Admin User</span>
                            <div className="bg-purple rounded-circle p-2" style={{ backgroundColor: '#3b82f6', width: '35px', height: '35px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <User size={18} color="white" />
                            </div>
                        </button>

                        {showDropdown && (
                            <div className="position-absolute end-0 mt-2 p-2 rounded shadow-lg border border-secondary border-opacity-25" style={{ backgroundColor: '#161a29', minWidth: '160px', zIndex: 1000 }}>
                                <button className="btn btn-link w-100 text-start text-white d-flex align-items-center gap-2 py-2 px-3 text-decoration-none border-0">
                                    <UserCircle size={18} />
                                    <span className="small">Profile</span>
                                </button>
                                <div className="border-top border-secondary border-opacity-25 my-1"></div>
                                <button className="btn btn-link w-100 text-start text-danger d-flex align-items-center gap-2 py-2 px-3 text-decoration-none border-0">
                                    <LogOut size={18} />
                                    <span className="small">Sign Out</span>
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
