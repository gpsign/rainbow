import { useEffect, useState } from "react";
import { styled } from "styled-components";

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

	return <Corpo coords={coords}></Corpo>;
}

const Corpo = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: ${({ coords }) =>
		`rgb( ${Math.ceil(coords.x * (255 / screen.width))}, ${Math.ceil(
			coords.y * (255 / screen.height)
		)}, ${
			255 /
			Math.ceil(
				Math.sqrt(
					Math.pow(Math.ceil(coords.x * (255 / screen.width)), 2) +
						Math.pow(Math.ceil(coords.y * (255 / screen.height)), 2)
				)
			)
		})`};
`;

export default App;
