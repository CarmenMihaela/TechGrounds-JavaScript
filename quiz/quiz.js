let initialDiv = document.getElementById('initial')
console.log(initialDiv)
let startButton = document.createElement('button')
let startButtonText = document.createTextNode("Start")


startButton.appendChild(startButtonText)
startButton.setAttribute("id", "start")

initialDiv.appendChild(startButton)
startButton.classList.add('btn')

function buildGameLayout() {
    initialDiv.removeChild(startButton)
    let bigContainer = document.createElement('div')
    bigContainer.classList.add('container')
    initialDiv.appendChild(bigContainer)

    let title = document.createElement('h1')
    title.style.backgroundColor = "transparent"
    let titleText = document.createTextNode("Math Problem")
    title.appendChild(titleText)
    bigContainer.appendChild(title)

    let subTitle = document.createElement('h2')
    let subTitleText = document.createTextNode("1/6")
    subTitle.appendChild(subTitleText)
    bigContainer.appendChild(subTitle)

    let question = document.createElement('h2')

    let operations = ["+", "-"]
    let numbers = []

    while (numbers.length < 2) {
        let number = Math.floor(Math.random() * 100) + 1
        if(numbers.indexOf(number) === -1) numbers.push(number) //an array with unique positive numbers is generated
    }

    console.log(numbers)

    let firstNumber = numbers[0]
    let operation = operations[Math.floor(Math.random() * operations.length)]
    let secondNumber = numbers[1]

    
    function correctAnswer(firstNumber, operation, secondNumber) {
        if (operation =="-") {
            result = firstNumber - secondNumber
        } else if (operation == "+") {
            result = firstNumber + secondNumber
         } return result
    }

    correctAnswer = correctAnswer(firstNumber, operation, secondNumber)

    question.innerHTML = "What is " + firstNumber + " " + operation + " " + secondNumber
    bigContainer.appendChild(question)

    let firstAnswerContainer = document.createElement('div')
    firstAnswerContainer.classList.add('answerContainer')
    let firstCircle = document.createElement('div')
    firstCircle.classList.add('circle1')
    let firstCircleText = document.createTextNode("1")
    firstCircle.appendChild(firstCircleText)
    firstAnswerContainer.appendChild(firstCircle)
    let firstRectangle = document.createElement('div')
    firstRectangle.setAttribute("id", "firstr")
    firstRectangle.classList.add('rectangle1')
    firstCircle.setAttribute("id", "firstc")

    let answers = [correctAnswer] // the correct answer is included in the possible answers array
    while (answers.length < 5) {
        let answer = Math.floor(Math.random() * 200) + 1
        answer *= Math.round(Math.random()) ? 1 : -1
        if(answers.indexOf(answer) === -1) answers.push(answer) //an array with unique positive and negative numbers is generated
    }

    let firstAnswer = answers[Math.floor(Math.random() * answers.length)] //selecting a random number from array
    firstRectangle.innerText = firstAnswer
    let firstAnswerIndex = answers.indexOf(firstAnswer)
    answers.splice(firstAnswerIndex, 1) //removing the selected value from the array

    firstAnswerContainer.appendChild(firstRectangle)
    bigContainer.appendChild(firstAnswerContainer)

    let secondAnswerContainer = document.createElement('div')
    secondAnswerContainer.classList.add('answerContainer')
    let secondRectangle = document.createElement('div')

    secondRectangle.classList.add('rectangle2')
    let secondCircle = document.createElement('div')
    let secondCircleText = document.createTextNode("2")
    secondCircle.appendChild(secondCircleText)
    secondAnswerContainer.appendChild(secondCircle)
    secondCircle.classList.add('circle2')
    secondRectangle.setAttribute("id", "secondr")
    secondCircle.setAttribute("id", "secondc")

    let secondAnswer = answers[Math.floor(Math.random() * answers.length)] //selecting a random number from array
    secondRectangle.innerText = secondAnswer
    let secondAnswerIndex = answers.indexOf(secondAnswer)
    answers.splice(secondAnswerIndex, 1) //removing the selected value from the array
    console.log(answers)
    
    secondAnswerContainer.appendChild(secondRectangle)
    bigContainer.appendChild(secondAnswerContainer)

    let thirdAnswerContainer = document.createElement('div')
    thirdAnswerContainer.classList.add('answerContainer')
    let thirdCircle = document.createElement('div')
    let thirdCircleText = document.createTextNode("3")
    thirdCircle.appendChild(thirdCircleText)
    thirdAnswerContainer.appendChild(thirdCircle)
    thirdCircle.classList.add('circle3')
    let thirdRectangle = document.createElement('div')
    thirdRectangle.setAttribute("id", "thirdr")
    thirdCircle.setAttribute("id", "thirdc")

    
    let thirdAnswer = answers[Math.floor(Math.random() * answers.length)] //selecting a random number from array
    thirdRectangle.innerText = thirdAnswer
    let thirdAnswerIndex = answers.indexOf(thirdAnswer)
    answers.splice(thirdAnswerIndex, 1) //removing the selected value from the array

    thirdAnswerContainer.appendChild(thirdRectangle)
    thirdRectangle.classList.add('rectangle3')
    bigContainer.appendChild(thirdAnswerContainer)

    let fourthAnswerContainer = document.createElement('div')
    fourthAnswerContainer.classList.add('answerContainer')
    let fourthCircle = document.createElement('div')
    let fourthCircleText = document.createTextNode("4")
    fourthCircle.appendChild(fourthCircleText)
    fourthAnswerContainer.appendChild(fourthCircle)
    let fourthRectangle = document.createElement('div')
    fourthRectangle.setAttribute("id", "fourthr")
    fourthCircle.setAttribute("id", "fourthc")

    let fourthAnswer = answers[Math.floor(Math.random() * answers.length)] //selecting a random number from array
    fourthRectangle.innerText = fourthAnswer
    let fourthAnswerIndex = answers.indexOf(fourthAnswer)
    fourthRectangle.classList.add('rectangle2')
    answers.splice(fourthAnswerIndex, 1) //removing the selected value from the array
    console.log(answers)

    fourthAnswerContainer.appendChild(fourthRectangle)
    bigContainer.appendChild(fourthAnswerContainer)
    fourthCircle.classList.add('circle2')
    

    let fifthAnswerContainer = document.createElement('div')
    fifthAnswerContainer.classList.add('answerContainer')
    let fifthCircle = document.createElement('div')
    let fifthCircleText = document.createTextNode("5")
    fifthCircle.classList.add('circle5')
    fifthCircle.appendChild(fifthCircleText)
    fifthAnswerContainer.appendChild(fifthCircle)
    let fifthRectangle = document.createElement('div')
    fifthRectangle.classList.add('rectangle5')
    fifthRectangle.setAttribute("id", "fifthr")
    fifthCircle.setAttribute("id", "fifthc")

    let fifthAnswer = answers[0]
    fifthRectangle.innerText = fifthAnswer
    fifthAnswerContainer.appendChild(fifthRectangle)
    bigContainer.appendChild(fifthAnswerContainer)

    let previousButton = document.createElement('button')
    let previousButtonText = document.createTextNode("previous")
    previousButton.appendChild(previousButtonText)
    document.body.appendChild(previousButton)
    previousButton.classList.add('btn')
    previousButton.setAttribute("id", "previous")

    let nextButton = document.createElement('button')
    let nextButtonText = document.createTextNode("next")
    nextButton.appendChild(nextButtonText)
    document.body.appendChild(nextButton)
    nextButton.classList.add('btn')
    nextButton.setAttribute("id", "next")

function checkAnswerFifth(event) {
if (event.currentTarget.innerText == correctAnswer) {
    event.currentTarget.style.backgroundColor = 'green'
    fifthCircle.style.backgroundColor = 'green'
} else {event.currentTarget.style.backgroundColor = 'red'
fifthCircle.style.backgroundColor = 'red'
if (firstAnswer == correctAnswer) {
    firstRectangle.style.backgroundColor = 'green'
    firstCircle.style.backgroundColor = 'green'
}
if (secondAnswer == correctAnswer) {
    secondRectangle.style.backgroundColor = 'green'
    secondCircle.style.backgroundColor = 'green'
}
if (thirdAnswer == correctAnswer) {
    thirdRectangle.style.backgroundColor = 'green'
    thirdCircle.style.backgroundColor = 'green'
}
if (fourthAnswer == correctAnswer) {
    fourthRectangle.style.backgroundColor = 'green'
    fourthCircle.style.backgroundColor = 'green'
}}}

fifthRectangle.addEventListener("click", () => {
    checkAnswerFifth(event)
})
function checkAnswerFourth(event) {
    if (event.currentTarget.innerText == correctAnswer) {
        event.currentTarget.style.backgroundColor = 'green'
        fourthCircle.style.backgroundColor = 'green'
    } else {event.currentTarget.style.backgroundColor = 'red'
    fourthCircle.style.backgroundColor = 'red'
    if (firstAnswer == correctAnswer) {
        firstRectangle.style.backgroundColor = 'green'
        firstCircle.style.backgroundColor = 'green'
    }
    if (secondAnswer == correctAnswer) {
        secondRectangle.style.backgroundColor = 'green'
        secondCircle.style.backgroundColor = 'green'
    }
    if (thirdAnswer == correctAnswer) {
        thirdRectangle.style.backgroundColor = 'green'
        thirdCircle.style.backgroundColor = 'green'
    }
    if (fifthAnswer == correctAnswer) {
        fifthRectangle.style.backgroundColor = 'green'
        fifthCircle.style.backgroundColor = 'green'
    }}}
    
    fourthRectangle.addEventListener("click", () => {
        checkAnswerFourth(event)
    })

function checkAnswerThird(event) {
    if (event.currentTarget.innerText == correctAnswer) {
        event.currentTarget.style.backgroundColor = 'green'
        thirdCircle.style.backgroundColor = 'green'
    } else {event.currentTarget.style.backgroundColor = 'red'
    thirdCircle.style.backgroundColor = 'red'
    if (firstAnswer == correctAnswer) {
        firstRectangle.style.backgroundColor = 'green'
        firstCircle.style.backgroundColor = 'green'
    }
    if (secondAnswer == correctAnswer) {
        secondRectangle.style.backgroundColor = 'green'
        secondCircle.style.backgroundColor = 'green'
    }
    if (fourthAnswer == correctAnswer) {
        fourthRectangle.style.backgroundColor = 'green'
        fourthCircle.style.backgroundColor = 'green'
    }
    if (fifthAnswer == correctAnswer) {
        fifthRectangle.style.backgroundColor = 'green'
        fifthCircle.style.backgroundColor = 'green'
    }}}
    
thirdRectangle.addEventListener("click", () => {
        checkAnswerThird(event)
    })

function checkAnswerSecond(event) {
    if (event.currentTarget.innerText == correctAnswer) {
        event.currentTarget.style.backgroundColor = 'green'
        secondCircle.style.backgroundColor = 'green'
    } else {event.currentTarget.style.backgroundColor = 'red'
    secondCircle.style.backgroundColor = 'red'
    if (firstAnswer == correctAnswer) {
        firstRectangle.style.backgroundColor = 'green'
        firstCircle.style.backgroundColor = 'green'
    }
    if (thirdAnswer == correctAnswer) {
        thirdRectangle.style.backgroundColor = 'green'
        thirdCircle.style.backgroundColor = 'green'
    }
    if (fourthAnswer == correctAnswer) {
        fourthRectangle.style.backgroundColor = 'green'
        fourthCircle.style.backgroundColor = 'green'
    }
    if (fifthAnswer == correctAnswer) {
        fifthRectangle.style.backgroundColor = 'green'
        fifthCircle.style.backgroundColor = 'green'
    }}}
    
secondRectangle.addEventListener("click", () => {
        checkAnswerSecond(event)
    })

function checkAnswerFirst(event) {
    if (event.currentTarget.innerText == correctAnswer) {
        event.currentTarget.style.backgroundColor = 'green'
        firstCircle.style.backgroundColor = 'green'
    } else {event.currentTarget.style.backgroundColor = 'red'
    firstCircle.style.backgroundColor = 'red'
    if (secondAnswer == correctAnswer) {
        secondRectangle.style.backgroundColor = 'green'
        secondCircle.style.backgroundColor = 'green'
    }
    if (secondAnswer == correctAnswer) {
        secondRectangle.style.backgroundColor = 'green'
        secondCircle.style.backgroundColor = 'green'
    }
    if (fourthAnswer == correctAnswer) {
        fourthRectangle.style.backgroundColor = 'green'
        fourthCircle.style.backgroundColor = 'green'
    }
    if (fifthAnswer == correctAnswer) {
        fifthRectangle.style.backgroundColor = 'green'
        fifthCircle.style.backgroundColor = 'green'
    }}}
    
firstRectangle.addEventListener("click", () => {
        checkAnswerFirst(event)
    })


let 
questionNumber = [1, 2, 3, 4, 5, 6]
let questionIndex = 1

function showQuestionNumber() {
    subTitle.innerText = questionNumber[questionIndex] + "/" + questionNumber.length
    questionIndex++ 
    if (questionIndex >= questionNumber.length) {
        questionIndex = questionNumber.length-1
    }
}



nextButton.addEventListener("click", () => {
    showQuestionNumber()
})

}

startButton.addEventListener("click", () => {
    buildGameLayout()
})


