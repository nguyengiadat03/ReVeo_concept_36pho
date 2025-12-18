import { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Drawer from "../components/common/Drawer";
import ChoosePhoModal from "../components/common/ChoosePhoModal";

interface AppShellProps {
  children: React.ReactNode;
}

const AppShell = ({ children }: AppShellProps) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const [isChoosePhoModalOpen, setIsChoosePhoModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-950 flex transition-colors">
      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <Sidebar
          isCollapsed={isSidebarCollapsed}
          onToggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
          className="h-screen sticky top-0"
        />
      </div>

      {/* Mobile Drawer */}
      <Drawer
        isOpen={isMobileDrawerOpen}
        onClose={() => setIsMobileDrawerOpen(false)}
      >
        <Sidebar
          isCollapsed={false}
          onToggleCollapse={() => {}}
          className="h-full"
        />
      </Drawer>

      {/* Choose Pho Modal */}
      <ChoosePhoModal
        isOpen={isChoosePhoModalOpen}
        onClose={() => setIsChoosePhoModalOpen(false)}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        <Topbar
          onMenuClick={() => setIsMobileDrawerOpen(true)}
          onNewVideoClick={() => setIsChoosePhoModalOpen(true)}
        />

        {/* Main Content with proper container */}
        <main className="flex-1 overflow-x-hidden">{children}</main>
      </div>
    </div>
  );
};

export default AppShell;
