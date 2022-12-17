import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting, UserCard } from "./Greeting";
import Product from "./Product";

const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);

root.render(
	<>
		<UserCard
			name="Alex"
			amount={3000}
			married={true}
			points={[99, 33.3, 22.2]}
			address={{ street: "123 Main Street", city: "New York" }}
			greet={function () {
				alert("Hello");
			}}
		/>
		<UserCard name="Hugo" amount={1000} married={false} points={[100, 20]} address={{ street: "Av some 123", city: "New York" }} />
		<Product />
	</>
);
