import React from 'react';

const PaymentTable = ({ data }) => {
    const getStatusBadge = (status) => {
        switch (status) {
            case 'Completed':
                return 'bg-success bg-opacity-10 text-success';
            case 'Pending':
                return 'bg-warning bg-opacity-10 text-warning';
            case 'Failed':
                return 'bg-danger bg-opacity-10 text-danger';
            case 'Processing':
                return 'bg-info bg-opacity-10 text-info';
            default:
                return 'bg-light text-dark';
        }
    };

    return (
        <div className="table-responsive">
            <table className="table table-hover align-middle">
                <thead>
                    <tr>
                        <th><input type="checkbox" className="form-check-input" /></th>
                        <th className="text-uppercase">Payment ID</th>
                        <th className="text-uppercase">Client</th>
                        <th className="text-uppercase">Method</th>
                        <th className="text-uppercase">Date</th>
                        <th className="text-uppercase">Amount</th>
                        <th className="text-uppercase">Status</th>
                        <th className="text-uppercase">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((payment) => (
                        <tr key={payment.id}>
                            <td><input type="checkbox" className="form-check-input" /></td>
                            <td className="fw-bold">{payment.paymentId}</td>
                            <td>
                                <div className="fw-bold">{payment.client}</div>
                            </td>
                            <td>
                                <span className="badge bg-light text-dark border">{payment.method}</span>
                            </td>
                            <td className="text-muted">{payment.date}</td>
                            <td className="fw-bold">₹{payment.amount.toLocaleString('en-IN')}</td>
                            <td>
                                <span className={`badge ${getStatusBadge(payment.status)} fw-normal px-2 py-1`}>
                                    {payment.status}
                                </span>
                            </td>
                            <td>
                                <a href="#" className="text-decoration-none text-purple fw-bold">View Details</a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PaymentTable;
