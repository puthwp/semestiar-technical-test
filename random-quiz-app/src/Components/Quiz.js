import React, {Component} from "react";
import Choice from "./Choice";

class Quiz extends Component{
	render() {
		const {quiz, selectedChoice, onChoiceChange, onSubmit} = this.props;

		return(
			<div className="">
				<h3>No. {quiz.id}</h3>
				<h5 className="mt-2">{ quiz.question }</h5>
				<form onSubmit={ onSubmit } className="mt-2 mb-2">
					<Choice
						options={quiz.options}
						selectedChoice={selectedChoice}
						onChoiceChange={onChoiceChange}
					/>
					<button type="submit" className="btn btn-primary mt-2">
						Next
					</button>
				</form>
				
			</div>
		)
	}
}

export default Quiz;
