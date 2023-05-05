import CtaButton from "../UI/CtaButton";
import classes from "./Cta.module.css";

const Cta = () => {
	return (
		<section className={classes.secondary_cta}>
			<h2>Boost your links today</h2>
			<CtaButton />
		</section>
	);
};

export default Cta;
