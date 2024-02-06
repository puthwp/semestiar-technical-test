import React, { Component } from "react";
import Choice from "./Choice";

class Quiz extends Component {
	// constructor(props) {
	// 	super(props)

	// }

	render() {
		const { number, quiz, selected, changedChoice, submitted } = this.props;

		return (
			<div className="quiz">
				<h1>No. {number}</h1>
				<h2 className="mt-2">{quiz.question}</h2>
				<p>
				{/* {!selected ? (

					) : (
						
					<b>Selected:</b> selected
				)} */}
				</p>
				<form onSubmit={submitted} className="mt-2 mb-2">
					<Choice
						choices={quiz.choice}
						selected={selected}
						changedChoice={changedChoice}
					/>
					<p></p>
					<button type="submit" className="btn btn-primary" disabled={selected.length===0}>
						Next
					</button>
				</form>

			</div>
		)
	}
}

export default Quiz;
