// Choice.js

import React, { Component } from 'react';

class Choice extends Component {
	render() {
		const { choices, selectedChoice, onChoiceChange } = this.props;

		return (
			<div className='choices'>
				{choices.map((choice, index) => (
					<div key={index} className="form-check">
						<input
							type="radio"
							name="choice"
							value={choice}
							checked={selectedChoice === choice}
							onChange={onChoiceChange}
							className="form-check-input"
						/>
						<label className="form-check-label">{choice}</label>
					</div>
				))}
			</div>
		);
	}
}

export default Choice;
