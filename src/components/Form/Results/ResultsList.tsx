import { useState } from "react";
import Result from "../../../../models/types";
import ResultItem from "./ResultItem";

import classes from "./ResultsList.module.css";

const ResultsList: React.FC<{ results: Result[] }> = (props) => {
	const [copied, setCopied] = useState(-1);

	const copyLinkHandler = async (shortUrl: string, resultIndex: number) => {
		await navigator.clipboard.writeText(shortUrl);

    setCopied(resultIndex);
	};

	return (
		<ul className={classes.results_list}>
			{props.results.map((result, idx) => (
				<ResultItem
					key={result.originalUrl}
					data={result}
					index={idx}
          copied={copied}
					onCopyLink={copyLinkHandler}
				/>
			))}
		</ul>
	);
};

export default ResultsList;
