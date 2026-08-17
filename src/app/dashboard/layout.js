import Sidebar from "@/components/dashboard/Sidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import { UserProvider } from "@/context/UserContext";

export default function DashboardLayout({ children }) {
  return (
    <UserProvider>
      <div className="flex bg-bg-primary min-h-screen">
        <Sidebar />
        <main className="flex-1 p-8">
          <DashboardHeader />
          {children}
        </main>
      </div>
    </UserProvider>
  );
}