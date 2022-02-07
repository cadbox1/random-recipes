export type Combination = {
	proteins: string[];
	sauces: string[];
	options: string[];
};

export type Combinations = { [key: string]: Combination };

export const combinations: Combinations = {
	bolognese: {
		proteins: ["beef", "pork"],
		sauces: ["tomato"],
		options: ["zuchini", "eggplant", "olives", "feta-cheese"],
	},
	["stir-fry"]: {
		proteins: ["beef", "chicken", "egg"],
		sauces: ["oyster", "hoisin", "soy"],
		options: [
			"bok-choy",
			"broccoli",
			"spring-onion",
			"capsicum",
			"red-onion",
			"mushroom",
		],
	},
	salad: {
		proteins: ["chicken"],
		sauces: ["balsamic-glaze", "japanese-mayo", "olive-oil", "vinegar"],
		options: [
			"spinach",
			"capsicum",
			"red-onion",
			"cheese",
			"feta-cheese",
			"mushroom",
		],
	},
};
