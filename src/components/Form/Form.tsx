import { ChangeEvent, FormEvent, useState } from "react";
import classes from "./Form.module.css";

const Form = () => {
  const [enteredUrl, setEnteredUrl] = useState("");

  const formSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const inputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEnteredUrl(event.target.value);
  };

	return (
		<>
			<form onSubmit={formSubmitHandler} className={classes.form}>
				<input type="text" onChange={inputChangeHandler} placeholder="Shorten a link here..." />
				<button type="submit">Shorten It!</button>
			</form>
			{false && <ul className={classes.results_list}></ul>}
		</>
	);
};

export default Form;
