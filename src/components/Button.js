import PropTypes from "prop-types";

export function Button({ text, type }) {
	return (
		<button id="123" type={type}>
			{text}
		</button>
	);
}

Button.propTypes = {
	text: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
};

Button.defaultProps = {
	type: "button",
};
