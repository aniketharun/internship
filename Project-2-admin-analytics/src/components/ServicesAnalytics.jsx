import React from 'react';
import { cloudUsage, projectCompletion } from '../data/mockData';

const ServicesAnalytics = () => {
    return (
        <div className="row g-4">
            <div className="col-lg-6">
                <div className="card card-custom p-4 h-100">
                    <h5 className="mb-4 text-white">Cloud Services Distribution</h5>
                    {cloudUsage.map((item, index) => (
                        <div key={index} className="mb-4">
                            <div className="d-flex justify-content-between mb-2">
                                <span className="text-secondary">{item.provider} Usage</span>
                                <span className="fw-bold">{item.usage}%</span>
                            </div>
                            <div className="progress" style={{ height: '8px', backgroundColor: '#333' }}>
                                <div
                                    className="progress-bar"
                                    style={{ width: `${item.usage}%`, backgroundColor: item.color }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="col-lg-6">
                <div className="card card-custom p-4 h-100">
                    <h5 className="mb-4 text-white">Project Milestones</h5>
                    <div className="table-responsive">
                        <table className="table table-dark table-borderless align-middle mb-0">
                            <thead>
                                <tr className="text-secondary small">
                                    <th>Project Name</th>
                                    <th>Progress</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {projectCompletion.map((project, index) => (
                                    <tr key={index}>
                                        <td className="ps-0 text-white">{project.name}</td>
                                        <td style={{ width: '120px' }}>
                                            <div className="progress" style={{ height: '6px', backgroundColor: '#333' }}>
                                                <div
                                                    className="progress-bar bg-purple"
                                                    style={{ width: `${project.progress}%`, backgroundColor: '#3b82f6' }}
                                                ></div>
                                            </div>
                                        </td>
                                        <td>
                                            <span className={`badge rounded-pill ${project.status === 'On Track' ? 'bg-success-subtle text-success' : 'bg-danger-subtle text-danger'}`}>
                                                {project.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesAnalytics;
