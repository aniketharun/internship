import React from 'react';

const Filters = ({ statusFilter, setStatusFilter, searchTerm, setSearchTerm }) => {
    return (
        <div className="row mb-4 g-3">
            {/* Search Filter */}
            <div className="col-md-8">
                <div className="input-group">
                    <span className="input-group-text bg-white border-end-0">
                        <i className="bi bi-search text-muted"></i>
                    </span>
                    <input
                        type="text"
                        className="form-control border-start-0 ps-0"
                        placeholder="Search by name or email..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            {/* Status Filter */}
            <div className="col-md-4">
                <select
                    className="form-select"
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                >
                    <option value="All">All Statuses</option>
                    <option value="Paid">Paid</option>
                    <option value="Pending">Pending</option>
                    <option value="Failed">Failed</option>
                </select>
            </div>
        </div>
    );
};

export default Filters;
