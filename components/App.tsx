import { P } from "cadells-vanilla-components";
import { useState } from "react";
import { combinations } from "./combinations";

export function App() {
	const [recipeType, setRecipeType] = useState("");
	const [protein, setProtein] = useState("");
	const [sauce, setSauce] = useState("");
	const [option, setOption] = useState("");
	const [holds, setHolds] = useState<string[]>([]);

	const getRecipeType = () => {
		if (holds.includes("type")) {
			return recipeType;
		} else {
			const combinationKeys = Object.keys(combinations);
			return combinationKeys[
				Math.floor(combinationKeys.length * Math.random())
			];
		}
	};

	const handleRollClick = () => {
		const recipeType = getRecipeType();
		const combination = combinations[recipeType];
		setRecipeType(recipeType);

		if (!holds.includes("protein")) {
			const proteins = combination.proteins;
			const protein = proteins[Math.floor(proteins.length * Math.random())];
			setProtein(protein);
		}

		if (!holds.includes("sauce")) {
			const sauces = combination.sauces;
			const sauce = sauces[Math.floor(sauces.length * Math.random())];
			setSauce(sauce);
		}

		if (!holds.includes("option")) {
			const options = combination.options;
			const option = options[Math.floor(options.length * Math.random())];
			setOption(option);
		}
	};

	const handleHold = holdType => evt => {
		// remove any existing entries. could have probably used a set but oh well.
		const newHolds = holds.filter(hold => hold !== holdType);
		if (evt.target.checked) {
			newHolds.push(holdType);
		}
		setHolds(newHolds);
	};

	return (
		<div>
			<P>
				<button onClick={handleRollClick}>Roll</button>
			</P>
			<P>Check the checkbox to hold that ingredient.</P>

			<P>
				<input
					type="checkbox"
					onChange={handleHold("type")}
					checked={holds.includes("type")}
				/>{" "}
				Recipe Type: {recipeType}
			</P>
			<P>
				<input
					type="checkbox"
					onChange={handleHold("protein")}
					checked={holds.includes("protein")}
				/>
				Protein: {protein}
			</P>
			<P>
				<input
					type="checkbox"
					onChange={handleHold("sauce")}
					checked={holds.includes("sauce")}
				/>
				Sauce: {sauce}
			</P>
			<P>
				<input
					type="checkbox"
					onChange={handleHold("option")}
					checked={holds.includes("option")}
				/>
				Option: {option}
			</P>
		</div>
	);
}
