import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

import classes from "./Header.module.css";

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  const navClickHandler = () => {
    setShowNav((oldValue) => !oldValue);
  };

	return (
		<header className={classes.header}>
      <img src="/images/logo.svg" alt="Logo." />
			<button onClick={navClickHandler} className={classes.hamburger}>
				<MenuIcon fontSize="large" />
			</button>
			{showNav && (
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
			)}
		</header>
	);
};

export default Header;
