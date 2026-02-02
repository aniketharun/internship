import React from 'react';

const StatsCards = () => {
    const [timeRange, setTimeRange] = React.useState('This Month');

    // MOCK DATA for different time ranges
    const statsData = {
        'This Month': {
            total: '₹24.8K',
            change: '8%',
            changeDirection: 'down', // 'up' or 'down'
            aging: {
                '0-30d': '₹8.2K',
                '31-60d': '₹9.4K',
                '61-90d': '₹4.8K',
                '90+d': '₹2.4K'
            },
            progress: {
                p30: 30, // %
                p60: 35,
                p90: 20,
                pOver: 15
            }
        },
        'Last Month': {
            total: '₹26.9K',
            change: '12%',
            changeDirection: 'up',
            aging: {
                '0-30d': '₹10.1K',
                '31-60d': '₹8.5K',
                '61-90d': '₹5.1K',
                '90+d': '₹3.2K'
            },
            progress: {
                p30: 38,
                p60: 32,
                p90: 19,
                pOver: 11
            }
        },
        'This Quarter': {
            total: '₹85.4K',
            change: '5%',
            changeDirection: 'up',
            aging: {
                '0-30d': '₹35.2K',
                '31-60d': '₹28.4K',
                '61-90d': '₹14.8K',
                '90+d': '₹7.0K'
            },
            progress: {
                p30: 41,
                p60: 33,
                p90: 17,
                pOver: 9
            }
        }
    };

    const currentStats = statsData[timeRange];

    return (
        <div className="row g-3 mb-4">
            {/* Outstanding Balance */}
            <div className="col-md-4">
                <div className="card border-0 shadow-sm h-100 p-3">
                    <div className="d-flex justify-content-between mb-2">
                        <span className="fw-bold">Outstanding Balance</span>
                        <div className="dropdown">
                            <button className="btn btn-sm btn-link text-decoration-none text-muted p-0 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ fontSize: '0.875rem' }}>
                                {timeRange}
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end shadow border-0">
                                <li><a className="dropdown-item" href="#" onClick={(e) => { e.preventDefault(); setTimeRange('This Month'); }}>This Month</a></li>
                                <li><a className="dropdown-item" href="#" onClick={(e) => { e.preventDefault(); setTimeRange('Last Month'); }}>Last Month</a></li>
                                <li><a className="dropdown-item" href="#" onClick={(e) => { e.preventDefault(); setTimeRange('This Quarter'); }}>This Quarter</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="d-flex align-items-baseline mb-3">
                        <h2 className="mb-0 fw-bold">{currentStats.total}</h2>
                        <span className={`small ms - 2 ${currentStats.changeDirection === 'down' ? 'text-danger' : 'text-success'} `}>
                            <i className={`bi bi - arrow - ${currentStats.changeDirection} `}></i> {currentStats.change} vs last {timeRange === 'This Quarter' ? 'qtr' : 'month'}
                        </span>
                    </div>

                    <div className="d-flex justify-content-between mb-1 small text-muted">
                        <span>Aging Breakdown</span>
                    </div>
                    <div className="progress mb-2" style={{ height: '8px' }}>
                        <div className="progress-bar" role="progressbar" style={{ width: `${currentStats.progress.p30}% `, backgroundColor: 'var(--brand-blue)' }}></div>
                        <div className="progress-bar bg-warning" role="progressbar" style={{ width: `${currentStats.progress.p60}% ` }}></div>
                        <div className="progress-bar bg-info" role="progressbar" style={{ width: `${currentStats.progress.p90}% ` }}></div>
                        <div className="progress-bar bg-secondary" role="progressbar" style={{ width: `${currentStats.progress.pOver}% ` }}></div>
                    </div>
                    <div className="d-flex justify-content-between small fw-bold">
                        <div>
                            <span className="text-muted d-block" style={{ fontSize: '0.7rem' }}>0-30d</span>
                            {currentStats.aging['0-30d']}
                        </div>
                        <div>
                            <span className="text-muted d-block" style={{ fontSize: '0.7rem' }}>31-60d</span>
                            {currentStats.aging['31-60d']}
                        </div>
                        <div>
                            <span className="text-muted d-block" style={{ fontSize: '0.7rem' }}>61-90d</span>
                            {currentStats.aging['61-90d']}
                        </div>
                        <div>
                            <span className="text-muted d-block" style={{ fontSize: '0.7rem' }}>90+d</span>
                            {currentStats.aging['90+d']}
                        </div>
                    </div>
                    <button className="btn btn-outline-dark btn-sm rounded-pill mt-3 w-50">Send All Invoice &gt;</button>
                </div>
            </div>

            {/* Billable Hours */}
            <div className="col-md-4">
                <div className="card border-0 shadow-sm h-100 p-3">
                    <div className="d-flex justify-content-between mb-4">
                        <span className="fw-bold">Billable Hours</span>
                        <span className="text-muted small">January 2026</span>
                    </div>

                    {/* Simplified Chart Visual */}
                    <div className="d-flex align-items-end justify-content-evenly mb-3" style={{ height: '100px' }}>
                        <div className="text-center d-flex flex-column align-items-center" style={{ width: '22%', height: '100%' }}>
                            <div className="rounded-top-2 mt-auto" style={{ height: '35%', width: '100%', backgroundColor: 'var(--brand-blue)', borderRadius: '4px 4px 0 0' }}></div>
                            <small className="text-muted d-block mt-2" style={{ fontSize: '0.7rem' }}>Send</small>
                        </div>
                        <div className="text-center d-flex flex-column align-items-center" style={{ width: '22%', height: '100%' }}>
                            <div className="rounded-top-2 mt-auto" style={{ height: '80%', width: '100%', backgroundColor: '#10b981', borderRadius: '4px 4px 0 0' }}></div>
                            <small className="text-muted d-block mt-2" style={{ fontSize: '0.7rem' }}>Outstanding</small>
                        </div>
                        <div className="text-center d-flex flex-column align-items-center" style={{ width: '22%', height: '100%' }}>
                            <div className="rounded-top-2 mt-auto" style={{ height: '28%', width: '100%', backgroundColor: '#f97316', borderRadius: '4px 4px 0 0' }}></div>
                            <small className="text-muted d-block mt-2" style={{ fontSize: '0.7rem' }}>Overdue</small>
                        </div>
                        <div className="text-center d-flex flex-column align-items-center" style={{ width: '22%', height: '100%' }}>
                            <div className="rounded-top-2 mt-auto" style={{ height: '45%', width: '100%', backgroundColor: '#9ca3af', borderRadius: '4px 4px 0 0' }}></div>
                            <small className="text-muted d-block mt-2" style={{ fontSize: '0.7rem' }}>Draft</small>
                        </div>
                    </div>

                    <div className="d-flex justify-content-between mt-auto mb-3">
                        <div className="ps-2 border-start border-3" style={{ borderColor: '#f97316' }}>
                            <div className="text-muted small">Overdue</div>
                            <div className="fw-bold fs-5">6</div>
                        </div>
                        <div className="ps-2 border-start border-3" style={{ borderColor: '#9ca3af' }}>
                            <div className="text-muted small">Draft</div>
                            <div className="fw-bold fs-5">4</div>
                        </div>
                    </div>
                    <div className="d-flex mt-2 gap-2">
                        <button className="btn btn-white border btn-sm flex-grow-1 fw-bold shadow-sm py-2">Remind All <i className="bi bi-chevron-right small"></i></button>
                        <button className="btn btn-white border btn-sm flex-grow-1 fw-bold shadow-sm py-2">Review Drafts <i className="bi bi-chevron-right small"></i></button>
                    </div>
                </div>
            </div>

            {/* Revenue at Risk */}
            <div className="col-md-4">
                <div className="card border-0 shadow-sm h-100 p-3">
                    <div className="d-flex justify-content-between mb-2">
                        <span className="fw-bold">Revenue at Risk</span>

                    </div>
                    <h2 className="mb-0 fw-bold">₹5,200</h2>
                    <p className="text-muted small mb-3">Overdue balance 31+ days</p>

                    <h6 className="text-muted small fw-bold text-uppercase mb-2">Priority Action</h6>
                    <div className="d-flex justify-content-between mb-3">
                        <div className="ps-2 border-start border-3 border-danger">
                            <div className="text-muted small">Oldest: 31 days</div>
                            <div className="fw-bold">6 Overdue</div>
                        </div>
                        <div className="ps-2 border-start border-3 border-brand">
                            <div className="text-muted small">Ready to send</div>
                            <div className="fw-bold">4 Pending</div>
                        </div>
                        <div className="ps-2 border-start border-3 border-danger">
                            <div className="text-muted small">Under ₹500</div>
                            <div className="fw-bold">2 Retainers</div>
                        </div>
                    </div>
                    <button className="btn btn-outline-dark btn-sm rounded-pill mt-auto w-50">View All Priorities &gt;</button>
                </div>
            </div>
        </div>
    );
};

export default StatsCards;
