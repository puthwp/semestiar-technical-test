import { Component } from "react";

class Choice extends Component {
    render() {
        const { choices, selected, changedChoice } = this.props
        return (
            <div className="choices">
                <ul>
                    {choices.map((choice, index) => (
                        <li>
                            <input 
                                type="radio" 
                                name=""
                                value={choice}
                                checked={selected === choice}
                                onChange={changedChoice}
                            />
                            <label>{choice}</label>
                            <div class="bullet">
                                <div class="line zero"></div>
                                <div class="line one"></div>
                                <div class="line two"></div>
                                <div class="line three"></div>
                                <div class="line four"></div>
                                <div class="line five"></div>
                                <div class="line six"></div>
                                <div class="line seven"></div>
                            </div>

                        </li>
                        )
                    )}
                </ul>

            </div>
        )
    }
}

export default Choice