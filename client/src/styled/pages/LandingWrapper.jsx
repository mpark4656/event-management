import styled from 'styled-components';

const LandingWrapper = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100vh;
	background: var(--primary-900);
	.modal-container {
		background-color: rgba(0, 0, 0, 0.9);
		padding: 1em;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 99;
	}
	.modal {
		background: var(--white);
		color: var(--primary-900);
		border-radius: 10px;
		padding: 2em;
	}
	.modal-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.modal-menu {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 3em;
	}
	.menu-link {
		width: 100%;
		padding: 0.5em;
		font-size: 1.5em;
		text-transform: capitalize;
		text-align: center;
		color: var(--primary-900);
		text-decoration: none;
	}
	.menu-link:hover {
		background-color: var(--grey-400);
		color: var(--white);
	}
	.top {
		width: 100%;
		background: var(--primary-900);
		color: var(--white);
	}
	.top nav {
		width: 80%;
		margin: auto;
		margin-top: 2em;
		display: grid;
		grid-template-areas: "appname login-register-btns";
		margin-bottom: 5em;
	}
	.app-name p {
		font-size: 1.5em;
		font-weight: 700;
		text-transform: uppercase;
	}
	.app-name, .login-register-btns {
		display: flex;
		align-items: center;
		gap: 1em;
	}
	.top .app-name {
		grid-area: appname;
	}
	.login-register-btns {
		grid-area: login-register-btns;
		justify-content: end;
	}
	.btn {
		border-radius: 20px;
		padding: 0.5em 2em;
		color: white;
		text-decoration: none;
		cursor: pointer;
	}
	.btn-login {
		background-color: var(--primary-400);
	}
	.btn-login:hover {
		background-color: var(--primary-500);
	}
	.btn-register {
		background-color: #ff4800;
	}
	.btn-register:hover {
		background-color: #d44208;
	}
	.hamburger-menu {
		cursor: pointer;
		font-size: 2em;
		display: none;
	}
	.hamburger-menu:hover {
		color: var(--primary-400);
	}
	.about {
		width: 80%;
		margin: auto;
		margin-bottom: 1em;
		display: grid;
		grid-template-areas: "description image";
		gap: 1em;
		align-items: center;
	}
	.description {
		display: flex;
		grid-area: description;
		flex-direction: column;
		justify-content: center;
		gap: 2em;
	}
	.description h1 {
		font-size: 3em;
		text-transform: capitalize;
	}
	.card-container {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: 1fr;
		gap: 1em;
		justify-items: center;
	}
	.card {
		background: var(--white);
		color: var(--black);
		width: 90%;
		padding: 1em;
		border-radius: 15px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: end;
		gap: 1em;
		position: relative;
		box-shadow: 0 0 1px 2px var(--grey-400);
	}
	.card .card-img {
		width: 50%;
	}
	.card-description {
		background-color: var(--white);
		border-radius: 15px;
		padding: 1em;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1em;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		opacity: 0;
		z-index: 1;
		transition: opacity 0.3s linear;
	}
	.card:hover .card-description {
		opacity: 1;
		transition: opacity 0.3s linear;
	}
	.img-container {
		grid-area: image;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.img-splash {
		background: var(--white);
		border-radius: 50%;
	}
	.img-container img {
		width: 90%;
	}
	@media (width < 1500px) {
		.about {
			grid-template-areas: "image" "description";
			gap: 1em;
		}
		.img-splash {
			width: 60%;
		}
	}
	@media (width < 1200px) {
		.about {
			grid-template-rows: 1fr;
		}
		.card-container {
			grid-template-columns: 1fr;
			grid-template-rows: repeat(3, 1fr);
		}
	}
	@media (width > 800px) {
		.modal-container {
			display: none;
		}
	}
	@media (width < 800px) {
		.top nav {
			grid-template-areas: "appname hamburger";
		}
		.login-register-btns {
			display: none;
		}
		.hamburger-menu {
			display: flex;
			justify-content: end;
			grid-area: hamburger;
		}
	}
`;

export default LandingWrapper;