import { Component } from "react";

class Choice extends Component {
    render() {
        const { choices, selectedChoice, onChoiceChanged } = this.props
        return (
            <div className="choices">
                {choices.map((choice, index) => (
                    <div key={index} className="choice-check">
                        <input
                            type="radio"
                            name="choice"
                            value={choice}
                            checked={selectedChoice === choice}
                            onChange={onChoiceChanged}
                            className="form-check-input"
                        />
                        <label className="form-check-label">{choice}</label>
                    </div>
                ))}

            </div>
        )
    }
}

export default Choice