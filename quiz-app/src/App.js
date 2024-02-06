import React, { Component } from 'react';
import Quiz from './Components/Quiz';
import QuizBank from './Data/QuizBank';
import Score from './Components/Score';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import ScoreBoard from './Data/ScoreBoard';
import { writeFile } from 'fs';
var _ = require("lodash")

class App extends Component {
  constructor(props) {
    super(props)
    const setQuiz = Array(3).fill(null)
    .map(() => { 
      return _.sample(QuizBank)
    })
    this.state = {
      quizBank: setQuiz,
      currentQuizId: 0,
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
    this.updateScore()
    this.nextQustion();
  }

  checkAnswer = () => {
    const { quizBank, currentQuizId, selectedChoice, score } = this.state
    if (selectedChoice == quizBank[currentQuizId].answer) {
      this.setState((prevState) => ({ score: prevState.score + 1 }));
    }
  }

  nextQustion = () => {
    const { quizBank, currentQuizId } = this.state;
    if (currentQuizId + 1 < quizBank.length) {
      this.setState((prevState) => ({
        currentQuizId: prevState.currentQuizId + 1,
        selectedChoice: ""
      }))
    } else {
      this.setState(() => ({
        end: true
      }))
    }
  }

  updateScore = () => {
    const { score } = this.state
    let scboard = require('./Data/score.json')
    let updateScore = Array.from(scboard)
    updateScore.push(score)
    updateScore = updateScore.sort((a,b) => b - a)
    this.recordScore(updateScore)
  }

  restart = () => {
    this.setState((prevState) => ({
      end: false,
      selectedChoice: "",
      currentQuizId: 0,
      score: 0
    }))
  }

  recordScore = (score) => {
    this.setState({
      scoreboard: score
    })
    // writeFile('./Data/score.json', JSON.stringify(score))
  }

  render() {
    const { quizBank, currentQuizId, selectedChoice, score, end, scoreboard } = this.state
    return (
      <div className='App center'>
        {!end ? (
          <Quiz
            number={currentQuizId + 1}
            quiz={quizBank[currentQuizId]}
            selected={selectedChoice}
            changedChoice={this.changedChoiceHandler}
            submitted={this.submitted}
          />
        ) : (
          <Score
            score={score}
            scoreboard={scoreboard}
            reQuiz={this.restart}
            className="score"
          />
        )}
      </div>
    )
  }
}

export default App;
