import { useEffect, useState } from "react";
import { styled } from "styled-components";

let px = 255 / screen.width;
let py = 255 / screen.height;
let pd = 255 / Math.sqrt(Math.pow(screen.width, 2), Math.pow(screen.height, 2));

function App() {
	const [coords, setCoords] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const handleWindowMouseMove = (event) => {
			setCoords({
				x: event.clientX,
				y: event.clientY,
			});
		};
		window.addEventListener("mousemove", handleWindowMouseMove);

		return () => {
			window.removeEventListener("mousemove", handleWindowMouseMove);
		};
	}, []);

	return (
		<Corpo
			r={Math.ceil(coords.x * px)}
			g={Math.ceil(coords.y * py)}
			b={
				Math.ceil(Math.sqrt(Math.pow(coords.x, 2), Math.pow(coords.y, 2))) * pd
			}
		></Corpo>
	);
}

const Corpo = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: ${({ r, g, b }) => `rgb( ${r}, ${g}, ${b})`};
`;

export default App;
