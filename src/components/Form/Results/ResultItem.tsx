import Result from "../../../../models/types";

import classes from "./ResultItem.module.css";

const ResultItem: React.FC<{
	data: Result;
	index: number;
	copied: number;
	onCopyLink: (shortUrl: string, resultIndex: number) => void;
}> = (props) => {
	const buttonClasses =
		props.copied === props.index
			? `${classes.button} ${classes.button_copied}`
			: classes.button;

	return (
		<li className={classes.result_item}>
			<p className={classes.link}>{props.data.originalUrl}</p>
			<span></span>
			<div>
				<p className={classes.link}>{props.data.shortUrl}</p>
				<button
					onClick={() => props.onCopyLink(props.data.shortUrl, props.index)}
					className={buttonClasses}
				>
					{props.copied === props.index ? "Copied!" : "Copy"}
				</button>
			</div>
		</li>
	);
};

export default ResultItem;
