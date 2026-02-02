import React from 'react';
import PaymentTable from './PaymentTable';
import { paymentData } from '../data/paymentData';

const BillingTable = ({ data, searchTerm, setSearchTerm, statusFilter, setStatusFilter, activeTab, setActiveTab }) => {
    const getStatusBadge = (status) => {
        // Matching the screenshot colors
        switch (status) {
            case 'Paid':
                return 'bg-success bg-opacity-10 text-success';
            case 'Sent':
                return 'bg-primary bg-opacity-10 text-primary';
            case 'Overdue':
                return 'bg-danger bg-opacity-10 text-danger';
            case 'Draft':
                return 'bg-secondary bg-opacity-10 text-secondary';
            default:
                return 'bg-light text-dark';
        }
    };

    return (
        <div className="card shadow-sm border-0 rounded-4">
            <div className="card-header bg-white border-0 py-3 d-flex justify-content-between align-items-center">
                <div className="btn-group" role="group">
                    <button
                        type="button"
                        className={`btn btn-sm ${activeTab === 'invoices' ? 'btn-light fw-bold' : 'btn-white text-muted'}`}
                        onClick={() => setActiveTab('invoices')}
                    >
                        Invoices
                    </button>
                    <button
                        type="button"
                        className={`btn btn-sm ${activeTab === 'payments' ? 'btn-light fw-bold' : 'btn-white text-muted'}`}
                        onClick={() => setActiveTab('payments')}
                    >
                        Payment
                    </button>
                </div>
                <div className="d-flex gap-2">
                    <div className="input-group input-group-sm" style={{ width: '250px' }}>
                        <span className="input-group-text bg-white border-end-0"><i className="bi bi-search text-muted"></i></span>
                        <input
                            type="text"
                            className="form-control border-start-0 ps-0"
                            placeholder={activeTab === 'invoices' ? 'Search Invoice' : 'Search Payment'}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    {activeTab === 'invoices' && (
                        <div className="dropdown">
                            <button className="btn btn-sm btn-white border d-flex align-items-center gap-2 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {statusFilter === 'All' ? 'All Status' : statusFilter}
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li><button className="dropdown-item" onClick={() => setStatusFilter('All')}>All Status</button></li>
                                <li><button className="dropdown-item" onClick={() => setStatusFilter('Paid')}>Paid</button></li>
                                <li><button className="dropdown-item" onClick={() => setStatusFilter('Sent')}>Sent</button></li>
                                <li><button className="dropdown-item" onClick={() => setStatusFilter('Overdue')}>Overdue</button></li>
                                <li><button className="dropdown-item" onClick={() => setStatusFilter('Draft')}>Draft</button></li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
            <div className="card-body p-0">
                {activeTab === 'invoices' ? (
                    <div className="table-responsive">
                        <table className="table table-hover align-middle mb-0">
                            <thead className="bg-light text-secondary text-uppercase small">
                                <tr>
                                    <th scope="col" className="ps-4 py-3" style={{ width: '40px' }}><input type="checkbox" className="form-check-input" /></th>
                                    <th scope="col" className="py-3">INV#</th>
                                    <th scope="col" className="py-3">Client</th>
                                    <th scope="col" className="py-3">Model</th>
                                    <th scope="col" className="py-3">Due Date</th>
                                    <th scope="col" className="py-3 text-end">Amount</th>
                                    <th scope="col" className="py-3 text-center">Status</th>
                                    <th scope="col" className="pe-4 py-3 text-end">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.length > 0 ? (
                                    data.map((item) => (
                                        <tr key={item.id}>
                                            <td className="ps-4"><input type="checkbox" className="form-check-input" /></td>
                                            <td className="fw-bold">{item.invoiceId}</td>
                                            <td>
                                                <div className="fw-bold">{item.client}</div>
                                                <div className="text-muted small">{item.clientSub}</div>
                                            </td>
                                            <td>
                                                <span className="badge bg-light text-dark border rounded-pill px-3 py-2 fw-normal text-secondary">{item.model}</span>
                                            </td>
                                            <td className="fw-medium">{item.dueDate}</td>
                                            <td className="fw-bold text-end">₹{item.amount.toLocaleString('en-IN')}</td>
                                            <td className="text-center">
                                                <span className={`badge ${getStatusBadge(item.status)} px-3 py-2 rounded-2 fw-bold`} style={{ minWidth: '80px' }}>
                                                    {item.status}
                                                </span>
                                            </td>
                                            <td className="pe-4 text-end">
                                                <a href="#" className="text-decoration-none fw-bold" style={{ color: 'var(--brand-blue)' }}>{item.action}</a>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="8" className="text-center py-5 text-muted">
                                            No invoices found.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                            <tfoot className="bg-white border-top">
                                <tr>
                                    <td colSpan="8" className="py-3 ps-4">
                                        <div className="d-flex align-items-center gap-3">
                                            <div className="form-check mb-0">
                                                <input className="form-check-input" type="checkbox" id="selectAllBottom" />
                                                <label className="form-check-label text-muted" htmlFor="selectAllBottom">Select All</label>
                                            </div>
                                            <div className="ms-auto d-flex gap-2">
                                                <button className="btn btn-sm btn-white border">Send Selected</button>
                                                <button className="btn btn-sm btn-white border">Send Reminders</button>
                                                <button className="btn btn-sm btn-brand shadow-sm">Record Payment</button>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                ) : (
                    <PaymentTable data={paymentData} />
                )}
            </div>
        </div>
    );
};

export default BillingTable;
