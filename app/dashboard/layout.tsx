import type { ReactNode } from "react";
import DashboardLayout from "./_components/DashboardLayout/dashboardLayout";

export default function Layout({ children }: { children: ReactNode }) {
	return <DashboardLayout>{children}</DashboardLayout>;
}
