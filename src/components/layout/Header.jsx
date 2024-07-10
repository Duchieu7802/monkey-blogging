import styled from "styled-components";
import Button from "../button/Button";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/auth-context";

const menu = [
	{
		name: "Home",
		href: "/",
	},
	{
		name: "Blog",
		href: "/blog",
	},
	{
		name: "Contact",
		href: "/contact",
	},
];
const HeaderStyles = styled.header`
	padding: 20px;
	.container {
	}
	.header-main {
		display: flex;
		align-items: center;
	}
	.logo {
		display: block;
		max-width: 40px;
	}
	.menu {
		display: flex;
		align-items: center;
		gap: 20px;
		margin-left: 40px;
		list-style: none;
	}

	.search {
		position: relative;
		margin-left: auto;
		max-width: 320px;
		flex: 1;
		margin-right: 15px;
	}
	.search-input {
		border: 1px solid transparent;
		border-radius: 12px;
		padding: 15px;
		background-color: ${(props) => props.theme.grayLight};
		transition: all 0.2s linear;
		font-size: 14px;
		width: 100%;
	}
	input:focus {
		background-color: #fff;
		border: 1px solid #00b4aa;
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

	.search-icon {
		position: absolute;
		right: 10px;
		top: 50%;
		transform: translateY(-50%);
		cursor: pointer;
	}
	.button {
		padding: 15px;
		margin-left: 20px;
		max-width: 100px;
	}
`;
const Header = () => {
	const { userInfo } = useAuth();
	console.log("🚀 ~ Header ~ userInfo:", userInfo);
	const navigate = useNavigate();

	return (
		<HeaderStyles>
			<div className="container">
				<div className="header-main">
					<NavLink to="/">
						<img srcSet="/logo.png 3x" alt="Monkey-blogging" className="logo" />
					</NavLink>
					<ul className="menu">
						{menu.map((item) => (
							<li key={item.name} className="menu-item">
								<NavLink to={`${item.href}`} className="menu-link">
									{item.name}
								</NavLink>
							</li>
						))}
					</ul>
					<div className="search">
						<input
							type="text"
							placeholder="Search posts..."
							className="search-input"
						/>
						<span className="search-icon">
							<svg
								width="18"
								height="17"
								viewBox="0 0 18 17"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<ellipse
									cx="7.66669"
									cy="7.05161"
									rx="6.66669"
									ry="6.05161"
									stroke="#999999"
									strokeWidth="1.5"
								/>
								<path
									d="M17.0001 15.5237L15.2223 13.9099L14.3334 13.103L12.5557 11.4893"
									stroke="#999999"
									strokeWidth="1.5"
									strokeLinecap="round"
								/>
								<path
									d="M11.6665 12.2964C12.9671 12.1544 13.3706 11.8067 13.4443 10.6826"
									stroke="#999999"
									strokeWidth="1.5"
									strokeLinecap="round"
								/>
							</svg>
						</span>
					</div>
					{!userInfo ? (
						<Button
							className="button"
							type="button"
							onClick={() => {
								navigate("/signup");
							}}
						>
							Login
						</Button>
					) : (
						<div>
							<strong>{userInfo?.displayName}</strong>
						</div>
					)}
				</div>
			</div>
		</HeaderStyles>
	);
};

export default Header;
