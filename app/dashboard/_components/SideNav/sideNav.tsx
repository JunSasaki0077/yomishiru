import { Group, ScrollArea } from "@mantine/core";
import {
	IconBook,
	IconChevronRight,
	IconDashboard,
	IconLibrary,
	IconSettings,
} from "@tabler/icons-react";

import Link from "next/link";
import { ActiveNavLink } from "../ActiveLink/activeLink";
// import { ActionThemeIcon } from "@/src/components/Theme/ActionThemeIcon";
import c from "./sideNav.module.css";

const data = [
	{ link: "/dashboard", label: "ホーム", icon: IconDashboard },
	{ link: "/dashboard/library", label: "ライブラリ", icon: IconLibrary },
	{ link: "/dashboard/posts", label: "本を追加", icon: IconBook },
	{ link: "/dashboard/setting", label: "設定", icon: IconSettings },
] as const;

export function SideNav(): React.ReactNode {
	return (
		<nav className={c.sidenav}>
			<div className={c.header}>
				<Group justify="space-between">
					ロゴ
					{/* <ActionThemeIcon /> */}
				</Group>
			</div>

			<ScrollArea className={c.links}>
				<div className={c.linksInner}>
					{data.map((item) => (
						<ActiveNavLink
							key={item.label}
							href={item.link}
							label={item.label}
							leftSection={<item.icon size="1.2rem" stroke={1.5} />}
						/>
					))}
				</div>
			</ScrollArea>

			<div className={c.footer}>
				<Link href="/settings" className={c.userLink}>
					<Group wrap="nowrap">
						{/* <UserButton name="じゅん" email="jun@example.com" src="/user.svg" /> */}
						<IconChevronRight size={14} stroke={1.5} />
					</Group>
				</Link>
			</div>
		</nav>
	);
}
