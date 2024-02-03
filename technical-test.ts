const problem = [
    ['flower','flow','flight'],
    ['Max','maximus','maxim'],
    ['dowhile', 'while', 'please'],
    ['hello', 'here','halo']
]

const input = ['flower', 'flow', 'flight']

function findLongestCommonPrefix(input) {
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