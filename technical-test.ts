const problem = [
    ['flower','flow','flight'],
    ['Max','maximus','maxim'],
    ['dowhile', 'while', 'please'],
    ['hello', 'here','halo']
]
const MAX_RANGE = 200
// const input = ['flower', 'flow', 'flight']

function checkConditions(input) {
    if (input.length > MAX_RANGE) {
        return false
    }
    let longestWord = input.sort((a, b) =>  b.length - a.length)[0]
    if (longestWord.length > MAX_RANGE) {
        return false
    }
    return true
}

function findLongestCommonPrefix(input) {
    if (!checkConditions(input)) {
        return "limit reached"
    }
    
    const words = input.map((word) => {
        return word.toLowerCase()
    })
    let shortestWord = words.sort((a, b) =>  a.length - b.length)[0]

    console.log("shortest : " + shortestWord)

    while (shortestWord && !(isCommonPrefix(words, shortestWord))) {
        shortestWord = shortestWord.slice(0, -1)
    }
    return shortestWord
}

function isCommonPrefix(words, shortest) {
    return words.every(word => String(word).startsWith(shortest))
}

function main() {
    const result = problem.map((input) => {
        return findLongestCommonPrefix(input)
    })

    console.log("##### RESULT #####")
    console.log(result)
}

main()