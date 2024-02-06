import { Component } from "react"

class Score extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         path: 'path',
    //         scores: ScoreBoard
    //     }
    // }
    syncScore() {
        // writeFileSync(this.state.path, JSON.stringify(this.state.scores))
    }
    render() {
        const { scoreboard, score, reQuiz } = this.props
        return (
            <div className="scoreboard">
                <h3>you got</h3>
                <pre>{scoreboard}</pre>
                <h1>{score}!</h1>
                <div className="h-line"></div>
                <div className="score-board">
                    <h2>- Leader Board -</h2>
                    <ol>
                        {
                            scoreboard.map((c) => (
                                <li>{c}</li>
                            ))
                        }
                    </ol>
                </div>
                <button className="btn" onClick={reQuiz}>AGAIN</button>
            </div>
        )
    }
}
export default Score