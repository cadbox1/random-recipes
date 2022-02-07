import NextHead from "next/head";

export const Head = () => (
	<NextHead>
		<title>{`Random Recipes`}</title>
		<meta
			name="viewport"
			content="width=device-width, initial-scale=1, maximum-scale=1"
		/>
	</NextHead>
);
