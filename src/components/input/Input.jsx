import { useController } from "react-hook-form";
import styled from "styled-components";
const InputStyles = styled.div`
	width: 100%;
	position: relative;
	input {
		padding: ${(props) => (props.hasIcon ? "15px 50px 15px 15px" : "15px")};
		background-color: ${(props) => props.theme.grayLight};
		border-radius: 8px;
		width: 100%;
		border: 1px solid transparent;
		font-weight: 400;
		transition: all 0.2s linear;
		font-size: 14px;
	}
	input::-webkit-input-placeholder {
		color: rgba(132, 135, 139, 1);
	}
	input::-moz-input-placeholder {
		color: rgba(132, 135, 139, 1);
	}
	input:focus::-webkit-input-placeholder {
		color: rgba(196, 196, 196, 1);
	}
	input:focus::-moz-input-placeholder {
		color: rgba(196, 196, 196, 1);
	}
	input:focus {
		border-radius: 8px;
		border: 1px solid #00b4aa;
		background: #fff;
	}
	.input-icon {
		position: absolute;
		right: 10px;
		top: 50%;
		transform: translateY(-50%);
		cursor: pointer;
	}
`;
const Input = ({ control, name = "", type = "text", children, ...props }) => {
	const { field } = useController({
		name,
		control,
		defaultValue: "",
	});

	return (
		<InputStyles hasIcon={children ? true : false}>
			<input id={name} type={type} {...field} {...props} />
			{children ? <div>{children}</div> : null}
		</InputStyles>
	);
};

export default Input;
