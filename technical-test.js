const input = ['flower', 'flow', 'flight']

async function findLongestPrefix(input) {
    return input.map((str: String) => {
        return str.toLowerCase().map((char) => {
            return char
        })
    })
}

async function main() {
    const result = await findLongestPrefix(input)

    console.log("##### RESULT #####")
    console.log(result)
}

main()