import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

import { Posts } from "./components/Posts";

const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);

function Counter() {
	const [message, setMessage] = useState("");
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		console.log("effect");
	}, [counter]);

	return (
		<>
			<input onChange={(e) => setMessage(e.target.value)} />
			<button
				onClick={() => {
					alert("El mensaje es: " + message);
				}}
			>
				Save
			</button>
			<hr />
			<h1>Counter: {counter}</h1>
			<button onClick={() => setCounter(counter + 1)}>Incrementar</button>
		</>
	);
}

root.render(
	<>
		<Counter />
	</>
);
