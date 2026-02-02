import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import SummaryCard from './components/SummaryCard';
import ServicesAnalytics from './components/ServicesAnalytics';
import ActivityList from './components/ActivityList';
import RevenueChart from './components/RevenueChart';
import ServiceDistributionChart from './components/ServiceDistributionChart';
import { metrics } from './data/mockData';
import { Users, Cloud, IndianRupee, LifeBuoy } from 'lucide-react';

function App() {
  const [searchTerm, setSearchTerm] = React.useState('');

  const getIcon = (title) => {
    switch (title) {
      case 'Total Clients': return <Users size={24} />;
      case 'Active Cloud Projects': return <Cloud size={24} />;
      case 'Monthly Revenue': return <IndianRupee size={24} />;
      case 'Open Support Tickets': return <LifeBuoy size={24} />;
      default: return <Cloud size={24} />;
    }
  };

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <Navbar onSearch={setSearchTerm} />

        <header className="mb-5 mt-4">
          <h2 className="fw-bold mb-1 text-white">Good Morning, Admin!</h2>
          <p className="text-secondary">Here's what's happening with Zymr Systems today.</p>
        </header>

        <section className="mb-5">
          <div className="row g-4">
            {metrics.map((metric, index) => (
              <div className="col-md-6 col-xl-3" key={index}>
                <SummaryCard
                  {...metric}
                  icon={getIcon(metric.title)}
                />
              </div>
            ))}
          </div>
        </section>

        <section className="mb-5">
          <div className="row g-4 mb-5">
            <div className="col-lg-8">
              <RevenueChart />
            </div>
            <div className="col-lg-4">
              <ServiceDistributionChart />
            </div>
          </div>

          <ServicesAnalytics />
        </section>

        <section>
          <div className="row">
            <div className="col-12">
              <ActivityList searchTerm={searchTerm} />
            </div>
          </div>
        </section>

        <footer className="mt-5 text-center text-secondary small py-4">
          &copy; 2026 Zymr Systems
        </footer>
      </div>
    </div>
  );
}

export default App;
