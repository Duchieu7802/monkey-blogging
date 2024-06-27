import styled from "styled-components";

const LabelSignUp = styled.label`
	color: ${(props) => props.theme.grayDark};
	font-size: 15px;
	cursor: pointer;
`;
const Label = ({ htmlFor = "", children, props }) => {
	return (
		<LabelSignUp htmlFor={htmlFor} {...props}>
			{children}
		</LabelSignUp>
	);
};

export default Label;
