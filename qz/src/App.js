import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Quiz from "./Components/Quiz";
import QuizBank from "./Components/QuizBank";
import Score from "./Components/Score";
import "./App.css";

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          questionBank: QuizBank,
          currentQuestion: 0,
          selectedChoice: "",
          score: 0,
          quizEnd: false,
      };
  }

  handleChoiceChange = (e) => {
      this.setState({ selectedChoice: e.target.value });
  };

  handleQuizSubmit = (e) => {
      e.preventDefault();
      this.checkAnswer();
      this.handleNextQuestion();
  };

  checkAnswer = () => {
      const { questionBank, currentQuestion, selectedChoice, score } = this.state;
      if (selectedChoice === questionBank[currentQuestion].answer) {
          this.setState((prevState) => ({ score: prevState.score + 1 }));
      }
  };

  handleNextQuestion = () => {
      const { questionBank, currentQuestion } = this.state;
      if (currentQuestion + 1 < questionBank.length) {
          this.setState((prevState) => ({
              currentQuestion: prevState.currentQuestion + 1,
              selectedChoice: "",
          }));
      } else {
          this.setState({
              quizEnd: true,
          });
      }
  };

  render() {
      const { questionBank, currentQuestion, selectedChoice, score, quizEnd } =
          this.state;
      return (
          <div className="App d-flex flex-column align-items-center justify-content-center">
              <h1 className="app-title">QUIZ APP</h1>
              {!quizEnd ? (
                  <Question
                      question={questionBank[currentQuestion]}
                      selectedChoice={selectedChoice}
                      onChoiceChange={this.handleChoiceChange}
                      onSubmit={this.handleQuizSubmit}
                  />
              ) : (
                  <Score
                      score={score}
                      onNextQuestion={this.handleNextQuestion}
                      className="score"
                  />
              )}
          </div>
      );
  }
}

export default App;
