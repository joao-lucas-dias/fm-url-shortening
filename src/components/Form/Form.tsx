import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import classes from "./Form.module.css";
import Result from "../../../models/types";
import ResultsList from "./Results/ResultsList";

const Form = () => {
	const [error, setError] = useState(false);
	const [enteredUrl, setEnteredUrl] = useState("");
	const [resultsList, setResultsList] = useState<Result[]>(() => {
		const results = localStorage.getItem("results");
		const initialValue = results ? JSON.parse(results) : [];

		return initialValue;
	});

	useEffect(() => {
		localStorage.setItem("results", JSON.stringify(resultsList));
	}, [resultsList]);

	const formSubmitHandler = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (enteredUrl.length === 0) {
			setError(true);
			return;
		}

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
		setError(false);
		setEnteredUrl(event.target.value);
	};

	const inputClasses = error ? `${classes.input} ${classes.input_error}` : classes.input;

	return (
		<div className={classes.wrapper}>
			<form onSubmit={formSubmitHandler} className={classes.form}>
				<div>
					<input
						type="text"
						value={enteredUrl}
						onChange={inputChangeHandler}
						placeholder="Shorten a link here..."
						className={inputClasses}
					/>
					{error && <p className={classes.error}>Please add a link</p>}
				</div>
				<button type="submit">Shorten It!</button>
			</form>
			{resultsList.length > 0 && <ResultsList results={resultsList} />}
		</div>
	);
};

export default Form;
