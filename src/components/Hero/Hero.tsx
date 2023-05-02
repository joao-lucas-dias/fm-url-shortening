import classes from "./Hero.module.css";

const Hero = () => {
	return (
		<section className={classes.hero}>
			<img
				src="/images/illustration-working.svg"
				alt="Someone working."
				className={classes.image}
			/>
			<div className={classes.body}>
				<div>
					<h1>More than just shorter links</h1>
					<p>
						Build your brand's recognition and get detailed insights on how your links are
						performing.
					</p>
				</div>
				<button>Get Started</button>
			</div>
		</section>
	);
};

export default Hero;
