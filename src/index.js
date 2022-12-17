import React from "react";
import ReactDOM from "react-dom/client";

import { Greeting, UserCard } from "./components/Greeting";
import { Button } from "./components/Button";
import { TaskCard } from "./components/Task";
import Product from "./components/Product";
import { Saludar } from "./components/Saludar";
const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);

root.render(
	<>
		<Button />
		<TaskCard ready={true} />
		<TaskCard ready={false} />
		<Saludar />
	</>
);
