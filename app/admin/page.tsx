import { DashboardOverview } from './dahsboardOverview'
import DashboardCards from './dashboardCards'
import DashboardHeader from './dashboardHeader'

export default function DashboardPage() {
  return (
    <main className="main">
      <DashboardHeader />
      <DashboardOverview />
      <DashboardCards />
    </main>
  )
}