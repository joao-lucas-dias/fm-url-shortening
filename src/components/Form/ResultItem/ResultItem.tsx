import Result from "../../../../models/types";
import classes from "./ResultItem.module.css";

const ResultItem: React.FC<{ data: Result }> = (props) => {
	return (
		<li className={classes.result_item}>
			<p>{props.data.originalUrl}</p>
			<span></span>
			<p>{props.data.shortUrl}</p>
			<button>Copy</button>
		</li>
	);
};

export default ResultItem;
