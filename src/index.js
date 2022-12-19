import React, { useState } from "react";
import ReactDOM from "react-dom/client";

import { Posts } from "./components/Posts";

const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);

function Counter() {
	const [counter, setCounter] = useState(0);
	const handleClickIncrement = () => {
		setCounter(counter + 1);
	};

	const handleClickDecrement = () => {
		setCounter(counter - 1);
	};

	const handleReset = () => {
		setCounter(0);
	};

	return (
		<>
			<h1>
				Counter: <span>{counter}</span>
			</h1>
			<button onClick={handleClickIncrement}>Sumar</button>
			<button onClick={handleClickDecrement}>Restar</button>
			<button onClick={handleReset}>Reiniciar</button>
		</>
	);
}

root.render(
	<>
		<Counter />
	</>
);
