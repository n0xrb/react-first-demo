import "./task.css";
import PropTypes from "prop-types";

export function TaskCard({ ready }) {
	return (
		<div className="card">
			<h1>Mi primer tarea</h1>
			<p className={ready ? "bg-green" : "bg-red"}>{ready ? "Tarea realizada" : "Tarea pendiente"}</p>
		</div>
	);
}

TaskCard.propType = {
	ready: PropTypes.string.isRequired,
};

TaskCard.defaultProps = {
	ready: "Tarea pendiente",
};
