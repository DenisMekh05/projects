//                                                          TEST



//1
//  javascript object notation

//2
//  чтобы легче передать информацию джаваскрипт в виде текста

//3
// txt

//4
const user = {
    "name": "Denis",
    "surname": "Mekhbalieff"
}

//5

const user1 = {
    "name": "Denis",
    "surname": "Mekhbalieff",
    "array": [1, 2, 3]
}

//6
// let json = JSON.parse(user1)
// console.log(json)

//7
//  чтобы пошагово проверить код



//                                                          TASKS



function convertToDigital(array) {
    let array1 = new Array()
    array.split(``)
    for (let i of array) {
        if (!i == `%`) {
            array1.push(i)
        }
    }
    return array1
}

function toArray(number) {
    String(number)
    number.split(``)
    return number
}

function toNumber(array) {
    array.concat()
    return array
}

function leftDigit(array) {
    for (let i of array) {
        if (!isNaN(i)) {
            return i
            break
        }
    }
}

function minutesToSeconds(time) {
    let mind = time % (60 * 60);
    let minutes = Math.floor(mind / 60);
    let second = mind % 60; 
    let seconds = Math.ceil(second);
    return seconds
}

function highLow(string) {
    let numbers = new Array()
    string.split(``)
    for (let i of string) {
        if (!isNaN(i)) {
            Number(i)
            number.push(i)
        }
    }
    let minMax = new Array()
    minMax.push(Math.max(numbers))
    minMax.push(Math.min(numbers))
    return minMax
}