import PropTypes from "prop-types";

export function Button({ text, name, type }) {
	const HandleClick = (e) => {
		console.log(e.target.id);
	};
	return (
		<button id="123" onClick={HandleClick} type={type}>
			{text} - {name}
		</button>
	);
}

Button.propTypes = {
	text: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
};

Button.defaultProps = {
	name: "Some User",
	type: "button",
};
