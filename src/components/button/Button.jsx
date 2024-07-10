import styled from "styled-components";
import { LoadingSpinner } from "../loading";
import PropTypes from "prop-types";
const ButtonStyle = styled.button`
	width: 100%;
	cursor: pointer;
	max-width: 150px;
	border-radius: 8px;
	padding: 10px 15px;
	color: #fff;
	background-image: linear-gradient(
		to right bottom,
		${(props) => props.theme.primary},
		${(props) => props.theme.secondary}
	);
	&:disabled {
		opacity: 0.5;
		pointer-events: none;
	}
`;
const Button = ({
	type = "button",
	children,
	onClick = () => {},
	...props
}) => {
	const { isLoading } = props;
	const child = isLoading ? <LoadingSpinner></LoadingSpinner> : children;
	return (
		<ButtonStyle type={type} {...props} onClick={onClick}>
			{child}
		</ButtonStyle>
	);
};
Button.propTypes = {
	type: PropTypes.oneOf(["button", "submit"]).isRequired,
	children: PropTypes.node,
	onClick: PropTypes.func,
	isLoading: PropTypes.bool,
};
export default Button;
