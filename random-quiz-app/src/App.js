import React, { Component } from 'react';
import Quiz from './Components/Quiz';
import QuizBank from './Data/QuizBank';
import Score from './Components/Score';

import logo from './logo.png';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <button>Start</button>
//       </header>
//     </div>
//   );
// }

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quizBank: QuizBank,
      currentQuiz: 0,
      quizMaxNumber: 20,
      selectedChoice: "",
      score: 0,
      end: false
    }
  }

  changedChoiceHandler = (e) => {
    this.setState({ selectedChoice: e.target.value });
  }

  submitted = (e) => {
    e.preventDefault();
    this.checkAnswer();
    this.nextQustion();
  }

  checkAnswer = () => {
    const { quizBank, currentQuiz, selectedChoice, score } = this.state
    if (selectedChoice === quizBank[currentQuiz].answer) {
      this.setState((prevState) => ({ score: prevState.score + 1 }));
    }
  }

  nextQustion = () => {
    const { quizBank, currentQuiz } = this.state;
    if (currentQuiz + 1 < quizBank.length) {
      this.setState((prevState) => ({
        currentQuiz: prevState.currentQuiz + 1,
        selectedChoice: ""
      }))
    } else {
      this.setState({
        end: true
      })
    }
  }

  render() {
    const { quizBank, currentQuiz, selectedChoice, score, end } = this.state
    return (
      <div className='App d-flex flex-column align-item-center justify-content-center'>
        <h1 className='quiz-title'>Header</h1>
        {!end ? (
          <Quiz
            quiz ={ quizBank[currentQuiz] }
            selectedChoice = { selectedChoice }
            onChoiceChange = { this.changedChoiceHandler }
            onSubmit = { this.submitted }
          />
        ) : (
          <Score
            score = {score}
            nextQustion = {this.nextQustion}
            className = "score"
          />
        )}
      </div>
    )
  }
}

export default App;
