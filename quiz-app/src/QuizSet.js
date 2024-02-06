import QuizBank from "./QuizBank"
// var _ = require('underscore-contrib')
const randomQuiz = () => {

    return new Promise((resolve, reject) => {
        Array(20).fill(null)
        .map({
            QuizBank[Math.floor(Math.random() * QuizBank.length)]
        })
    })
}

export default randomQuiz;