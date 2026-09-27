/* UI-ONLY page — composes static design sections. No logic. */
import Background from "../components/Background.jsx";
import FilterBar from "../components/FilterBar.jsx";
import Greeting from "../components/Greeting.jsx";
import MobileBottomNav from "../components/MobileBottomNav.jsx";
import MobileTopbar from "../components/MobileTopbar.jsx";
import RightPanel from "../components/RightPanel.jsx";
import Sidebar from "../components/Sidebar.jsx";
import StatsGrid from "../components/StatsGrid.jsx";
import TaskList from "../components/TaskList.jsx";
import Topbar from "../components/Topbar.jsx";

export default function Dashboard() {
  return (
    <div className="relative min-h-screen bg-[#f4f5fb] text-slate-900 overflow-x-clip">
      <Background />
      <MobileTopbar />

      <div className="relative z-10 mx-auto flex max-w-[1360px] gap-5 px-4 pb-10 pt-5 sm:px-6 lg:px-8">
        <Sidebar />

        <main className="min-w-0 flex-1">
          <Topbar />
          <Greeting />
          <StatsGrid />
          <FilterBar />
          <TaskList />
        </main>

        <RightPanel />
      </div>

      <MobileBottomNav />
    </div>
  );
}
