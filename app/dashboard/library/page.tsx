import { Container, SimpleGrid } from "@mantine/core";
import Cards from "./_components/Cards/Cards";

const page = () => {
	return (
		<Container>
			<SimpleGrid cols={3}>
				<Cards />
			</SimpleGrid>
		</Container>
	);
};
export default page;
