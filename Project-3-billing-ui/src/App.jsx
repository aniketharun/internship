import { useState } from 'react'
import { billingData } from './data/billingData'
import Sidebar from './components/Sidebar'
import StatsCards from './components/StatsCards'
import BillingTable from './components/BillingTable'
import Footer from './components/Footer'


function App() {
  const [statusFilter, setStatusFilter] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')
  const [activeTab, setActiveTab] = useState('invoices')

  // Filter logic
  const filteredData = billingData.filter(item => {
    const matchesStatus = statusFilter === 'All' || item.status === statusFilter
    const matchesSearch =
      item.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.invoiceId.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesStatus && matchesSearch
  })

  return (
    <div className="d-flex min-vh-100 bg-light">
      <Sidebar />

      <main className="flex-grow-1 p-4 d-flex flex-column" style={{ backgroundColor: '#f5f7fa' }}>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fw-bold mb-0">Billing</h2>
          <div className="d-flex gap-2">
            <button className="btn btn-brand shadow-sm">
              <i className="bi bi-plus-lg me-2"></i>Create Invoice
            </button>

            <button className="btn btn-white border bg-white shadow-sm px-2">
              <i className="bi bi-grid-fill text-secondary"></i>
            </button>
            <button className="btn btn-white border bg-white shadow-sm px-2">
              <i className="bi bi-bell text-secondary"></i>
            </button>
          </div>
        </div>

        {activeTab === 'invoices' && <StatsCards />}

        <BillingTable
          data={filteredData}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <Footer />
      </main>
    </div>
  )
}

export default App
