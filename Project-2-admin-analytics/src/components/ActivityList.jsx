import React from 'react';
import { recentActivity } from '../data/mockData';
import { UserPlus, CloudLightning, FileCheck, RefreshCcw } from 'lucide-react';

const ActivityList = ({ searchTerm }) => {
    const getIcon = (type) => {
        switch (type) {
            case 'onboarding': return <UserPlus size={18} />;
            case 'deployment': return <CloudLightning size={18} />;
            case 'support': return <FileCheck size={18} />;
            default: return <RefreshCcw size={18} />;
        }
    };

    const getBadgeColor = (status) => {
        switch (status) {
            case 'Completed': return 'bg-success';
            case 'Success': return 'bg-info';
            case 'Resolved': return 'bg-primary';
            case 'In Progress': return 'bg-warning';
            default: return 'bg-secondary';
        }
    };

    const filteredActivities = recentActivity.filter(activity =>
        activity.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        activity.status.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="card card-custom p-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h5 className="mb-0 text-white">Recent Activity</h5>
                <button className="btn btn-sm text-secondary">View All</button>
            </div>
            <div className="activity-items">
                {filteredActivities.length > 0 ? (
                    filteredActivities.map((activity) => (
                        <div key={activity.id} className="d-flex mb-4 last-child-mb-0">
                            <div className="me-3 mt-1">
                                <div className="bg-dark rounded-circle p-2 border border-secondary border-opacity-25 text-secondary">
                                    {getIcon(activity.type)}
                                </div>
                            </div>
                            <div className="flex-grow-1">
                                <div className="d-flex justify-content-between">
                                    <p className="mb-1 fw-medium text-white">{activity.description}</p>
                                    <span className="small text-secondary">{activity.time}</span>
                                </div>
                                <span className={`badge ${getBadgeColor(activity.status)} bg-opacity-10 text-${getBadgeColor(activity.status).replace('bg-', '')} border border-${getBadgeColor(activity.status).replace('bg-', '')} border-opacity-25`}>
                                    {activity.status}
                                </span>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center py-5">
                        <p className="text-secondary mb-0">No activities found matching your search.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ActivityList;
