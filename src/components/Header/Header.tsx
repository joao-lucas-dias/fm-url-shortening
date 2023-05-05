import MenuIcon from "@mui/icons-material/Menu";

import classes from "./Header.module.css";

const Header = () => {
	const navigation = document.querySelector(`.${classes.nav_menu}`);

	const closeNavigationOnResize = () => {
		const screenWidth = window.innerWidth;

		if (screenWidth > 767 && navigation?.classList.contains(classes.show)) {
			navigation.classList.remove(classes.show);
		}
	};

	window.addEventListener("resize", closeNavigationOnResize);

	const toggleHandler = () => {
		const classList = navigation?.classList;

		if (classList?.contains(classes.show)) {
			classList.remove(classes.show);
		} else {
			classList?.add(classes.show);
		}
	};

	return (
		<header className={classes.header}>
			<img src="/images/logo.svg" alt="Logo." />
			<button onClick={toggleHandler} className={classes.hamburger}>
				<MenuIcon fontSize="large" />
			</button>
			<div className={classes.nav_menu}>
				<ul>
					<li>Features</li>
					<li>Pricing</li>
					<li>Resources</li>
				</ul>
				<span></span>
				<ul>
					<li>Login</li>
					<li>
						<button className={classes.button}>Sign Up</button>
					</li>
				</ul>
			</div>
		</header>
	);
};

export default Header;
