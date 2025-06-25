import type { ReactNode } from "react";
import { SideNav } from "../SideNav/sideNav";
import c from "./dashboardLayout.module.css";

export default function DashboardLayout({ children }: { children: ReactNode }) {
	return (
		<div className={c.container}>
			<SideNav />
			<main className={c.main}>{children}</main>
		</div>
	);
}
