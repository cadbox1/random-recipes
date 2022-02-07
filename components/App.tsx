export function App() {
	const handleClick = () => {
		alert("Hello!");
	};
	return <button onClick={handleClick}>Click Me</button>;
}
