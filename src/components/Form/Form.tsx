import { ChangeEvent, FormEvent, useState } from "react";
import classes from "./Form.module.css";
import ResultItem from "./ResultItem/ResultItem";
import Result from "../../../models/types";

const Form = () => {
	const [enteredUrl, setEnteredUrl] = useState("");
	const [resultsList, setResultsList] = useState<Result[]>([]);

	const formSubmitHandler = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${enteredUrl}`);

		const resultUrl: string = await response
			.json()
			.then((value) => value.result.full_short_link);

		setResultsList((oldList) => [
			...oldList,
			{ originalUrl: enteredUrl, shortUrl: resultUrl }
		]);

		setEnteredUrl("");
	};

	const inputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		setEnteredUrl(event.target.value);
	};

	return (
		<div className={classes.wrapper}>
			<form onSubmit={formSubmitHandler} className={classes.form}>
				<input
					type="text"
					value={enteredUrl}
					onChange={inputChangeHandler}
					placeholder="Shorten a link here..."
				/>
				<button type="submit">Shorten It!</button>
			</form>
			{resultsList.length > 0 && (
				<ul className={classes.results_list}>
					{resultsList.map((result) => (
						<ResultItem key={result.originalUrl} data={result} />
					))}
				</ul>
			)}
		</div>
	);
};

export default Form;
