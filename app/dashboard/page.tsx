import { Container, Space } from "@mantine/core";
import Chart from "./_components/Heatmap/Heatmap";
import { UserButton } from "./_components/UserButton/userButton";

export default async function Page() {
	return (
		<Container size="xl">
			<Space h="xl" />
			<div>
				<UserButton name="じゅん" email="jun@example.com" src="/user.svg" />
			</div>
			<Space h="xl" />
			<Chart />
		</Container>
	);
}
