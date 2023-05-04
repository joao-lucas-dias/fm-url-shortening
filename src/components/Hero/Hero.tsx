import CtaButton from "../UI/CtaButton";
import classes from "./Hero.module.css";

const Hero = () => {
	return (
		<section className={classes.hero}>
			<div className={classes.hero_image}>
				<img
					src="/images/illustration-working.svg"
					alt="Someone working."
				/>
			</div>
			<div className={classes.hero_cta}>
				<div>
					<h1>More than just shorter links</h1>
					<p>
						Build your brand's recognition and get detailed insights on how your links are
						performing.
					</p>
				</div>
				<CtaButton />
			</div>
		</section>
	);
};

export default Hero;
