import { Avatar, Group, Stack, Text } from "@mantine/core";
import Image from "next/image";
import c from "./userButton.module.css";

export function UserButton({
	name,
	email,
	src,
}: {
	name: string;
	email: string;
	src: string;
}) {
	return (
		<Group wrap="nowrap" className={c.user}>
			<Avatar>
				<Image src={src} alt="User image" fill={true} />
			</Avatar>

			<Stack gap={2} className={c.stack}>
				<Text size="sm" lineClamp={1}>
					{name}
				</Text>
				<Text c="dimmed" size="xs" lineClamp={1}>
					{email}
				</Text>
			</Stack>
		</Group>
	);
}
